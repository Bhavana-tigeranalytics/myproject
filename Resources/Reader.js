// readLocators.js

const fs = require('fs');

function readLocatorsFromJSON() {
    try {
        const locatorsJson = fs.readFileSync('locators.json', 'utf8');
        return JSON.parse(locatorsJson);
    } catch (error) {
        console.error('Error reading locators from JSON file:', error);
        return {};
    }
}

function readLocatorsFromProperties() {
    try {
        const locatorsProperties = fs.readFileSync('locators.properties', 'utf8');
        const lines = locatorsProperties.split('\n');
        const locators = {};
        lines.forEach(line => {
            const [key, value] = line.split('=');
            locators[key.trim()] = value.trim();
        });
        return locators;
    } catch (error) {
        console.error('Error reading locators from properties file:', error);
        return {};
    }
}

module.exports = {
    readLocatorsFromJSON,
    readLocatorsFromProperties
};
