export interface User {
  id: number;
  prefix: any;
  first_name: string;
  last_name: string;
  contact_no: any;
  unique_code: any;
  language_preference: string;
  ip: string;
  email: string;
  email_verified_at: string;
  sms_otp: any;
  sms_last_otp: any;
  sms_otp_verified_at: any;
  sms_otp_expires_at: any;
  reference: any;
  status: number;
  verified_status: number;
  sg_payload: any;
  stripe_customer_id: any;
  session_id: any;
  is_online: number;
  last_active_at: any;
  created_at: string;
  updated_at: string;
  user_details: UserDetails;
  user_roles: UserRoles;
}

export interface UserDetails {
  id: number;
  user_id: number;
  address1: any;
  address2: any;
  city_id: number;
  state: number;
  country_id: number;
  code: any;
  photo: any;
  tshirt_size: any;
  signature: any;
  created_by: any;
  updated_by: any;
  created_at: string;
  updated_at: string;
}

export interface UserRoles {
  user_id: number;
  role_id: number;
}
