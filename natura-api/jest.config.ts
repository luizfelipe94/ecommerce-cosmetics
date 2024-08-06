export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  moduleFileExtensions: ["js", "ts"],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  coverageDirectory: "../coverage",
  collectCoverageFrom: ["**/*.ts"],
};