const dataGenerator = require("dummy-data-generator").default;

const columnData = {
  name: {
    type: "word",
    length: 10
  },
  city: {
    type: "word",
    length: 7
  },
  state: {
    type: "paragraph",
    length: 2
  },
  "about-me": {
    type: "paragraph",
    length: 100
  }
};

try {
  // throws an error if required parameters are not set
  console.log(
    dataGenerator({
      columnData,
      count: 2,
      isCSV: true
    })
  );
} catch (e) {
  console.log(e); // return the error
}
