const withTimeParser = time => {
  const times = time.split(" ");
  return times[1] + " " + times[3];
};

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
  const re = new RegExp(regex)
  return re.test(s)
};

const validateName = name => {
  if(name.trim().length > 30 || name.trim().length === 0) return false
  return true
};

export {
  withTimeParser,
  withDateSorter,
  withDetailsParser,
  isImage,
  validateRegex,
  validateName
};
