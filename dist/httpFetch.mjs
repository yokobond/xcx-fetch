var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAF0CAYAAAD/4EcMAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3Xd4lUXexvFvCIRQklCkCrIigYD0FkIwUhVQkCaGYkRkYRcVrIiFxRVxQUWFtaxYAEGaICVEBGkSQGoQQarCAiICUgMESHv/OO6+6y7nOSfJPKfen+viwsuZM/NblyQ388wzE0Jubi4iIiIiYkwhbxcgIiIiEmgUsEREREQMU8ASERERMUwBS0RERMQwBSwRERERwxSwRERERAxTwBIRERExTAFLRERExDAFLBERERHDFLBEREREDFPAEhERETFMAUtERETEMAUsEREREcMUsEREREQMU8ASERERMUwBS0RERMQwBSwRERERwxSwRERERAxTwBIRERExTAFLRERExDAFLBERERHDFLBEREREDFPAEhERETFMAUtERETEMAUsEREREcMUsEREREQMU8ASERERMUwBS0RERMQwBSwRERERwxSwRERERAxTwBIRERExTAFLRERExDAFLBERERHDFLBEREREDFPAEhERETFMAUtERETEMAUsEREREcMUsEREREQMU8ASERERMUwBS0RERMQwBSwRERERwxSwRERERAxTwBIRERExTAFLRERExDAFLBERERHDFLBEREREDFPAEhERETFMAUtERETEMAUsEREREcMUsEREREQMU8ASERERMUwBS0RERMQwBSwRERERwxSwRERERAxTwBIRERExTAFLRERExDAFLBERERHDFLBEREREDFPAEhERETFMAUtERETEMAUsEREREcMUsEREREQMU8ASERERMUwBS0RERMQwBSwRERERwxSwRERERAxTwBIRERExTAFLRERExDAFLBERERHDFLBEREREDFPAEhERETGssLcLEJHgVAK4BajxH79XAsoApX/7vSgQwe+/UV0BMoALwLXffs8AjgKH/+vXP4HLtv8vERH5XyHk5uZ6uwgRCVyFgQZAK6Ahvw9TnnAE2AJs/Y/fz3tobhEJXgpYImJUBNACiMcRqmKBkl6t6PdygQPAN8BSYDlw1qsViUggUsASkQKrBdwL3AM0AkK9W06eZAEbgC9++7XTu+WISIBQwBKRfKkN9MIRrOp5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ddpm5h1FEfsoYIlfygSuOGkrUqSIkQ3qubm5xu40lPz56quvGDBgANHR0RQvXpzixYsTHR3NgAED+Oqrr7xdnlzHjBkzjI3Vpk0bp207jc0iYo8QcnP1GFv80s9AJSdtderUYc+ePQWeY9asWSQmJhZ4HMmb/fv3M3DgQNavX2/ZLz4+no8//lhXGvmIa9euUblyZU6fPl3gsWJiYpx+DecA5YGCzyJiH61gid86YNFmtXcjL7799lsj44j7UlNnIHheAAAc1klEQVRTadq0qctwBbB+/XqaNm1KamqqByoTV1JSUoyEK7BevfoWhSvxfQpY4resNrmaClhr1qwxMo64Z//+/dx11115Oiw2PT2du+66S49zfcD7779vbKy2bds6bTPzjqKIvRSwxG9Z/Tg1FbC2bdumtwk9aODAgfk6iT89PZ2BAwfaUJG4a+vWrSxbtszIWKGhobRu3dppuwKW+AMFLPFbVm8RmQpYWVlZrFy50shYYu2rr75y67GgM+vXr9fGdy8aO3assbHatWvHDTfccN22LEAPhMUfKGCJ37J6RNioUSOKFi1qZJ5PP/3UyDhizcR/Z/1/5R07d+5k0aJFxsa7//77nbZtAbSmLP5AAUv81iGcn4dVrFgxWrRoYWSe5ORkYxt3xbkNGzb4xBiSd88884yxF9JLlChBt27dnLbPNTKLiP0UsMRvuXpUYLVJNi+uXbvG7NmzjYwlzh09etQnxpC8mTt3LkuXLjU2Xq9evShZsuR127KAWcZmErGXApb4NavNrlaveefVhAkTyMrKMjae/K8rV5wdHevZMcR96enpPPHEE0bHTEpKctq2DDhhdDYR+yhgiV9bZdEWGxtLiRIljMxz6NAhZs6caWQskUDx3HPPcezYMWPj1axZ0/LtwenGZhKxnwKW+LVvgTNO2sLCwiz3cuTVK6+8QmZmprHxRPzZggULeOedd4yOOXLkSAoVuv6PpfPAYqOzidhLAUv8Wg7wtUW71dtIebVv3z7efPNNY+OJ+KsjR44waNAgozet3XTTTfTr189p+2dAhrHZROyngCV+b75FW/v27alcubKxuV566SVtpJagduXKFXr16sWZM87WjvNn5MiRhIWFXbctF3jP6Gwi9lPAEr+3AOfHNYSGhtK3b19jc126dIkhQ4bojnQJStnZ2fTt25ctW7YYHbdy5co8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";

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='262' height='262' viewBox='0 0 69.320831 69.320835' version='1.1' id='svg8' sodipodi:docname='inset-icon.svg' inkscape:version='1.0 (4035a4f%2c 2020-05-01)'%3e %3cdefs id='defs2'%3e %3cfilter id='filter1782' inkscape:label='Drop Shadow' style='color-interpolation-filters:sRGB%3b'%3e %3cfeFlood id='feFlood1772' result='flood' flood-color='rgb(0%2c0%2c0)' flood-opacity='0.498039' /%3e %3cfeComposite id='feComposite1774' result='composite1' operator='in' in2='SourceGraphic' in='flood' /%3e %3cfeGaussianBlur id='feGaussianBlur1776' result='blur' stdDeviation='1.2' in='composite1' /%3e %3cfeOffset id='feOffset1778' result='offset' dy='0' dx='0' /%3e %3cfeComposite id='feComposite1780' result='composite2' operator='over' in2='offset' in='SourceGraphic' /%3e %3c/filter%3e %3cfilter id='filter1794' inkscape:label='Drop Shadow' style='color-interpolation-filters:sRGB%3b'%3e %3cfeFlood id='feFlood1784' result='flood' flood-color='rgb(0%2c0%2c0)' flood-opacity='0.498039' /%3e %3cfeComposite id='feComposite1786' result='composite1' operator='in' in2='SourceGraphic' in='flood' /%3e %3cfeGaussianBlur id='feGaussianBlur1788' result='blur' stdDeviation='1.2' in='composite1' /%3e %3cfeOffset id='feOffset1790' result='offset' dy='0' dx='0' /%3e %3cfeComposite id='feComposite1792' result='composite2' operator='over' in2='offset' in='SourceGraphic' /%3e %3c/filter%3e %3c/defs%3e %3csodipodi:namedview id='base' pagecolor='white' bordercolor='%23666666' borderopacity='1.0' inkscape:pageopacity='0.0' inkscape:pageshadow='2' inkscape:zoom='2.5512592' inkscape:cx='132.56041' inkscape:cy='133.8471' inkscape:document-units='mm' inkscape:current-layer='layer1' inkscape:document-rotation='0' showgrid='false' units='px' inkscape:snap-smooth-nodes='true' inkscape:snap-object-midpoints='true' inkscape:window-width='1367' inkscape:window-height='943' inkscape:window-x='0' inkscape:window-y='1105' inkscape:window-maximized='0' fit-margin-left='2' fit-margin-right='2' fit-margin-top='2' fit-margin-bottom='2' inkscape:pagecheckerboard='true' /%3e %3cmetadata id='metadata5'%3e %3crdf:RDF%3e %3ccc:Work rdf:about=''%3e %3cdc:format%3eimage/svg%2bxml%3c/dc:format%3e %3cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3e %3cdc:title%3e%3c/dc:title%3e %3c/cc:Work%3e %3c/rdf:RDF%3e %3c/metadata%3e %3cg inkscape:label='Layer 1' inkscape:groupmode='layer' id='layer1' transform='translate(-29.462165%2c-11.125649)'%3e %3cpath id='path1262' d='m 63.125%2c16.152344 c -9.826087%2c1e-6 -18.580412%2c6.931123 -19.761719%2c16.570312 -6.501288%2c1.042441 -11.519531%2c6.662901 -11.519531%2c13.447266 1e-6%2c7.518876 6.145187%2c13.664061 13.664062%2c13.664062 h 8.705079 a 2.3812499%2c2.3812499 0 0 0 2.380859%2c-2.380859 2.3812499%2c2.3812499 0 0 0 -2.380859%2c-2.380859 h -8.705079 c -4.94503%2c-10e-7 -8.902342%2c-3.957314 -8.902343%2c-8.902344 0%2c-4.945031 3.957312%2c-8.902343 8.902343%2c-8.902344 h 2.382813 v -2.382812 c -10e-7%2c-7.983344 7.037009%2c-13.96875 15.234375%2c-13.96875 6.503476%2c-10e-7 11.978674%2c4.229726 13.882812%2c10.066406 l 0.550782%2c1.689453 1.777344%2c-0.04883 c 7.479026%2c-0.201695 12.296874%2c5.028623 12.296874%2c11.246094 0%2c6.215396 -4.987727%2c11.203125 -11.203124%2c11.203125 -2.793251%2c2e-6 -5.585653%2c0 -8.378907%2c0 a 2.3812499%2c2.3812499 0 0 0 -2.380859%2c2.380859 2.3812499%2c2.3812499 0 0 0 2.380859%2c2.380859 c 2.793252%2c0 5.585651%2c2e-6 8.378907%2c0 8.789242%2c0 15.966796%2c-7.175601 15.966796%2c-15.964843 0%2c-8.311894 -6.586945%2c-15.374758 -15.644531%2c-15.898438 C 77.784402%2c21.070816 71.084345%2c16.152343 63.125%2c16.152344 Z' style='color:black%3bfont-style:normal%3bfont-variant:normal%3bfont-weight:normal%3bfont-stretch:normal%3bfont-size:medium%3bline-height:normal%3bfont-family:sans-serif%3bfont-variant-ligatures:normal%3bfont-variant-position:normal%3bfont-variant-caps:normal%3bfont-variant-numeric:normal%3bfont-variant-alternates:normal%3bfont-variant-east-asian:normal%3bfont-feature-settings:normal%3bfont-variation-settings:normal%3btext-indent:0%3btext-align:start%3btext-decoration:none%3btext-decoration-line:none%3btext-decoration-style:solid%3btext-decoration-color:black%3bletter-spacing:normal%3bword-spacing:normal%3btext-transform:none%3bwriting-mode:lr-tb%3bdirection:ltr%3btext-orientation:mixed%3bdominant-baseline:auto%3bbaseline-shift:baseline%3btext-anchor:start%3bwhite-space:normal%3bshape-padding:0%3bshape-margin:0%3binline-size:0%3bclip-rule:nonzero%3bdisplay:inline%3boverflow:visible%3bvisibility:visible%3bisolation:auto%3bmix-blend-mode:normal%3bcolor-interpolation:sRGB%3bcolor-interpolation-filters:linearRGB%3bsolid-color:black%3bsolid-opacity:1%3bvector-effect:none%3bfill:%23feffff%3bfill-opacity:1%3bfill-rule:nonzero%3bstroke:%23b2b2b2%3bstroke-width:0.529167%3bstroke-linecap:round%3bstroke-linejoin:miter%3bstroke-miterlimit:3%3bstroke-dasharray:none%3bstroke-dashoffset:0%3bstroke-opacity:1%3bcolor-rendering:auto%3bimage-rendering:auto%3bshape-rendering:auto%3btext-rendering:auto%3benable-background:accumulate%3bstop-color:black%3bfilter:url(%23filter1782)' /%3e %3cpath id='path1270' d='m 63.125%2c47.380859 a 2.3812499%2c2.3812499 0 0 0 -2.380859%2c2.38086 v 18.646484 l -6.789063%2c-5.675781 a 2.3812499%2c2.3812499 0 0 0 -3.353516%2c0.296875 2.3812499%2c2.3812499 0 0 0 0.298829%2c3.355469 l 10.675781%2c8.929687 a 2.3812499%2c2.3812499 0 0 0 0.01563%2c0.01367 l 0.0059%2c0.0039 a 2.3812499%2c2.3812499 0 0 0 0.0957%2c0.07617 2.381488%2c2.381488 0 0 0 0.0059%2c0.0039 2.3812499%2c2.3812499 0 0 0 0.101562%2c0.07227 2.381488%2c2.381488 0 0 0 0.0039%2c0.002 2.3812499%2c2.3812499 0 0 0 0.105468%2c0.06641 2.381488%2c2.381488 0 0 0 0.230469%2c0.121094 2.381488%2c2.381488 0 0 0 0.0039%2c0.002 2.3812499%2c2.3812499 0 0 0 0.115235%2c0.04687 2.381488%2c2.381488 0 0 0 0.08984%2c0.0332 2.3812499%2c2.3812499 0 0 0 0.03125%2c0.01172 2.381488%2c2.381488 0 0 0 0.0059%2c0.002 2.3812499%2c2.3812499 0 0 0 0.24414%2c0.06445 2.381488%2c2.381488 0 0 0 0.0059%2c0.002 2.3812499%2c2.3812499 0 0 0 0.123047%2c0.02148 2.381488%2c2.381488 0 0 0 0.08203%2c0.01172 2.3812499%2c2.3812499 0 0 0 0.04687%2c0.0059 2.381488%2c2.381488 0 0 0 0.0059%2c0 2.3812499%2c2.3812499 0 0 0 0.02344%2c0.002 2.381488%2c2.381488 0 0 0 0.1875%2c0.0098 2.381488%2c2.381488 0 0 0 0.04687%2c0 2.3812499%2c2.3812499 0 0 0 0.05664%2c-0.002 2.381488%2c2.381488 0 0 0 0.05859%2c-0.0039 2.3812499%2c2.3812499 0 0 0 0.01563%2c0 2.381488%2c2.381488 0 0 0 0.09961%2c-0.0098 2.381488%2c2.381488 0 0 0 0.128907%2c-0.01758 2.381488%2c2.381488 0 0 0 0.126953%2c-0.02344 2.381488%2c2.381488 0 0 0 0.09961%2c-0.02344 2.381488%2c2.381488 0 0 0 0.02734%2c-0.0078 2.3812499%2c2.3812499 0 0 0 0.02734%2c-0.0078 2.381488%2c2.381488 0 0 0 0.0957%2c-0.03125 2.3812499%2c2.3812499 0 0 0 0.02734%2c-0.0098 2.381488%2c2.381488 0 0 0 0.0957%2c-0.03516 2.3812499%2c2.3812499 0 0 0 0.02539%2c-0.0098 2.381488%2c2.381488 0 0 0 0.0332%2c-0.01563 2.3812499%2c2.3812499 0 0 0 0.08594%2c-0.03906 2.381488%2c2.381488 0 0 0 0.08984%2c-0.04492 2.3812499%2c2.3812499 0 0 0 0.02539%2c-0.01367 2.381488%2c2.381488 0 0 0 0.02734%2c-0.01758 2.3812499%2c2.3812499 0 0 0 0.08398%2c-0.04883 2.381488%2c2.381488 0 0 0 0.08594%2c-0.05469 2.3812499%2c2.3812499 0 0 0 0.02344%2c-0.01563 2.381488%2c2.381488 0 0 0 0.08008%2c-0.06055 2.3812499%2c2.3812499 0 0 0 0.02344%2c-0.01758 2.381488%2c2.381488 0 0 0 0.06445%2c-0.05078 l 10.611328%2c-8.947266 a 2.3812499%2c2.3812499 0 0 0 0.285157%2c-3.355468 2.3812499%2c2.3812499 0 0 0 -3.355469%2c-0.285157 l -6.695313%2c5.644531 V 49.761719 A 2.3812499%2c2.3812499 0 0 0 63.125%2c47.380859 Z' style='color:black%3bfont-style:normal%3bfont-variant:normal%3bfont-weight:normal%3bfont-stretch:normal%3bfont-size:medium%3bline-height:normal%3bfont-family:sans-serif%3bfont-variant-ligatures:normal%3bfont-variant-position:normal%3bfont-variant-caps:normal%3bfont-variant-numeric:normal%3bfont-variant-alternates:normal%3bfont-variant-east-asian:normal%3bfont-feature-settings:normal%3bfont-variation-settings:normal%3btext-indent:0%3btext-align:start%3btext-decoration:none%3btext-decoration-line:none%3btext-decoration-style:solid%3btext-decoration-color:black%3bletter-spacing:normal%3bword-spacing:normal%3btext-transform:none%3bwriting-mode:lr-tb%3bdirection:ltr%3btext-orientation:mixed%3bdominant-baseline:auto%3bbaseline-shift:baseline%3btext-anchor:start%3bwhite-space:normal%3bshape-padding:0%3bshape-margin:0%3binline-size:0%3bclip-rule:nonzero%3bdisplay:inline%3boverflow:visible%3bvisibility:visible%3bisolation:auto%3bmix-blend-mode:normal%3bcolor-interpolation:sRGB%3bcolor-interpolation-filters:linearRGB%3bsolid-color:black%3bsolid-opacity:1%3bvector-effect:none%3bfill:white%3bfill-opacity:1%3bfill-rule:nonzero%3bstroke:%23b2b2b2%3bstroke-width:0.529167%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-miterlimit:4%3bstroke-dasharray:none%3bstroke-dashoffset:0%3bstroke-opacity:1%3bcolor-rendering:auto%3bimage-rendering:auto%3bshape-rendering:auto%3btext-rendering:auto%3benable-background:accumulate%3bstop-color:black%3bfilter:url(%23filter1794)' /%3e %3c/g%3e%3c/svg%3e";

/**
 * This is an extension for Xcratch.
 */
/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */

var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};

var translationMap = {
  'ja': {
    'gui.extension.httpFetch.description': 'ウェブからリソースを得る'
  },
  'ja-Hira': {
    'gui.extension.httpFetch.description': 'ウェブからリソースをとる'
  }
};
var entry = {
  name: 'HTTP Fetch',
  extensionId: 'httpFetch',
  extensionURL: 'https://yokobond.github.io/xcx-http-fetch/dist/httpFetch.mjs',
  collaborator: 'yokobond',
  iconURL: img$1,
  insetIconURL: img,

  get description() {
    return formatMessage$1({
      defaultMessage: 'Get resources from the Web',
      description: 'Description for HTTP Fetch',
      id: 'gui.extension.httpFetch.description'
    });
  },

  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://yokobond.github.io/xcx-http-fetch/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translationMap
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var _httpFetch = {};

/**
 * Types of block
 * @enum {string}
 */
var BlockType$1 = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',

  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',

  /**
   * Command block
   */
  COMMAND: 'command',

  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',

  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',

  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',

  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',

  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter'
};
var blockType = BlockType$1;

/**
 * Block argument types
 * @enum {string}
 */
var ArgumentType$1 = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',

  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',

  /**
   * Numeric value with color picker
   */
  COLOR: 'color',

  /**
   * Numeric value with text field
   */
  NUMBER: 'number',

  /**
   * String value with text field
   */
  STRING: 'string',

  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',

  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note',

  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: 'image'
};
var argumentType = ArgumentType$1;

var Color$1 = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, null, [{
    key: "RGB_BLACK",
    get:
    /**
     * @typedef {object} RGBObject - An object representing a color in RGB format.
     * @property {number} r - the red component, in the range [0, 255].
     * @property {number} g - the green component, in the range [0, 255].
     * @property {number} b - the blue component, in the range [0, 255].
     */

    /**
     * @typedef {object} HSVObject - An object representing a color in HSV format.
     * @property {number} h - hue, in the range [0-359).
     * @property {number} s - saturation, in the range [0,1].
     * @property {number} v - value, in the range [0,1].
     */

    /** @type {RGBObject} */
    function get() {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
    /** @type {RGBObject} */

  }, {
    key: "RGB_WHITE",
    get: function get() {
      return {
        r: 255,
        g: 255,
        b: 255
      };
    }
    /**
     * Convert a Scratch decimal color to a hex string, #RRGGBB.
     * @param {number} decimal RGB color as a decimal.
     * @return {string} RGB color as #RRGGBB hex string.
     */

  }, {
    key: "decimalToHex",
    value: function decimalToHex(decimal) {
      if (decimal < 0) {
        decimal += 0xFFFFFF + 1;
      }

      var hex = Number(decimal).toString(16);
      hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
      return hex;
    }
    /**
     * Convert a Scratch decimal color to an RGB color object.
     * @param {number} decimal RGB color as decimal.
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "decimalToRgb",
    value: function decimalToRgb(decimal) {
      var a = decimal >> 24 & 0xFF;
      var r = decimal >> 16 & 0xFF;
      var g = decimal >> 8 & 0xFF;
      var b = decimal & 0xFF;
      return {
        r: r,
        g: g,
        b: b,
        a: a > 0 ? a : 255
      };
    }
    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
     * CC-BY-SA Tim Down:
     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {!string} hex Hex representation of the color.
     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    /**
     * Convert an RGB color object to a hex color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */

  }, {
    key: "rgbToHex",
    value: function rgbToHex(rgb) {
      return Color.decimalToHex(Color.rgbToDecimal(rgb));
    }
    /**
     * Convert an RGB color object to a Scratch decimal color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!number} Number representing the color.
     */

  }, {
    key: "rgbToDecimal",
    value: function rgbToDecimal(rgb) {
      return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
    }
    /**
    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
    * @param {!string} hex Hex representation of the color.
    * @return {!number} Number representing the color.
    */

  }, {
    key: "hexToDecimal",
    value: function hexToDecimal(hex) {
      return Color.rgbToDecimal(Color.hexToRgb(hex));
    }
    /**
     * Convert an HSV color to RGB format.
     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */

  }, {
    key: "hsvToRgb",
    value: function hsvToRgb(hsv) {
      var h = hsv.h % 360;
      if (h < 0) h += 360;
      var s = Math.max(0, Math.min(hsv.s, 1));
      var v = Math.max(0, Math.min(hsv.v, 1));
      var i = Math.floor(h / 60);
      var f = h / 60 - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));
      var r;
      var g;
      var b;

      switch (i) {
        default:
        case 0:
          r = v;
          g = t;
          b = p;
          break;

        case 1:
          r = q;
          g = v;
          b = p;
          break;

        case 2:
          r = p;
          g = v;
          b = t;
          break;

        case 3:
          r = p;
          g = q;
          b = v;
          break;

        case 4:
          r = t;
          g = p;
          b = v;
          break;

        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }

      return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
      };
    }
    /**
     * Convert an RGB color to HSV format.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */

  }, {
    key: "rgbToHsv",
    value: function rgbToHsv(rgb) {
      var r = rgb.r / 255;
      var g = rgb.g / 255;
      var b = rgb.b / 255;
      var x = Math.min(Math.min(r, g), b);
      var v = Math.max(Math.max(r, g), b); // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate

      var h = 0;
      var s = 0;

      if (x !== v) {
        var f = r === x ? g - b : g === x ? b - r : r - g;
        var i = r === x ? 3 : g === x ? 5 : 1;
        h = (i - f / (v - x)) * 60 % 360;
        s = (v - x) / v;
      }

      return {
        h: h,
        s: s,
        v: v
      };
    }
    /**
     * Linear interpolation between rgb0 and rgb1.
     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
     * @return {RGBObject} the interpolated color.
     */

  }, {
    key: "mixRgb",
    value: function mixRgb(rgb0, rgb1, fraction1) {
      if (fraction1 <= 0) return rgb0;
      if (fraction1 >= 1) return rgb1;
      var fraction0 = 1 - fraction1;
      return {
        r: fraction0 * rgb0.r + fraction1 * rgb1.r,
        g: fraction0 * rgb0.g + fraction1 * rgb1.g,
        b: fraction0 * rgb0.b + fraction1 * rgb1.b
      };
    }
  }]);

  return Color;
}();

var color = Color$1;

var Color = color;
/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */

var Cast = /*#__PURE__*/function () {
  function Cast() {
    _classCallCheck(this, Cast);
  }

  _createClass(Cast, null, [{
    key: "toNumber",
    value:
    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * @param {*} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */
    function toNumber(value) {
      // If value is already a number we don't need to coerce it with
      // Number().
      if (typeof value === 'number') {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        if (Number.isNaN(value)) {
          return 0;
        }

        return value;
      }

      var n = Number(value);

      if (Number.isNaN(n)) {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        return 0;
      }

      return n;
    }
    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {*} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */

  }, {
    key: "toBoolean",
    value: function toBoolean(value) {
      // Already a boolean?
      if (typeof value === 'boolean') {
        return value;
      }

      if (typeof value === 'string') {
        // These specific strings are treated as false in Scratch.
        if (value === '' || value === '0' || value.toLowerCase() === 'false') {
          return false;
        } // All other strings treated as true.


        return true;
      } // Coerce other values and numbers.


      return Boolean(value);
    }
    /**
     * Scratch cast to string.
     * @param {*} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */

  }, {
    key: "toString",
    value: function toString(value) {
      return String(value);
    }
    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {*} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */

  }, {
    key: "toRgbColorList",
    value: function toRgbColorList(value) {
      var color = Cast.toRgbColorObject(value);
      return [color.r, color.g, color.b];
    }
    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */

  }, {
    key: "toRgbColorObject",
    value: function toRgbColorObject(value) {
      var color;

      if (typeof value === 'string' && value.substring(0, 1) === '#') {
        color = Color.hexToRgb(value); // If the color wasn't *actually* a hex color, cast to black

        if (!color) color = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
      } else {
        color = Color.decimalToRgb(Cast.toNumber(value));
      }

      return color;
    }
    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */

  }, {
    key: "isWhiteSpace",
    value: function isWhiteSpace(val) {
      return val === null || typeof val === 'string' && val.trim().length === 0;
    }
    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */

  }, {
    key: "compare",
    value: function compare(v1, v2) {
      var n1 = Number(v1);
      var n2 = Number(v2);

      if (n1 === 0 && Cast.isWhiteSpace(v1)) {
        n1 = NaN;
      } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
        n2 = NaN;
      }

      if (isNaN(n1) || isNaN(n2)) {
        // At least one argument can't be converted to a number.
        // Scratch compares strings as case insensitive.
        var s1 = String(v1).toLowerCase();
        var s2 = String(v2).toLowerCase();

        if (s1 < s2) {
          return -1;
        } else if (s1 > s2) {
          return 1;
        }

        return 0;
      } // Handle the special case of Infinity


      if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
        return 0;
      } // Compare as numbers.


      return n1 - n2;
    }
    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */

  }, {
    key: "isInt",
    value: function isInt(val) {
      // Values that are already numbers.
      if (typeof val === 'number') {
        if (isNaN(val)) {
          // NaN is considered an integer.
          return true;
        } // True if it's "round" (e.g., 2.0 and 2).


        return val === parseInt(val, 10);
      } else if (typeof val === 'boolean') {
        // `True` and `false` always represent integer after Scratch cast.
        return true;
      } else if (typeof val === 'string') {
        // If it contains a decimal point, don't consider it an int.
        return val.indexOf('.') < 0;
      }

      return false;
    }
  }, {
    key: "LIST_INVALID",
    get: function get() {
      return 'INVALID';
    }
  }, {
    key: "LIST_ALL",
    get: function get() {
      return 'ALL';
    }
    /**
     * Compute a 1-based index into a list, based on a Scratch argument.
     * Two special cases may be returned:
     * LIST_ALL: if the block is referring to all of the items in the list.
     * LIST_INVALID: if the index was invalid in any way.
     * @param {*} index Scratch arg, including 1-based numbers or special cases.
     * @param {number} length Length of the list.
     * @param {boolean} acceptAll Whether it should accept "all" or not.
     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
     */

  }, {
    key: "toListIndex",
    value: function toListIndex(index, length, acceptAll) {
      if (typeof index !== 'number') {
        if (index === 'all') {
          return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
        }

        if (index === 'last') {
          if (length > 0) {
            return length;
          }

          return Cast.LIST_INVALID;
        } else if (index === 'random' || index === 'any') {
          if (length > 0) {
            return 1 + Math.floor(Math.random() * length);
          }

          return Cast.LIST_INVALID;
        }
      }

      index = Math.floor(Cast.toNumber(index));

      if (index < 1 || index > length) {
        return Cast.LIST_INVALID;
      }

      return index;
    }
  }]);

  return Cast;
}();

var cast$1 = Cast;

var BlockType = blockType;
var ArgumentType = argumentType;
var cast = cast$1; // const log = require('../../util/log');

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {*} messageData - format-message object
 * @returns {string} - message for the locale
 */

var formatMessage = function formatMessage(messageData) {
  return messageData.defaultMessage;
};

var EXTENSION_ID = 'httpFetch';
/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */

var extensionURL = 'https://yokobond.github.io/xcx-http-fetch/dist/httpFetch.mjs';
/**
 * Icon png to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len

var blockIconURI = 'data:image/png;base64,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';
/**
 * Scratch 3.0 blocks for example of Xcratch.
 */

var ExtensionBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for HTTP Fetch.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function ExtensionBlocks(runtime) {
    _classCallCheck(this, ExtensionBlocks);

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


  _createClass(ExtensionBlocks, [{
    key: "getInfo",
    value: function getInfo() {
      this.setupTranslations();
      return {
        id: ExtensionBlocks.EXTENSION_ID,
        name: ExtensionBlocks.EXTENSION_NAME,
        extensionURL: ExtensionBlocks.extensionURL,
        blockIconURI: blockIconURI,
        showStatusButton: false,
        blocks: [{
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
        }, {
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
        }],
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
  }, {
    key: "getBody",
    value: function getBody(args) {
      var url = cast.toString(args.URL);
      var req = new Request(url, {
        method: 'GET'
      });
      return new Promise(function (resolve) {
        fetch(req).then(function (res) {
          if (res.ok) {
            res.text().then(function (text) {
              return resolve(text);
            });
          } else {
            resolve("".concat(res.status, ": ").concat(res.statusText, ", URL: ").concat(res.url));
          }
        }).catch(function (error) {
          return resolve("".concat(error, ", URL: ").concat(req.url));
        });
      });
    }
  }, {
    key: "postText",
    value: function postText(args) {
      var url = cast.toString(args.URL);
      var bodyText = cast.toString(args.TEXT);
      var req = new Request(url, {
        method: 'POST',
        headers: {
          'Content-Type': args.TYPE
        },
        body: bodyText,
        mode: 'cors'
      });
      return new Promise(function (resolve) {
        fetch(req).then(function (res) {
          if (res.ok) {
            res.text().then(function (text) {
              if (text) {
                resolve(text);
              } else {
                resolve("POST '".concat(bodyText, "' to ").concat(res.url));
              }
            });
          } else {
            resolve("".concat(res.status, ": ").concat(res.statusText, ", URL: ").concat(res.url));
          }
        }).catch(function (error) {
          resolve("".concat(error, ", URL: ").concat(req.url));
        });
      });
    }
    /**
     * Setup format-message for this extension.
     */

  }, {
    key: "setupTranslations",
    value: function setupTranslations() {
      var localeSetup = formatMessage.setup();

      if (localeSetup && localeSetup.translations[localeSetup.locale]) {
        Object.assign(localeSetup.translations[localeSetup.locale], // eslint-disable-next-line no-use-before-define
        extensionTranslations[localeSetup.locale]);
      }
    }
  }], [{
    key: "EXTENSION_NAME",
    get:
    /**
     * @return {string} - the name of this extension.
     */
    function get() {
      return 'HTTP Fetch';
    }
    /**
     * @return {string} - the ID of this extension.
     */

  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return EXTENSION_ID;
    }
    /**
     * URL to get this extension.
     * @type {string}
     */

  }, {
    key: "extensionURL",
    get: function get() {
      return extensionURL;
    }
    /**
     * Set URL to get this extension.
     * extensionURL will be reset when the module is loaded from the web.
     * @param {string} url - URL
     */
    ,
    set: function set(url) {
      extensionURL = url;
    }
  }]);

  return ExtensionBlocks;
}();

var extensionTranslations = {
  'ja': {
    'httpFetch.getBody': 'URL [URL] のボディー',
    'httpFetch.postText': '[TEXT] を [TYPE] として URL [URL] へポストする'
  },
  'ja-Hira': {
    'httpFetch.getBody': 'URL [URL] のボディー',
    'httpFetch.postText': '[TEXT] を [TYPE] として URL [URL] へポストする'
  }
};
var blockClass = _httpFetch.blockClass = ExtensionBlocks;

export { _httpFetch as __moduleExports, blockClass, entry };
