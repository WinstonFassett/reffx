const path = require("path");
module.exports = {
  rootDir: __dirname,
  globals: {
    "ts-jest": {      
      tsconfig: path.resolve(__dirname, "test", "tsconfig.json"),
    },
  },
  preset: "ts-jest",
  testMatch: ["<rootDir>/src/test/**/*.test.ts"],
  moduleNameMapper: {
    "^@lib": "<rootDir>/src/lib",
  },
};
