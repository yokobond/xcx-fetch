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

const EXTENSION_ID = 'httpFetch';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
let extensionURL = 'https://yokobond.github.io/xcx-http-fetch/dist/httpFetch.mjs';

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
        return 'HTTP Fetch';
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
     * Construct a set of blocks for HTTP Fetch.
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
                        id: 'httpFetch.getBody',
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
                        id: 'httpFetch.postText',
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
        'httpFetch.getBody': 'URL [URL] のボディー',
        'httpFetch.postText': '[TEXT] を [TYPE] として URL [URL] へポストする'
    },
    'ja-Hira': {
        'httpFetch.getBody': 'URL [URL] のボディー',
        'httpFetch.postText': '[TEXT] を [TYPE] として URL [URL] へポストする'
    }
};

module.exports = ExtensionBlocks;
