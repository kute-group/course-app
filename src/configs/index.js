const ENV = 'prod';
const API_URL_DEV = 'http://localhost:3001';
const API_URL_PROD = 'https://web5days.com';
const DATE_FORMAT = 'HH:mm DD-MM-YYYY';
const SHORT_DATE_FORMAT = 'DD-MM-YYYY';
const SHOW_DATE_FORMAT = 'D MMMM YYYY, HH:mm';

export const API_URL = ENV === 'dev' ? API_URL_DEV : API_URL_PROD;
export const WP_API = 'https://havamath.vn';
export const APP_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3005'
    : 'http://haha.edu.vn/';

const AUTH_SOCIAL = {
  FACEBOOK_APP_ID: '1200779087043720',
  GOOOGLE_APP_ID:
    '722711692838-055a3u2oio4njf1koetn2fkm398fvn2o.apps.googleusercontent.com',
};
const config = {
  ENV,
  API_URL: ENV === 'dev' ? API_URL_DEV : API_URL_PROD,
  WP_API,
  DATE_FORMAT,
  SHOW_DATE_FORMAT,
  AUTH_SOCIAL,
  TINY_MCE_KEY: 'ipix75wg997z58698dapsywgo0x3r8hwygh55k3q6ozf243d',
  PAGE_SIZE: 10,
  PAGE_SIZE_CATEGORY: 100,
};
export { config };
