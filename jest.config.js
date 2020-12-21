module.exports = {
  "testRegex": "((\\.|/*.)(test))\\.[ts|js]*?$",
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "roots": [
    "<rootDir>/src"
  ],
}