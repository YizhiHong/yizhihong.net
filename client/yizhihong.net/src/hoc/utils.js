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
  if (url.substring(len - 3, len) === "png") return true
  return false
};

const withDetailsParser = (data, type) => {
  let obj = JSON.parse(data);
  return obj;
};

export { withTimeParser, withDateSorter, withDetailsParser, isImage };
