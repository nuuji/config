const DEFAULT_SETUP_FILE = '<rootDir>/jest.setup.js';

module.exports = ({ setupFilesAfterEnv = [DEFAULT_SETUP_FILE] } = {}) => ({
    clearMocks: true,
    setupFilesAfterEnv,
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
});
