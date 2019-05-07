const withTimeParser = time => {
  const times = time.split(" ");
  return times[1] + " " + times[3];
};

const withDateSorter = dateArr => {
  dateArr.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  });
};

const withDetailsParser = (data, type) => {
  let obj = JSON.parse(data);
  return obj;
};

export { withTimeParser, withDateSorter, withDetailsParser };
