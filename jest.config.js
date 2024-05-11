module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: ["**/*.spec.ts", "**/*.test.ts"],
  modulePathIgnorePatterns: ["e2e-tests", "tests-examples"],
};
