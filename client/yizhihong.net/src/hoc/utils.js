const clearLocalStorage = () => {
  Object.keys(localStorage).forEach(function(key) {
    if (key.length > 6 && key.substring(0, 6) === "CUSTOM")
      localStorage.removeItem(key);
  });
};

const withTimeParser = time => {
  const times = time.split(" ");
  return times[1] + " " + times[3];
};
/**
 * 
 * @param {String} dateArr 
 * @return {String}
 */
const withDateSorter = dateArr => {
  dateArr.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  });
};

const isImage = url => {
  let len = url.length;
  if (url.substring(len - 3, len) === "png") return true;
  return false;
};

const withDetailsParser = (data, type) => {
  let obj = JSON.parse(data);
  return obj;
};

const validateRegex = (regex, s) => {
  const re = new RegExp(regex);
  return re.test(s);
};

const validateName = name => {
  if (name.trim().length > 30 || name.trim().length === 0) return false;
  return true;
};

const CONTACT_ERROR_MESSAGE = {
  name: "Your name is too long or too short.",
  email: "Please provide the correct email.",
  msg: "The message can't be empty or too long.",
  isVerify: "Google say you are a robot."
};

const CONTACT_MESSAGE = {
  success: "Thanks for reach me out! I hear your voice now!"
};
export {
  clearLocalStorage,
  withTimeParser,
  withDateSorter,
  withDetailsParser,
  isImage,
  validateRegex,
  validateName,
  CONTACT_ERROR_MESSAGE,
  CONTACT_MESSAGE
};
