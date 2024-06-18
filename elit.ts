const stringArr = ["Hello", "how", "are", "you"];
const titleCaseArr = stringArr.map(str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});
