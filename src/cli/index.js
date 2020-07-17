#!/usr/bin/env node
const { promisify } = require('util');
const { join } = require('path');
const { writeFile, readFile } = require('fs');

const writeFilePromise = promisify(writeFile);
const readFilePromise = promisify(readFile);

const FILE_MAP = {
    webpack: 'webpack.config.js',
    babel: 'babel.config.js',
    eslint: '.eslintrc.js',
    jest: 'jest.config.js',
    rollup: 'rollup.config.js',
    typescript: 'tsconfig.json'
}

const TYPES = ['node', 'react', 'typescript'];

const selectedType = process.argv.find(arg => TYPES.includes(arg));

if (!selectedType) {
    const typeStr = TYPES.join('|');
    const flagStr = Object.keys(FILE_MAP).map(config => `[--${config}]`).join(' ')
    console.error(`\nusage: nji-config <${typeStr}> ${flagStr}\n`);
    process.exit(1);
}

const LEADING_DASHES = /^(-{2})/i

const passedFlags = process.argv.flatMap(arg => {
    const cleanedArg = arg.replace(LEADING_DASHES, '');

    if (FILE_MAP[cleanedArg]) {
        return cleanedArg;
    }

    return [];
});

const jsConfigFile = (flag) => {
    let fileContents = `const { ${selectedType} } = require('@nuuji/config');\n\n`;
        fileContents += `module.exports = ${selectedType}.${flag}();\n`;

    return fileContents;
};

const jsonConfigFile = async (flag) => {
    const path = join(__dirname, '..', selectedType, `${flag}.json`);

    return readFilePromise(path).then(file => file.toString());
};

Promise.all(passedFlags.map(async (flag) => {
    const configFile = FILE_MAP[flag];
    const isJsonConfig = configFile.includes('.json');

    const fileContents = isJsonConfig ? await jsonConfigFile(flag) : jsConfigFile(flag);

    const filePath = join(process.cwd(), configFile);

    return writeFilePromise(filePath, fileContents).then(() => console.log(`Created ${configFile}`));
    
})).then(() => process.exit());
