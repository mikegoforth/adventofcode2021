import { promises as fsPromises } from "fs";

fsPromises
  .readFile("../input.txt", "utf8")
  .then((data) => {
    let lines = data.toString().split("\n");
    let sums = [];
    for (let i = 0; i < lines.length; i++) {
      let sum =
        parseInt(lines[i]) + parseInt(lines[i + 1]) + parseInt(lines[i + 2]);
      sums.push(sum);
    }
    let count = 0;
    for (let i = 1; i < sums.length; i++) {
      if (parseInt(sums[i]) > parseInt(sums[i - 1])) {
        count++;
      }
    }
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
