module.exports = {
  "rootDir": "../../",
  "collectCoverage": true,
  "coverageDirectory": "<rootDir>/coverage",
  "coverageReporters": ["lcov"],
  "mapCoverage": true,
  "transform": { "^.+\\.tsx?$": "ts-jest" },
  "testRegex": "/__tests__/.*|(\\.|/)spec\\.(jsx?|tsx?)$",
  "coveragePathIgnorePatterns": ["/node_modules/", "/config/"],
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx"],
  "setupFiles": ["./config/jest/raf-shim.js", "./config/jest/setup-enzyme.js"]
}
