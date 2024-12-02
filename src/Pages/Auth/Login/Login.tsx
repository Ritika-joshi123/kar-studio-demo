import { Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  OverlayLoader,
  regex,
  useAuthentication,
  useSnackBar,
  validatePassword,
} from '../../../Shared';
import { loginUser } from '../../../Services';
import axios, { AxiosError } from 'axios';
import { LoginSocialFacebook } from 'reactjs-social-login';
import {
  NonOAuthError,
  TokenResponse,
  useGoogleLogin,
} from '@react-oauth/google';

interface FormFields {
  email: {
    value: string | undefined;
    errorMessage?: string;
  };
  password: {
    value: string | undefined;
    errorMessage?: string;
  };
}

const Login: FC = () => {
  const { showSnackBar } = useSnackBar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<FormFields>({
    email: { value: undefined },
    password: { value: undefined },
  });

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const { login } = useAuthentication();

  const onFieldValueChange = (
    key: 'email' | 'password',
    value: string | undefined
  ) => {
    let errorMessage: string | null = null;

    switch (key) {
      case 'email':
        if (value === undefined || value.trim() === '') {
          errorMessage = 'Email is required!';
        } else if (!value.match(regex.email)) {
          errorMessage = 'Invalid email entered.';
        } else {
          errorMessage = null;
        }

        break;
      case 'password':
        errorMessage = validatePassword(value);
        break;
    }

    setFormFields({ ...formFields, [key]: { value, errorMessage } });
  };

  const validateFields = (): boolean => {
    const updatedFields = { ...formFields };
    let isFormValid = true;

    // email validations
    if (
      updatedFields.email.value === undefined ||
      updatedFields.email.value.trim() === ''
    ) {
      updatedFields.email.errorMessage = 'Email is required!';
      isFormValid = false;
    } else {
      const isRegexMatched = updatedFields.email.value.match(regex.email);
      if (!isRegexMatched) {
        updatedFields.email.errorMessage = 'Invalid email entered';
        isFormValid = false;
      }
    }

    //password validations
    const passwordError = validatePassword(updatedFields.password.value);

    if (passwordError) {
      updatedFields.password.errorMessage = passwordError;
      isFormValid = false;
    }

    setFormFields(updatedFields);
    return isFormValid;
  };

  const handleLogin = async () => {
    const isFormValid = validateFields();

    if (!isFormValid) {
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await loginUser(
        formFields.email.value!,
        formFields.password.value!
      );
      login(data.token, data.user);
      showSnackBar(data.msg, 'success');
    } catch (error) {
      const response = (error as AxiosError)?.response as any;

      if (response) {
        showSnackBar(response.data.msg, 'error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onGoogleSignInSuccess = async (tokenRes: TokenResponse) => {
    try {
      const { access_token } = tokenRes;
      const url = `${process.env.REACT_APP_GOOGLE_OAUTH_API_URL}/userinfo`;

      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const { email, family_name, given_name } = data;

      login(data.token, {
        email,
        first_name: given_name,
        last_name: family_name,
      });
      showSnackBar('Login Successfully!', 'success');
    } catch (err) {
      showSnackBar('Login Failed', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const onGoogleSignInFailed = (error: any) => {
    setIsLoading(false);
  };

  const onGoogleNonOAuthError = (error: NonOAuthError) => {
    setIsLoading(false);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenRes) => onGoogleSignInSuccess(tokenRes),
    onError: (error) => onGoogleSignInFailed(error),
    onNonOAuthError: (err) => onGoogleNonOAuthError(err),
  });

  const initGoogleSignIn = () => {
    setIsLoading(true);
    googleLogin();
  };

  return (
    <>
      {isLoading && <OverlayLoader />}

      <div className="wrapper-auth">
        <div className="right-product-sidebar register-section">
          <div className="inner-right-product Register-page">
            <div className="upload-tittle">
              <h1>Log In</h1>
              <p>
                Not a member? <Link to="/register">Register</Link>
              </p>
            </div>

            <div className="social-icon">
              <LoginSocialFacebook
                appId={'381762683793225'}
                onResolve={(data) => console.log(data)} // Use the new function here
                onReject={(error) => {
                  console.log(error);
                }}
              >
                <button className="authLogin">
                  <img src="/images/facebook.png" alt="img" />
                  Continue with Facebook
                </button>
              </LoginSocialFacebook>

              <button className="authLogin" onClick={initGoogleSignIn}>
                <img src="/images/googl1.png" alt="img" />
                Continue with Google
              </button>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formFields.email.value}
                    onChange={(e) =>
                      onFieldValueChange('email', e.target.value)
                    }
                    className="form-control"
                    placeholder="Enter Email Address"
                    disabled={isLoading}
                  />
                </div>

                <Typography
                  color="error"
                  variant="h6"
                  sx={{ marginBottom: '1.5rem', marginLeft: '1rem' }}
                >
                  {formFields.email.errorMessage}
                </Typography>
              </div>
              <div className="col-md-12">
                <div
                  className="form-group mb-1"
                  style={{ position: 'relative' }}
                >
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formFields.password.value}
                    onChange={(e) =>
                      onFieldValueChange('password', e.target.value)
                    }
                    className="form-control"
                    placeholder="Enter Password"
                    disabled={isLoading}
                  />

                  <img
                    src={showPassword ? 'images/hide.svg' : 'images/eye.png'}
                    alt="toggle visibility"
                    className="eyes"
                    onClick={toggleShowPassword}
                  />
                </div>

                <Typography
                  color="error"
                  variant="h6"
                  sx={{ marginBottom: '1.5rem', marginLeft: '1rem' }}
                >
                  {formFields.password.errorMessage}
                </Typography>
              </div>
              <div className="inputbox col-md-6 login_flex">
                <div
                  className="label-web checkbox-wrapper-1 checkbox-black form-group mt-1"
                  style={{ marginTop: '1rem' }}
                >
                  <input
                    id="Remember1"
                    name="rememberMe"
                    type="checkbox"
                    // checked={formData.rememberMe}
                    // onChange={handleInputChange}
                    className="substituted"
                  />
                  <label
                    style={{ color: 'grey', fontSize: '18px' }}
                    htmlFor="Remember1"
                  >
                    Remember Me
                  </label>
                </div>
                <button>Forgot Password?</button>
              </div>

              <button
                disabled={isLoading}
                onClick={handleLogin}
                className="form-button button-register"
              >
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
