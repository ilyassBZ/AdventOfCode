import fs from "fs";
import path from "path";
const Path = new URL(import.meta.url).pathname;
const __dirname = path.dirname(Path);
const filePath = path.join(__dirname, "../../../data/02.txt");
const fileStream = fs.readFileSync(filePath, "utf8");
const inputArray = fileStream.split("\n");
const elf = { A: 1, B: 2, C: 3 };
const me = { X: 1, Y: 2, Z: 3 };
let score = 0;
inputArray.forEach((line) => {
    const [a, b] = line.split(" ");
    if (a && b) {
        if ((a != "A" || b != "Z") && (a != "C" || b != "X")) {
            if (elf[a] === me[b]) {
                score += me[b] + 3;
                return;
            }
            else if (elf[a] > me[b]) {
                score += me[b] + 0;
                return;
            }
            else if (elf[a] < me[b]) {
                score += me[b] + 6;
                return;
            }
        }
        else {
            if (a == "A" || b == "Z") {
                score += me[b];
            }
            if (a == "C" || b == "X") {
                score += me[b] + 6;
            }
        }
    }
});
console.log(score);
