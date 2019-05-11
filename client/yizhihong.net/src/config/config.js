const USER = process.env.REACT_APP_USER;
const PASSWORD = process.env.REACT_APP_PASSWORD;
const TOKEN = process.env.REACT_APP_TOKEN;
const HOST = process.env.REACT_APP_HOST;
const SERVER = process.env.REACT_APP_SERVER;
const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_KEY;

const EMAIL_REGEX =
  "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
const PASSWORD_REGEX = "^[0-9A-Za-z]{6,}$";

export {
  USER,
  PASSWORD,
  TOKEN,
  HOST,
  SERVER,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  RECAPTCHA_KEY
};
