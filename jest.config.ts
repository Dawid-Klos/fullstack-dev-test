import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "^app/(.*)$": "<rootDir>/src/app/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(config);
