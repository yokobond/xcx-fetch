const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const cast = require('../../util/cast');
// const log = require('../../util/log');

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {*} messageData - format-message object
 * @returns {string} - message for the locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const EXTENSION_ID = 'httpRequest';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
let extensionURL = 'https://yokobond.github.io/xcx-http-request/dist/httpRequest.mjs';

/**
 * Icon png to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = 'data:image/png;base64,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';

/**
 * Scratch 3.0 blocks for example of Xcratch.
 */
class ExtensionBlocks {

    /**
     * @return {string} - the name of this extension.
     */
    static get EXTENSION_NAME () {
        return 'HTTP Request';
    }

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID () {
        return EXTENSION_ID;
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
    static get extensionURL () {
        return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * extensionURL will be reset when the module is loaded from the web.
     * @param {string} url - URL
     */
    static set extensionURL (url) {
        extensionURL = url;
    }

    /**
     * Construct a set of blocks for HTTP Request.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;

        if (runtime.formatMessage) {
            // Replace 'formatMessage' to a formatter which is used in the runtime.
            formatMessage = runtime.formatMessage;
        }
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        this.setupTranslations();
        return {
            id: ExtensionBlocks.EXTENSION_ID,
            name: ExtensionBlocks.EXTENSION_NAME,
            extensionURL: ExtensionBlocks.extensionURL,
            blockIconURI: blockIconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: 'getBody',
                    blockType: BlockType.REPORTER,
                    blockAllThreads: false,
                    text: formatMessage({
                        id: 'httpRequest.getBody',
                        default: 'body of URL [URL]',
                        description: 'get body from URL then return it'
                    }),
                    func: 'getBody',
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://httpbin.org/get'
                        }
                    }
                },
                {
                    opcode: 'postText',
                    blockType: BlockType.COMMAND,
                    blockAllThreads: false,
                    text: formatMessage({
                        id: 'httpRequest.postText',
                        default: 'post [TEXT] as [TYPE] to URL [URL]',
                        description: 'post text to URL'
                    }),
                    func: 'postText',
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://httpbin.org/post'
                        },
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'text'
                        },
                        TYPE: {
                            type: ArgumentType.STRING,
                            menu: 'contentTypeMenu',
                            defaultValue: 'text/plain'
                        }
                    }
                }
            ],
            menus: {
                contentTypeMenu: {
                    acceptReporters: false,
                    items: ['text/plain', 'application/json']
                }
                    
            },
            // eslint-disable-next-line no-use-before-define
            translationMap: extensionTranslations
        };
    }

    getBody (args) {
        const url = cast.toString(args.URL);
        const req = new Request(url, {method: 'GET'});
        return new Promise(
            resolve => {
                fetch(req)
                    .then(res => {
                        if (res.ok){
                            res.text().then(text => resolve(text));
                        } else {
                            resolve(`${res.status}: ${res.statusText}, URL: ${res.url}`);
                        }
                    })
                    .catch(error => resolve(`${error}, URL: ${req.url}`));
            }
        );
    }

    postText (args) {
        const url = cast.toString(args.URL);
        const bodyText = cast.toString(args.TEXT);
        const req = new Request(
            url,
            {method: 'POST',
                headers: {
                    'Content-Type': args.TYPE
                },
                body: bodyText,
                mode: 'cors'
            }
        );
        return new Promise(
            resolve => {
                fetch(req)
                    .then(res => {
                        if (res.ok){
                            res.text().then(text => {
                                if (text) {
                                    resolve(text);
                                } else {
                                    resolve(`POST '${bodyText}' to ${res.url}`);
                                }
                            });
                        } else {
                            resolve(`${res.status}: ${res.statusText}, URL: ${res.url}`);
                        }
                    })
                    .catch(error => {
                        resolve(`${error}, URL: ${req.url}`);
                    });
            }
        );
    }

    /**
     * Setup format-message for this extension.
     */
    setupTranslations () {
        const localeSetup = formatMessage.setup();
        if (localeSetup && localeSetup.translations[localeSetup.locale]) {
            Object.assign(
                localeSetup.translations[localeSetup.locale],
                // eslint-disable-next-line no-use-before-define
                extensionTranslations[localeSetup.locale]
            );
        }
    }
}

const extensionTranslations = {
    'ja': {
        'httpRequest.getBody': 'URL [URL] のボディー',
        'httpRequest.postText': '[TEXT] を [TYPE] として URL [URL] へポストする'
    },
    'ja-Hira': {
        'httpRequest.getBody': 'URL [URL] のボディー',
        'httpRequest.postText': '[TEXT] を [TYPE] として URL [URL] へポストする'
    }
};

module.exports = ExtensionBlocks;
