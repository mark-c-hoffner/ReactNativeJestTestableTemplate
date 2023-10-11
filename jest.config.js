export default {
    preset: "jest-expo",
    transform: {
        "\\.js$": "babel-jest",
        "\\.mjs$": "babel-jest",
        "\\.jsx$": "babel-jest"
    },
    extensionsToTreatAsEsm: [
        ".jsx"
    ],
    globalSetup: '<rootDir>/jest/jest.global.js'
}