export class Storage {
  public static saveAuthData(token: string, user: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  public static getAuthData() {
    let user = null;
    const userJson = localStorage.getItem('user');

    if (userJson && userJson.trim() !== '') {
      user = JSON.parse(userJson);
    }

    return {
      token: localStorage.getItem('token'),
      user: user,
    };
  }

  public static clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
