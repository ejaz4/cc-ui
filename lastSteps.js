const fs = require("fs")
console.log("Preparing last steps");
console.log("Detecting out folder");
const outFolder = "out";
if (!fs.existsSync(outFolder)) {
    throw new Error("Output folder does not exist: " + outFolder);
}
const assetsFolder = "../assets";
console.log("Cleaning assets folder");
if (fs.existsSync(assetsFolder)) {
    fs.rmdirSync(assetsFolder, { recursive: true });
}

fs.mkdirSync(assetsFolder, { recursive: true });

console.log("Moving files to assets folder");
fs.cpSync(outFolder, assetsFolder, { recursive: true, force: true });

console.log("Finished!");
