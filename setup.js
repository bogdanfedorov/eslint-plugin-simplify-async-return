import { execSync } from "child_process";
import fs from "fs";

// Initialize npm project
execSync("npm init -y");

// Install dependencies
execSync("npm install --save-dev eslint jest");

// Update package.json
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
packageJson.scripts = {
  ...packageJson.scripts,
  test: "jest",
};
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));

console.log(
  'Project setup complete. You can now run the tests with "npm test".',
);
