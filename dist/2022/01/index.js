import fs from "fs";
import path from "path";
const Path = new URL(import.meta.url).pathname;
const __dirname = path.dirname(Path);
const filePath = path.join(__dirname, "../../../data/01.txt");
const fileStream = fs.readFileSync(filePath, "utf8");
const inputArray = fileStream.split("\n");
let maxCal = 0;
let calories = 0;
inputArray.forEach((line) => {
    if (line == "") {
        if (calories > maxCal) {
            maxCal = calories;
        }
        calories = 0;
    }
    else {
        calories += Number(line);
    }
    console.log(maxCal);
});
/* const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});
let i = 0;
const calorie: number[] = [];
let maxCal = 0;
rl.on("line", (line) => {
  if (line.length <= 0) {
    i++;
  } else {
    if (calorie[i]) {
      calorie[i] += parseInt(line);
    }
    calorie[i] = parseInt(line);
  }
});
rl.on("close", () => {
  /*   maxCal = Math.max(...calorie); */
/*
  for (let j = 0; j <= calorie.length; j++) {
    if (calorie[i] > maxCal) {
      maxCal = calorie[i];
    }
  }

  console.log(`${maxCal} `);
});  */
