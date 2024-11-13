import { execSync } from "child_process";

try {
  console.log("Running ESLint plugin tests...");
  const output = execSync("npm test", { encoding: "utf8" });
  console.log(output);
} catch (error) {
  console.error("Error running tests:", error.stdout);
}
