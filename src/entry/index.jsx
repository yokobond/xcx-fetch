/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const translationMap = {
    'ja': {
        'gui.extension.httpRequest.description': 'HTTPリクエストを送る'
    },
    'ja-Hira': {
        'gui.extension.httpRequest.description': 'HTTPリクエストをおくる'
    }
};

const entry = {
    name: 'HTTP Request',
    extensionId: 'httpRequest',
    extensionURL: 'https://yokobond.github.io/xcx-http-request/dist/httpRequest.mjs',
    collaborator: 'yokobond',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    get description () {
        return formatMessage({
            defaultMessage: 'Make HTTP requests',
            description: 'Description for HTTP Request',
            id: 'gui.extension.httpRequest.description'
        });
    },
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://yokobond.github.io/xcx-http-request/',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
