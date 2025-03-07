var Hangmanizr = React.createClass({
  getInitialState: function () {
    return {
      alphabet: [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "@", "-"
      ],
      words: [],
      randomWord: "",
      letters: [],
      clickedLetters: [],
      matchedLetters: [],
      lives: 6,
      initialLives: 6,
      clickedButton: null,
      gameStarted: false,
      nextWord: false,
      chosenLevel: "medium",
      score: 0,
      gameOver: false,
      currentHint: "" // New state for the hint
    };
  },

  htmlElementsGame: function (e) {
    var htmlElements = [
      { word: "base", hint: "Specifies the base URL/target for all relative URLs in a document" },
      { word: "head", hint: "Container for metadata (data about data)" },
      { word: "link", hint: "Defines the relationship between a document and an external resource" },
      { word: "meta", hint: "Provides metadata about the HTML document" },
      { word: "style", hint: "Defines style information for a document" },
      { word: "title", hint: "Defines the title of the document" },
      { word: "address", hint: "Defines contact information for the author/owner of a document" },
      { word: "article", hint: "Defines independent, self-contained content" },
      { word: "aside", hint: "Defines content aside from the page content" },
      { word: "footer", hint: "Defines a footer for a document or section" },
      { word: "header", hint: "Defines a header for a document or section" },
      { word: "hgroup", hint: "Groups heading elements (h1 to h6)" },
      { word: "nav", hint: "Defines navigation links" },
      { word: "section", hint: "Defines a section in a document" },
      { word: "dd", hint: "Defines a description/value of a term in a description list" },
      { word: "div", hint: "Defines a section in a document" },
      { word: "dl", hint: "Defines a description list" },
      { word: "dt", hint: "Defines a term/name in a description list" },
      { word: "figcaption", hint: "Defines a caption for a <figure> element" },
      { word: "figure", hint: "Specifies self-contained content, like illustrations" },
      { word: "hr", hint: "Defines a thematic change in the content" },
      { word: "li", hint: "Defines a list item" },
      { word: "main", hint: "Specifies the main content of a document" },
      { word: "ol", hint: "Defines an ordered list" },
      { word: "p", hint: "Defines a paragraph" },
      { word: "pre", hint: "Defines preformatted text" },
      { word: "ul", hint: "Defines an unordered list" },
      { word: "a", hint: "Defines a hyperlink" },
      { word: "abbr", hint: "Defines an abbreviation or acronym" },
      { word: "b", hint: "Defines bold text" },
      { word: "bdi", hint: "Isolates a part of text that might be formatted in a different direction" },
      { word: "bdo", hint: "Overrides the current text direction" },
      { word: "br", hint: "Defines a single line break" },
      { word: "cite", hint: "Defines the title of a work" },
      { word: "code", hint: "Defines a piece of computer code" },
      { word: "data", hint: "Links the given content with a machine-readable translation" },
      { word: "dfn", hint: "Represents the defining instance of a term" },
      { word: "em", hint: "Defines emphasized text" },
      { word: "i", hint: "Defines a part of text in an alternate voice or mood" },
      { word: "kbd", hint: "Defines keyboard input" },
      { word: "mark", hint: "Defines marked/highlighted text" },
      { word: "q", hint: "Defines a short quotation" },
      { word: "rp", hint: "Defines what to show in browsers that do not support ruby annotations" },
      { word: "rt", hint: "Defines an explanation/pronunciation of characters (for East Asian typography)" },
      { word: "rtc", hint: "Defines a container for Ruby text components" },
      { word: "ruby", hint: "Defines a ruby annotation (for East Asian typography)" },
      { word: "s", hint: "Defines text that is no longer correct" },
      { word: "samp", hint: "Defines sample output from a computer program" },
      { word: "small", hint: "Defines smaller text" },
      { word: "span", hint: "Defines a section in a document" },
      { word: "strong", hint: "Defines important text" },
      { word: "sub", hint: "Defines subscripted text" },
      { word: "sup", hint: "Defines superscripted text" },
      { word: "time", hint: "Defines a date/time" },
      { word: "u", hint: "Defines text that should be stylistically different from normal text" },
      { word: "var", hint: "Defines a variable" },
      { word: "wbr", hint: "Defines a possible line-break" },
      { word: "area", hint: "Defines an area inside an image map" },
      { word: "audio", hint: "Defines sound content" },
      { word: "img", hint: "Defines an image" },
      { word: "map", hint: "Defines a client-side image map" },
      { word: "track", hint: "Defines text tracks for media elements (<audio> and <video>)" },
      { word: "video", hint: "Defines embedded video content" },
      { word: "embed", hint: "Defines a container for an external application" },
      { word: "object", hint: "Defines an embedded object" },
      { word: "param", hint: "Defines a parameter for an object" },
      { word: "source", hint: "Defines multiple media resources for media elements (<video> and <audio>)" },
      { word: "canvas", hint: "Used to draw graphics, on the fly, via scripting" },
      { word: "noscript", hint: "Defines an alternate content for users that do not support client-side scripts" },
      { word: "script", hint: "Defines a client-side script" },
      { word: "del", hint: "Defines text that has been deleted from a document" },
      { word: "ins", hint: "Defines a text that has been inserted into a document" },
      { word: "caption", hint: "Defines a table caption" },
      { word: "col", hint: "Specifies column properties for each column within a <colgroup> element" },
      { word: "colgroup", hint: "Specifies a group of one or more columns in a table for formatting" },
      { word: "table", hint: "Defines a table" },
      { word: "tbody", hint: "Groups the body content in a table" },
      { word: "td", hint: "Defines a cell in a table" },
      { word: "tfoot", hint: "Groups the footer content in a table" },
      { word: "th", hint: "Defines a header cell in a table" },
      { word: "thead", hint: "Groups the header content in a table" },
      { word: "tr", hint: "Defines a row in a table" },
      { word: "button", hint: "Defines a clickable button" },
      { word: "datalist", hint: "Specifies a list of pre-defined options for input controls" },
      { word: "fieldset", hint: "Groups related elements in a form" },
      { word: "form", hint: "Defines an HTML form for user input" },
      { word: "input", hint: "Defines an input control" },
      { word: "label", hint: "Defines a label for an <input> element" },
      { word: "legend", hint: "Defines a caption for a <fieldset> element" },
      { word: "meter", hint: "Defines a scalar measurement within a known range" },
      { word: "optgroup", hint: "Defines a group of related options in a drop-down list" },
      { word: "option", hint: "Defines an option in a drop-down list" },
      { word: "output", hint: "Defines the result of a calculation" },
      { word: "progress", hint: "Represents the progress of a task" },
      { word: "select", hint: "Defines a drop-down list" },
      { word: "textarea", hint: "Defines a multi-line text input control" },
      { word: "details", hint: "Defines additional details that the user can view or hide" },
      { word: "dialog", hint: "Defines a dialog box or window" },
      { word: "menu", hint: "Defines a list/menu of commands" },
      { word: "menuitem", hint: "Defines a command/menu item that the user can invoke" },
      { word: "summary", hint: "Defines a visible heading for a <details> element" },
      { word: "content", hint: "Used with Shadow DOM to define insertion points" },
      { word: "element", hint: "Defines a custom element" },
      { word: "shadow", hint: "Defines a shadow DOM tree" },
      { word: "template", hint: "Defines a template for reusable content" },
      { word: "acronym", hint: "Defines an acronym (not supported in HTML5)" },
      { word: "applet", hint: "Defines an embedded applet (not supported in HTML5)" },
      { word: "basefont", hint: "Specifies a default color, size, and font for all text in a document (not supported in HTML5)" },
      { word: "big", hint: "Defines big text (not supported in HTML5)" },
      { word: "blink", hint: "Defines blinking text (not supported in HTML5)" },
      { word: "center", hint: "Defines centered text (not supported in HTML5)" },
      { word: "command", hint: "Defines a command button (not supported in HTML5)" },
      { word: "dir", hint: "Defines a directory list (not supported in HTML5)" },
      { word: "font", hint: "Defines font, color, and size for text (not supported in HTML5)" },
      { word: "frame", hint: "Defines a window (a frame) in a frameset (not supported in HTML5)" },
      { word: "frameset", hint: "Defines a set of frames (not supported in HTML5)" },
      { word: "isindex", hint: "Defines a single-line input field (not supported in HTML5)" },
      { word: "keygen", hint: "Defines a key-pair generator field (not supported in HTML5)" },
      { word: "listing", hint: "Defines a listing of preformatted text (not supported in HTML5)" },
      { word: "marquee", hint: "Defines scrolling text (not supported in HTML5)" },
      { word: "multicol", hint: "Defines multiple columns (not supported in HTML5)" },
      { word: "nextid", hint: "Defines a unique identifier for the current document (not supported in HTML5)" },
      { word: "noembed", hint: "Defines alternative content for browsers that do not support the <embed> tag (not supported in HTML5)" },
      { word: "plaintext", hint: "Defines plain text (not supported in HTML5)" },
      { word: "spacer", hint: "Defines white space (not supported in HTML5)" },
      { word: "strike", hint: "Defines strikethrough text (not supported in HTML5)" },
      { word: "tt", hint: "Defines teletype text (not supported in HTML5)" },
      { word: "xmp", hint: "Defines preformatted text (not supported in HTML5)" }
    ];

    this.setState({
      words: htmlElements,
      letters: [],
      clickedLetters: [],
      matchedLetters: [],
      lives: this.state.initialLives,
      clickedButton: e.target.value,
      gameStarted: true,
      score: 0,
      currentHint: "" // Reset hint
    });

    setTimeout(
      function () {
        this.getRandom();
      }.bind(this),
      100
    );
  },

  cssPropertiesGame: function (e) {
    var cssProperties = [
      { word: "align-content", hint: "Aligns content within a flex container along the cross axis" },
      { word: "align-items", hint: "Aligns items within a flex container along the cross axis" },
      { word: "align-self", hint: "Aligns an individual flex item along the cross axis" },
      { word: "all", hint: "Resets all properties (except unicode-bidi and direction)" },
      { word: "animation", hint: "Shorthand for animation properties" },
      { word: "animation-delay", hint: "Specifies a delay before an animation starts" },
      { word: "animation-direction", hint: "Specifies the direction of an animation" },
      { word: "animation-duration", hint: "Specifies the duration of an animation" },
      { word: "animation-fill-mode", hint: "Specifies how styles are applied before and after animation" },
      { word: "animation-iteration-count", hint: "Specifies the number of times an animation should run" },
      { word: "animation-name", hint: "Specifies the name of the @keyframes animation" },
      { word: "animation-play-state", hint: "Specifies whether an animation is running or paused" },
      { word: "animation-timing-function", hint: "Specifies the speed curve of an animation" },
      { word: "backface-visibility", hint: "Determines if the back face of an element is visible" },
      { word: "background", hint: "Shorthand for background properties" },
      { word: "background-attachment", hint: "Specifies if the background image scrolls with the page" },
      { word: "background-blend-mode", hint: "Defines the blending mode of background layers" },
      { word: "background-clip", hint: "Defines how far the background extends within an element" },
      { word: "background-color", hint: "Sets the background color of an element" },
      { word: "background-image", hint: "Sets one or more background images for an element" },
      { word: "background-origin", hint: "Specifies the positioning area of the background image" },
      { word: "background-position", hint: "Sets the starting position of a background image" },
      { word: "background-repeat", hint: "Specifies how a background image is repeated" },
      { word: "background-size", hint: "Specifies the size of the background image" },
      { word: "border", hint: "Shorthand for border properties" },
      { word: "border-bottom", hint: "Shorthand for border-bottom properties" },
      { word: "border-bottom-color", hint: "Sets the color of the bottom border" },
      { word: "border-bottom-left-radius", hint: "Defines the radius of the bottom-left corner" },
      { word: "border-bottom-right-radius", hint: "Defines the radius of the bottom-right corner" },
      { word: "border-bottom-style", hint: "Sets the style of the bottom border" },
      { word: "border-bottom-width", hint: "Sets the width of the bottom border" },
      { word: "border-collapse", hint: "Specifies whether table borders are collapsed into a single border" },
      { word: "border-color", hint: "Sets the color of the border" },
      { word: "border-image", hint: "Shorthand for border-image properties" },
      { word: "border-image-outset", hint: "Specifies the amount by which the border image extends beyond the border box" },
      { word: "border-image-repeat", hint: "Specifies how the border image is repeated" },
      { word: "border-image-slice", hint: "Specifies how to slice the border image" },
      { word: "border-image-source", hint: "Specifies the image to be used as a border" },
      { word: "border-image-width", hint: "Specifies the width of the border image" },
      { word: "border-left", hint: "Shorthand for border-left properties" },
      { word: "border-left-color", hint: "Sets the color of the left border" },
      { word: "border-left-style", hint: "Sets the style of the left border" },
      { word: "border-left-width", hint: "Sets the width of the left border" },
      { word: "border-radius", hint: "Defines the radius of the element's corners" },
      { word: "border-right", hint: "Shorthand for border-right properties" },
      { word: "border-right-color", hint: "Sets the color of the right border" },
      { word: "border-right-style", hint: "Sets the style of the right border" },
      { word: "border-right-width", hint: "Sets the width of the right border" },
      { word: "border-spacing", hint: "Sets the distance between the borders of adjacent table cells" },
      { word: "border-style", hint: "Sets the style of the border" },
      { word: "border-top", hint: "Shorthand for border-top properties" },
      { word: "border-top-color", hint: "Sets the color of the top border" },
      { word: "border-top-left-radius", hint: "Defines the radius of the top-left corner" },
      { word: "border-top-right-radius", hint: "Defines the radius of the top-right corner" },
      { word: "border-top-style", hint: "Sets the style of the top border" },
      { word: "border-top-width", hint: "Sets the width of the top border" },
      { word: "border-width", hint: "Sets the width of the border" },
      { word: "bottom", hint: "Specifies the bottom position of a positioned element" },
      { word: "box-shadow", hint: "Adds shadow effects around an element's frame" },
      { word: "box-sizing", hint: "Defines how the width and height of an element are calculated" },
      { word: "caption-side", hint: "Specifies the placement of a table caption" },
      { word: "clear", hint: "Specifies whether an element should be next to floating elements" },
      { word: "clip", hint: "Clips an absolutely positioned element" },
      { word: "color", hint: "Sets the color of text" },
      { word: "column-count", hint: "Specifies the number of columns an element should be divided into" },
      { word: "column-fill", hint: "Specifies how columns are filled" },
      { word: "column-gap", hint: "Specifies the gap between columns" },
      { word: "column-rule", hint: "Shorthand for column-rule properties" },
      { word: "column-rule-color", hint: "Sets the color of the rule between columns" },
      { word: "column-rule-style", hint: "Sets the style of the rule between columns" },
      { word: "column-rule-width", hint: "Sets the width of the rule between columns" },
      { word: "column-span", hint: "Specifies how many columns an element should span across" },
      { word: "column-width", hint: "Specifies the width of columns" },
      { word: "columns", hint: "Shorthand for column-width and column-count" },
      { word: "content", hint: "Used with ::before and ::after to insert generated content" },
      { word: "counter-increment", hint: "Increments one or more CSS counters" },
      { word: "counter-reset", hint: "Resets one or more CSS counters" },
      { word: "cursor", hint: "Specifies the mouse cursor to be displayed when pointing over an element" },
      { word: "direction", hint: "Specifies the text direction/writing direction" },
      { word: "display", hint: "Specifies the display behavior of an element" },
      { word: "empty-cells", hint: "Specifies whether to display borders on empty table cells" },
      { word: "filter", hint: "Applies graphical effects like blur or color shift to an element" },
      { word: "flex", hint: "Shorthand for flex-grow, flex-shrink, and flex-basis" },
      { word: "flex-basis", hint: "Specifies the initial size of a flex item" },
      { word: "flex-direction", hint: "Specifies the direction of the flexible items" },
      { word: "flex-flow", hint: "Shorthand for flex-direction and flex-wrap" },
      { word: "flex-grow", hint: "Specifies how much a flex item will grow relative to the rest" },
      { word: "flex-shrink", hint: "Specifies how much a flex item will shrink relative to the rest" },
      { word: "flex-wrap", hint: "Specifies whether flex items are forced onto one line or can wrap" },
      { word: "float", hint: "Specifies whether an element should float" },
      { word: "font", hint: "Shorthand for font properties" },
      { word: "@font-face", hint: "Allows custom fonts to be loaded" },
      { word: "font-family", hint: "Specifies the font family for text" },
      { word: "font-size", hint: "Specifies the size of the font" },
      { word: "font-size-adjust", hint: "Preserves the readability of text when font fallback occurs" },
      { word: "font-stretch", hint: "Selects a normal, condensed, or expanded face from a font family" },
      { word: "font-style", hint: "Specifies the font style for text" },
      { word: "font-variant", hint: "Specifies whether text should be displayed in small-caps" },
      { word: "font-weight", hint: "Specifies the weight (boldness) of the font" },
      { word: "hanging-punctuation", hint: "Specifies whether punctuation may be placed outside the line box" },
      { word: "height", hint: "Sets the height of an element" },
      { word: "justify-content", hint: "Aligns items in a flex container along the main axis" },
      { word: "@keyframes", hint: "Specifies the animation code" },
      { word: "left", hint: "Specifies the left position of a positioned element" },
      { word: "letter-spacing", hint: "Specifies the space between characters in text" },
      { word: "line-height", hint: "Specifies the height of a line" },
      { word: "list-style", hint: "Shorthand for list-style properties" },
      { word: "list-style-image", hint: "Specifies an image as the list-item marker" },
      { word: "list-style-position", hint: "Specifies the position of the list-item marker" },
      { word: "list-style-type", hint: "Specifies the type of list-item marker" },
      { word: "margin", hint: "Sets the margin area on all four sides of an element" },
      { word: "margin-bottom", hint: "Sets the bottom margin of an element" },
      { word: "margin-left", hint: "Sets the left margin of an element" },
      { word: "margin-right", hint: "Sets the right margin of an element" },
      { word: "margin-top", hint: "Sets the top margin of an element" },
      { word: "max-height", hint: "Sets the maximum height of an element" },
      { word: "max-width", hint: "Sets the maximum width of an element" },
      { word: "@media", hint: "Applies styles based on media queries" },
      { word: "min-height", hint: "Sets the minimum height of an element" },
      { word: "min-width", hint: "Sets the minimum width of an element" },
      { word: "nav-down", hint: "Specifies where to navigate when using the arrow-down key" },
      { word: "nav-index", hint: "Specifies the tabbing order for navigation" },
      { word: "nav-left", hint: "Specifies where to navigate when using the arrow-left key" },
      { word: "nav-right", hint: "Specifies where to navigate when using the arrow-right key" },
      { word: "nav-up", hint: "Specifies where to navigate when using the arrow-up key" },
      { word: "opacity", hint: "Sets the transparency level of an element" },
      { word: "order", hint: "Specifies the order of a flex item" },
      { word: "outline", hint: "Shorthand for outline properties" },
      { word: "outline-color", hint: "Sets the color of the outline" },
      { word: "outline-offset", hint: "Sets the space between an outline and the edge of an element" },
      { word: "outline-style", hint: "Sets the style of the outline" },
      { word: "outline-width", hint: "Sets the width of the outline" },
      { word: "overflow", hint: "Specifies what happens if content overflows an element's box" },
      { word: "overflow-x", hint: "Specifies what happens if content overflows an element's box horizontally" },
      { word: "overflow-y", hint: "Specifies what happens if content overflows an element's box vertically" },
      { word: "padding", hint: "Sets the padding area on all four sides of an element" },
      { word: "padding-bottom", hint: "Sets the bottom padding of an element" },
      { word: "padding-left", hint: "Sets the left padding of an element" },
      { word: "padding-right", hint: "Sets the right padding of an element" },
      { word: "padding-top", hint: "Sets the top padding of an element" },
      { word: "page-break-after", hint: "Specifies the page break behavior after an element" },
      { word: "page-break-before", hint: "Specifies the page break behavior before an element" },
      { word: "page-break-inside", hint: "Specifies the page break behavior inside an element" },
      { word: "perspective", hint: "Gives a 3D-positioned element some perspective" },
      { word: "perspective-origin", hint: "Defines the origin for the perspective property" },
      { word: "position", hint: "Specifies the type of positioning method used for an element" },
      { word: "quotes", hint: "Specifies the quotation marks for embedded quotations" },
      { word: "resize", hint: "Specifies whether an element is resizable by the user" },
      { word: "right", hint: "Specifies the right position of a positioned element" },
      { word: "tab-size", hint: "Specifies the width of tab characters" },
      { word: "table-layout", hint: "Specifies the algorithm used to lay out table cells" },
      { word: "text-align", hint: "Specifies the horizontal alignment of text" },
      { word: "text-align-last", hint: "Specifies how the last line of a block or a line is aligned" },
      { word: "text-decoration", hint: "Specifies the decoration added to text" },
      { word: "text-decoration-color", hint: "Sets the color of the text decoration" },
      { word: "text-decoration-line", hint: "Sets the type of text decoration" },
      { word: "text-decoration-style", hint: "Sets the style of the text decoration" },
      { word: "text-indent", hint: "Specifies the indentation of the first line in a text block" },
      { word: "text-justify", hint: "Specifies the justification method for text" },
      { word: "text-overflow", hint: "Specifies how overflowed content that is not displayed should be signaled" },
      { word: "text-shadow", hint: "Adds shadow to text" },
      { word: "text-transform", hint: "Controls the capitalization of text" },
      { word: "top", hint: "Specifies the top position of a positioned element" },
      { word: "transform", hint: "Applies a 2D or 3D transformation to an element" },
      { word: "transform-origin", hint: "Sets the origin for an element's transformations" },
      { word: "transform-style", hint: "Specifies how nested elements are rendered in 3D space" },
      { word: "transition", hint: "Shorthand for transition properties" },
      { word: "transition-delay", hint: "Specifies a delay before a transition effect starts" },
      { word: "transition-duration", hint: "Specifies the duration of a transition effect" },
      { word: "transition-property", hint: "Specifies the CSS properties to which a transition effect should be applied" },
      { word: "transition-timing-function", hint: "Specifies the speed curve of a transition effect" },
      { word: "unicode-bidi", hint: "Used with direction to handle bidirectional text" },
      { word: "vertical-align", hint: "Sets the vertical alignment of an element" },
      { word: "visibility", hint: "Specifies whether an element is visible or hidden" },
      { word: "white-space", hint: "Specifies how white-space inside an element is handled" },
      { word: "width", hint: "Sets the width of an element" },
      { word: "word-break", hint: "Specifies how words should break when reaching the end of a line" },
      { word: "word-spacing", hint: "Specifies the space between words" },
      { word: "word-wrap", hint: "Specifies whether to break words when they overflow their container" },
      { word: "z-index", hint: "Specifies the stack order of an element" }
    ];

    this.setState({
      words: cssProperties,
      letters: [],
      clickedLetters: [],
      matchedLetters: [],
      lives: this.state.initialLives,
      clickedButton: e.target.value,
      gameStarted: true,
      score: 0,
      currentHint: "" // Reset hint
    });

    setTimeout(
      function () {
        this.getRandom();
      }.bind(this),
      100
    );
  },

  getRandom: function () {
    var randomNum = Math.floor(Math.random() * this.state.words.length);
    var random = this.state.words[randomNum];
  
    this.state.words.splice(randomNum, 1);
  
    this.setState({
      randomWord: random.word,
      currentHint: random.hint // Set the hint for the current word
    });
  
    setTimeout(
      function () {
        this.splitLetters();
      }.bind(this),
      100
    );
  },

  splitLetters: function () {
    var s = this.state.randomWord.toUpperCase();
    this.state.letters = []; // Clear previous letters
    for (var i = 0; i < s.length; i++) {
      this.state.letters.push(s.charAt(i));
    }
    this.setState({
      letters: this.state.letters
    });
  },
  
  checkLetter: function (e) {
    var val = e.currentTarget.textContent;
  
    this.state.clickedLetters.push(val);
  
    this.setState({
      clickedLetters: this.state.clickedLetters,
      lives: this.state.lives - 1
    });
  
    var _this = this;
    this.state.letters.forEach(function (letter) {
      if (letter === val) {
        _this.state.matchedLetters.push(letter);
        _this.setState({
          matchedLetters: _this.state.matchedLetters,
          lives: _this.state.lives
        });
  
        if (_this.state.lives < 1) {
          if (
            _this.state.letters.length !== _this.state.matchedLetters.length
          ) {
            this.setState({
              nextWord: false
            });
          }
        }
      }
    });
  
    if (this.state.lives < 1) {
      // if lives...
  
      this.setState({
        nextWord: true,
        lives: ""
      });
  
      setTimeout(
        function () {
          this.state.matchedLetters.splice(0, this.state.matchedLetters.length);
          this.state.matchedLetters.splice.apply(
            this.state.matchedLetters,
            [0, this.state.letters.length].concat(this.state.letters)
          );
  
          this.setState({
            matchedLetters: this.state.matchedLetters
          });
  
          {
            /* second setTimeout */
          }
          setTimeout(
            function () {
              this.setState({
                clickedLetters: [],
                matchedLetters: [],
                lives: this.state.initialLives,
                nextWord: false,
                currentHint: "" // Reset hint for the next word
              });
  
              this.state.letters.splice(0, this.state.letters.length);
  
              {
                /* get new random word */
              }
              var randomNum = Math.floor(
                Math.random() * this.state.words.length
              );
              var random = this.state.words[randomNum];
  
              this.state.words.splice(randomNum, 1);
  
              this.setState({
                randomWord: random.word, // Update to use random.word
                currentHint: random.hint // Set hint for the new word
              });
              {
                /* get new random word*/
              }
  
              {
                /* push new random word's letters to letters array */
              }
              var s = random.word.toUpperCase(); // Update to use random.word
              for (var i = 0; i < s.length; i++) {
                this.state.letters.splice();
                this.state.letters.push(s.charAt(i));
              }
              this.setState({
                letters: this.state.letters
              });
              {
                /* push new random word's letters to letters array */
              }
            }.bind(this),
            2000
          );
          {
            /* second setTimeout */
          }
        }.bind(this),
        750
      );
  
      {
        /* check game setTimeout */
      }
      setTimeout(
        function () {
          {
            /* check if game is over */
          }
          if (this.state.words.length === 0) {
            //alert("Game is over! ");
  
            this.setState({
              gameOver: true
            });
  
            //this.setState(this.getInitialState());
          }
          {
            /* check if game is over*/
          }
        }.bind(this),
        2500
      );
      {
        /* check game setTimeout */
      }
    } // if lives...
  
    {
      /* if the word is found, continue the game */
    }
    if (this.state.letters.length == this.state.matchedLetters.length) {
      //alert("You found the word!");
      this.setState({
        nextWord: true,
        lives: ""
      });
      setTimeout(
        function () {
          this.setState({
            clickedLetters: [],
            lives: this.state.initialLives,
            nextWord: false,
            score: this.state.score + 1,
            currentHint: "" // Reset hint for the next word
          });
  
          {
            /* check if game is over */
          }
          if (this.state.words.length === 0) {
            this.setState({
              gameOver: true
            });
  
            //this.setState(this.getInitialState());
          }
          {
            /* check if game is over*/
          }
  
          {
            /* reset lives and clear the matchedLetters array */
          }
          this.setState({
            matchedLetters: [],
            lives: this.state.initialLives
          });
          {
            /* reset lives and clear the matchedLetters array */
          }
  
          this.state.letters.splice(0, this.state.letters.length);
  
          {
            /* get new random word */
          }
          var randomNum = Math.floor(Math.random() * this.state.words.length);
          var random = this.state.words[randomNum];
  
          this.state.words.splice(randomNum, 1);
  
          this.setState({
            randomWord: random.word, // Update to use random.word
            currentHint: random.hint // Set hint for the new word
          });
          {
            /* get new random word */
          }
  
          {
            /* push the new random words letters to letters array */
          }
          var s = random.word.toUpperCase(); // Update to use random.word
          for (var i = 0; i < s.length; i++) {
            this.state.letters.splice();
            this.state.letters.push(s.charAt(i));
          }
          this.setState({
            letters: this.state.letters
          });
          {
            /* push the new random words letters to letters array */
          }
        }.bind(this),
        2000
      );
    }
    {
      /* if the word is found, continue the game */
    }
  },
    easyLevel: function (e) {
      this.setState({
        initialLives: 10,
        chosenLevel: e.target.value
      });
    },
    mediumLevel: function (e) {
      this.setState({
        initialLives: 6,
        chosenLevel: e.target.value
      });
    },
    hardLevel: function (e) {
      this.setState({
        initialLives: 2,
        chosenLevel: e.target.value
      });
    },
    closeModal: function () {
      this.setState(this.getInitialState());
    },
  
    render: function () {
      return (
        <div className={this.state.gameOver ? "container gameOver" : "container"}>
          <header>
            <a href="https://mburakerman.github.io/hangmanizr/" className="title">
              Code Clue
            </a>
            <p className="description">GDG PROJECT</p>
          </header>
  
          <section>
            <div className="start-playing-text-wrapper">
              <p>
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M1.683,3.39h16.676C18.713,3.39,19,3.103,19,2.749s-0.287-0.642-0.642-0.642H1.683
            c-0.354,0-0.641,0.287-0.641,0.642S1.328,3.39,1.683,3.39z M1.683,7.879h11.545c0.354,0,0.642-0.287,0.642-0.641
            s-0.287-0.642-0.642-0.642H1.683c-0.354,0-0.641,0.287-0.641,0.642S1.328,7.879,1.683,7.879z M18.358,11.087H1.683
            c-0.354,0-0.641,0.286-0.641,0.641s0.287,0.642,0.641,0.642h16.676c0.354,0,0.642-0.287,0.642-0.642S18.713,11.087,18.358,11.087zM11.304,15.576H1.683c-0.354,0-0.641,0.287-0.641,0.642s0.287,0.641,0.641,0.641h9.621c0.354,0,0.642-0.286,0.642-0.641
            S11.657,15.576,11.304,15.576z"
                  ></path>
                </svg>{" "}
                Choose your level and start playing by clicking the topics below.{" "}
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M1.321,3.417h17.024C18.707,3.417,19,3.124,19,2.762c0-0.362-0.293-0.655-0.654-0.655H1.321
            c-0.362,0-0.655,0.293-0.655,0.655C0.667,3.124,0.959,3.417,1.321,3.417z M18.346,15.857H8.523c-0.361,0-0.655,0.293-0.655,0.654c0,0.362,0.293,0.655,0.655,0.655h9.822c0.361,0,0.654-0.293,0.654-0.655C19,16.15,18.707,15.857,18.346,15.857zM18.346,11.274
            H1.321c-0.362,0-0.655,0.292-0.655,0.654s0.292,0.654,0.655,0.654h17.024c0.361,0,0.654-0.292,0.654-0.654
            S18.707,11.274,18.346,11.274z M18.346,6.69H6.56c-0.362,0-0.655,0.293-0.655,0.655C5.904,7.708,6.198,8,6.56,8h11.786C18.707,8,19,7.708,19,7.345C19,6.983,18.707,6.69,18.346,6.69z"
                  ></path>
                </svg>
              </p>
  
              <p>
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M1.683,3.39h16.676C18.713,3.39,19,3.103,19,2.749s-0.287-0.642-0.642-0.642H1.683
            c-0.354,0-0.641,0.287-0.641,0.642S1.328,3.39,1.683,3.39z M1.683,7.879h11.545c0.354,0,0.642-0.287,0.642-0.641
            s-0.287-0.642-0.642-0.642H1.683c-0.354,0-0.641,0.287-0.641,0.642S1.328,7.879,1.683,7.879z M18.358,11.087H1.683
            c-0.354,0-0.641,0.286-0.641,0.641s0.287,0.642,0.641,0.642h16.676c0.354,0,0.642-0.287,0.642-0.642S18.713,11.087,18.358,11.087zM11.304,15.576H1.683c-0.354,0-0.641,0.287-0.641,0.642s0.287,0.641,0.641,0.641h9.621c0.354,0,0.642-0.286,0.642-0.641
            S11.657,15.576,11.304,15.576z"
                  ></path>
                </svg>{" "}
                You have {this.state.initialLives} lives.{" "}
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M1.321,3.417h17.024C18.707,3.417,19,3.124,19,2.762c0-0.362-0.293-0.655-0.654-0.655H1.321
            c-0.362,0-0.655,0.293-0.655,0.655C0.667,3.124,0.959,3.417,1.321,3.417z M18.346,15.857H8.523c-0.361,0-0.655,0.293-0.655,0.654c0,0.362,0.293,0.655,0.655,0.655h9.822c0.361,0,0.654-0.293,0.654-0.655C19,16.15,18.707,15.857,18.346,15.857zM18.346,11.274
            H1.321c-0.362,0-0.655,0.292-0.655,0.654s0.292,0.654,0.655,0.654h17.024c0.361,0,0.654-0.292,0.654-0.654
            S18.707,11.274,18.346,11.274z M18.346,6.69H6.56c-0.362,0-0.655,0.293-0.655,0.655C5.904,7.708,6.198,8,6.56,8h11.786C18.707,8,19,7.708,19,7.345C19,6.983,18.707,6.69,18.346,6.69z"
                  ></path>
                </svg>
              </p>
              <p>
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"
                  ></path>
                </svg>{" "}
                Have fun!{" "}
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"
                  ></path>
                </svg>
              </p>
  
              <p>
                <div
                  className={
                    this.state.gameStarted
                      ? "game-levels-wrapper pointer-events-none"
                      : "game-levels-wrapper pointer-events-auto"
                  }
                >
                  <button
                    onClick={this.easyLevel}
                    className="easy-mode"
                    value="easy"
                    disabled={this.state.chosenLevel === "easy"}
                  >
                    <svg
                      onClick={this.easyLevel}
                      className="svg-icon"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        d="M18.737,9.691h-5.462c-0.279,0-0.527,0.174-0.619,0.437l-1.444,4.104L8.984,3.195c-0.059-0.29-0.307-0.506-0.603-0.523C8.09,2.657,7.814,2.838,7.721,3.12L5.568,9.668H1.244c-0.36,0-0.655,0.291-0.655,0.655c0,0.36,0.294,0.655,0.655,0.655h4.8c0.281,0,0.532-0.182,0.621-0.45l1.526-4.645l2.207,10.938c0.059,0.289,0.304,0.502,0.595,0.524c0.016,0,0.031,0,0.046,0c0.276,0,0.524-0.174,0.619-0.437L13.738,11h4.999c0.363,0,0.655-0.294,0.655-0.655C19.392,9.982,19.1,9.691,18.737,9.691z"
                      ></path>
                    </svg>{" "}
                    Easy
                  </button>
  
                  <button
                    onClick={this.mediumLevel}
                    className="medium-mode"
                    value="medium"
                    disabled={this.state.chosenLevel === "medium"}
                  >
                    <svg
                      onClick={this.mediumLevel}
                      className="svg-icon"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        d="M18.737,9.691h-5.462c-0.279,0-0.527,0.174-0.619,0.437l-1.444,4.104L8.984,3.195c-0.059-0.29-0.307-0.506-0.603-0.523C8.09,2.657,7.814,2.838,7.721,3.12L5.568,9.668H1.244c-0.36,0-0.655,0.291-0.655,0.655c0,0.36,0.294,0.655,0.655,0.655h4.8c0.281,0,0.532-0.182,0.621-0.45l1.526-4.645l2.207,10.938c0.059,0.289,0.304,0.502,0.595,0.524c0.016,0,0.031,0,0.046,0c0.276,0,0.524-0.174,0.619-0.437L13.738,11h4.999c0.363,0,0.655-0.294,0.655-0.655C19.392,9.982,19.1,9.691,18.737,9.691z"
                      ></path>
                    </svg>{" "}
                    Medium
                  </button>
  
                  <button
                    onClick={this.hardLevel}
                    className="hard-mode"
                    value="hard"
                    disabled={this.state.chosenLevel === "hard"}
                  >
                    <svg
                      onClick={this.hardLevel}
                      className="svg-icon"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="none"
                        d="M18.737,9.691h-5.462c-0.279,0-0.527,0.174-0.619,0.437l-1.444,4.104L8.984,3.195c-0.059-0.29-0.307-0.506-0.603-0.523C8.09,2.657,7.814,2.838,7.721,3.12L5.568,9.668H1.244c-0.36,0-0.655,0.291-0.655,0.655c0,0.36,0.294,0.655,0.655,0.655h4.8c0.281,0,0.532-0.182,0.621-0.45l1.526-4.645l2.207,10.938c0.059,0.289,0.304,0.502,0.595,0.524c0.016,0,0.031,0,0.046,0c0.276,0,0.524-0.174,0.619-0.437L13.738,11h4.999c0.363,0,0.655-0.294,0.655-0.655C19.392,9.982,19.1,9.691,18.737,9.691z"
                      ></path>
                    </svg>{" "}
                    Hard
                  </button>
                </div>
              </p>
            </div>
            <div className="start-game-buttons-wrapper">
              <button
                data-tooltip="129 words"
                className="topic"
                onClick={this.htmlElementsGame}
                value="html"
                disabled={this.state.clickedButton === "html"}
              >
                <svg viewBox="0 0 456.804 456.804" className="topicsSvg htmlSvg">
                  <path
                    d="M27.405,0l36.542,410.56l163.882,46.244l165.022-46.244L429.398,0H27.405z M350.025,133.904h-192.43l4.283,51.676h183.866
            l-14.273,155.315l-102.499,28.26v0.287h-1.143l-103.356-28.547l-6.28-79.367h49.965l3.711,39.971l55.959,15.126l56.245-15.126
            l6.283-65.097H115.625l-13.418-152.46h252.392L350.025,133.904z"
                  />
                </svg>{" "}
                HTML Elements
              </button>
  
              <button
                data-tooltip="180 words"
                className="topic"
                onClick={this.cssPropertiesGame}
                value="css"
                disabled={this.state.clickedButton === "css"}
              >
                <svg viewBox="0 0 470.699 470.699" className="topicsSvg cssSvg">
                  <path
                    d="M426.981,0H43.701C34.52,0,27.632,7.769,28.442,16.949L63.45,409.254c0.811,9.173,8.745,18.774,17.644,21.253
            l138.006,38.335c8.887,2.463,23.413,2.479,32.313,0.032l138.177-38.281c8.901-2.472,16.835-11.986,17.645-21.175l35.023-392.469
            C443.068,7.769,436.209,0,426.981,0z M360.51,141.611c-0.006,0.06-0.053,0.107-0.112,0.117c-0.06,0.01-0.118-0.021-0.144-0.077
            L252.13,185.96c-1.54,0.631-2.418,2.264-2.098,3.897c0.322,1.633,1.754,2.811,3.419,2.811h84.103c4.474,0,8.736,1.9,11.728,5.227
            c2.991,3.327,4.429,7.768,3.954,12.216l-13.141,123.273c-0.645,6.048-4.709,11.186-10.447,13.205l-89.269,31.41
            c-3.362,1.184-7.027,1.193-10.397,0.025l-88.852-30.778c-5.773-2-9.871-7.153-10.52-13.228l-5.957-55.828
            c-0.313-2.931,0.634-5.857,2.604-8.048c1.971-2.192,4.779-3.444,7.727-3.444h24.725c5.313,0,9.769,4.007,10.331,9.289l3.655,34.316
            l61.521,21.385l61.803-21.58l7.559-71.17H129.835c-5.297,0-9.746-3.985-10.327-9.25l-3.327-30.164
            c-0.508-4.601,2.088-8.982,6.366-10.745l111.837-46.109c1.269-0.523,1.99-1.868,1.724-3.214c-0.267-1.345-1.446-2.314-2.817-2.314
            H115.542c-3.545,0-6.518-2.677-6.888-6.201l-3.406-32.421c-0.205-1.951,0.428-3.898,1.741-5.357
            c1.313-1.458,3.184-2.291,5.146-2.291h246.379c1.973,0,3.852,0.842,5.166,2.313c1.314,1.472,1.938,3.434,1.715,5.394L360.51,141.611z"
                  />
                </svg>{" "}
                CSS Properties
              </button>
            </div>
            <div className="letters-wrapper">
              <ul className="letters">
                {this.state.letters.map(function (item) {
                  return (
                    <li
                      className={
                        this.state.matchedLetters.includes(item)
                          ? "foundedLetter"
                          : "letter"
                      }
                    >
                      {item}
                    </li>
                  );
                }, this)}
              </ul>
            </div>
            <div className="hint-wrapper">
              <p className="hint-text">Hint: {this.state.currentHint}</p>
            </div>
            <div className="for-loader">
              <div className={this.state.nextWord ? "disable" : "enable"}>
                <div
                  className={
                    this.state.gameStarted
                      ? "pointer-events-auto"
                      : "pointer-events-none"
                  }
                >
                  <div className="alphabet-wrapper">
                    <ul className="alphabet">
                      {this.state.alphabet.map(function (item) {
                        return (
                          <li
                            className={
                              this.state.clickedLetters.includes(item)
                                ? "clickedLetter"
                                : "alphabetLetters"
                            }
                            onClick={this.checkLetter.bind(this)}
                          >
                            {item}
                          </li>
                        );
                      }, this)}
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className={
                  this.state.nextWord ? "show-svg-loader" : "hide-svg-loader"
                }
                src="data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjQ0IiBoZWlnaHQ9IjQ0IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICA8Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSIxIj4KICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIKICAgICAgICAgICAgICAgIGJlZ2luPSIwcyIgZHVyPSIxLjhzIgogICAgICAgICAgICAgICAgdmFsdWVzPSIxOyAyMCIKICAgICAgICAgICAgICAgIGNhbGNNb2RlPSJzcGxpbmUiCiAgICAgICAgICAgICAgICBrZXlUaW1lcz0iMDsgMSIKICAgICAgICAgICAgICAgIGtleVNwbGluZXM9IjAuMTY1LCAwLjg0LCAwLjQ0LCAxIgogICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IgogICAgICAgICAgICAgICAgYmVnaW49IjBzIiBkdXI9IjEuOHMiCiAgICAgICAgICAgICAgICB2YWx1ZXM9IjE7IDAiCiAgICAgICAgICAgICAgICBjYWxjTW9kZT0ic3BsaW5lIgogICAgICAgICAgICAgICAga2V5VGltZXM9IjA7IDEiCiAgICAgICAgICAgICAgICBrZXlTcGxpbmVzPSIwLjMsIDAuNjEsIDAuMzU1LCAxIgogICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgICAgPC9jaXJjbGU+CiAgICAgICAgPGNpcmNsZSBjeD0iMjIiIGN5PSIyMiIgcj0iMSI+CiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiCiAgICAgICAgICAgICAgICBiZWdpbj0iLTAuOXMiIGR1cj0iMS44cyIKICAgICAgICAgICAgICAgIHZhbHVlcz0iMTsgMjAiCiAgICAgICAgICAgICAgICBjYWxjTW9kZT0ic3BsaW5lIgogICAgICAgICAgICAgICAga2V5VGltZXM9IjA7IDEiCiAgICAgICAgICAgICAgICBrZXlTcGxpbmVzPSIwLjE2NSwgMC44NCwgMC40NCwgMSIKICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2Utb3BhY2l0eSIKICAgICAgICAgICAgICAgIGJlZ2luPSItMC45cyIgZHVyPSIxLjhzIgogICAgICAgICAgICAgICAgdmFsdWVzPSIxOyAwIgogICAgICAgICAgICAgICAgY2FsY01vZGU9InNwbGluZSIKICAgICAgICAgICAgICAgIGtleVRpbWVzPSIwOyAxIgogICAgICAgICAgICAgICAga2V5U3BsaW5lcz0iMC4zLCAwLjYxLCAwLjM1NSwgMSIKICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICAgIDwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4="
              />
            </div>
            <div
              className={
                this.state.gameStarted
                  ? "lives-words-left-wrapper"
                  : "lives-words-left-wrapper displayNone"
              }
            >
              <p className="lives">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"
                  ></path>
                </svg>{" "}
                Your lives: {this.state.lives}
              </p>
              <p className="words-left">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M11.015,11.009l5.063,1.191c0.288,0.068,0.579-0.088,0.682-0.364c0.35-0.931,0.528-1.909,0.528-2.91c0-4.559-3.71-8.269-8.27-8.269c-4.559,0-8.269,3.71-8.269,8.269c0,4.56,3.71,8.27,8.269,8.27c0.891,0,1.768-0.144,2.605-0.426c0.279-0.094,0.445-0.38,0.389-0.668L11.015,11.009z M9.018,16.024c-3.914,0-7.097-3.185-7.097-7.099s3.184-7.097,7.097-7.097s7.098,3.184,7.098,7.097c0,0.686-0.097,1.36-0.291,2.012l-5.427-1.276c-0.192-0.046-0.397,0.01-0.54,0.147c-0.144,0.138-0.207,0.339-0.169,0.534l1.07,5.461C10.193,15.951,9.61,16.024,9.018,16.024z"
                  ></path>
                  <path
                    fill="none"
                    d="M19.183,13.897c-0.08-0.149-0.22-0.256-0.384-0.295l-5.945-1.398c-0.191-0.046-0.397,0.01-0.54,0.147c-0.143,0.138-0.207,0.34-0.168,0.534l1.171,5.985c0.032,0.165,0.135,0.309,0.281,0.394c0.089,0.052,0.191,0.079,0.293,0.079c0.064,0,0.127-0.01,0.188-0.031c0.154-0.052,3.75-1.311,5.134-4.931C19.272,14.223,19.261,14.046,19.183,13.897z M14.325,17.928l-0.857-4.377l4.375,1.029C16.896,16.443,15.229,17.48,14.325,17.928z"
                  ></path>
                </svg>{" "}
                Words left: {this.state.words.length}
              </p>
              <p className="score">
                <svg className="svg-icon" viewBox="0 0 20 20">
                  <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
                </svg>{" "}
                Score: {this.state.score}
              </p>
            </div>
          </section>
  
          <div className={this.state.gameOver ? "modal" : "modal modalHide"}>
            <p className="close-modal" onClick={this.closeModal}>
              X
            </p>
            <section>
              <h3>
                <svg className="svg-icon gameOverSvg" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M18.616,7.04h-0.638V5.305c0-0.448-0.362-0.813-0.813-0.813H1.407c-0.451,0-0.813,0.365-0.813,0.813v9.39c0,0.449,0.362,0.813,0.813,0.813h15.759c0.451,0,0.813-0.364,0.813-0.813v-1.667h0.638c0.451,0,0.813-0.362,0.813-0.813V7.852C19.429,7.403,19.067,7.04,18.616,7.04z M16.353,13.883H2.22V6.117h14.133v1.735v4.364V13.883z"
                  ></path>
                </svg>{" "}
                GAME OVER!{" "}
                <svg className="svg-icon gameOverSvg" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M18.616,7.04h-0.638V5.305c0-0.448-0.362-0.813-0.813-0.813H1.407c-0.451,0-0.813,0.365-0.813,0.813v9.39c0,0.449,0.362,0.813,0.813,0.813h15.759c0.451,0,0.813-0.364,0.813-0.813v-1.667h0.638c0.451,0,0.813-0.362,0.813-0.813V7.852C19.429,7.403,19.067,7.04,18.616,7.04z M16.353,13.883H2.22V6.117h14.133v1.735v4.364V13.883z"
                  ></path>
                </svg>
              </h3>
              <p>
                <svg className="svg-icon totalScoreSvg" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M6.506,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85S6.975,6.98,6.506,6.98z
    M18.684,4.148h-3.398V0.75H5.656v3.398H1.691c-0.313,0-0.566,0.253-0.566,0.566V14.91c0,0.312,0.253,0.566,0.566,0.566h3.965
    v3.398h9.629v-3.398h3.398c0.313,0,0.566-0.254,0.566-0.566V4.714C19.25,4.401,18.997,4.148,18.684,4.148z M6.789,1.882h7.363
    v2.266H6.789V1.882z M14.152,17.742H6.789v-5.664h7.363V17.742z M18.117,13.777c0,0.312-0.254,0.566-0.566,0.566h-2.266v-3.399
    H5.656v3.399H2.824c-0.313,0-0.566-0.254-0.566-0.566v-7.93c0-0.313,0.253-0.566,0.566-0.566h14.727
    c0.312,0,0.566,0.253,0.566,0.566V13.777z M3.674,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85
    S4.143,6.98,3.674,6.98z"
                  ></path>
                </svg>{" "}
                Your score is {this.state.score}.{" "}
                <svg className="svg-icon totalScoreSvg" viewBox="0 0 20 20">
                  <path
                    fill="none"
                    d="M6.506,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85S6.975,6.98,6.506,6.98z
    M18.684,4.148h-3.398V0.75H5.656v3.398H1.691c-0.313,0-0.566,0.253-0.566,0.566V14.91c0,0.312,0.253,0.566,0.566,0.566h3.965
    v3.398h9.629v-3.398h3.398c0.313,0,0.566-0.254,0.566-0.566V4.714C19.25,4.401,18.997,4.148,18.684,4.148z M6.789,1.882h7.363
    v2.266H6.789V1.882z M14.152,17.742H6.789v-5.664h7.363V17.742z M18.117,13.777c0,0.312-0.254,0.566-0.566,0.566h-2.266v-3.399
    H5.656v3.399H2.824c-0.313,0-0.566-0.254-0.566-0.566v-7.93c0-0.313,0.253-0.566,0.566-0.566h14.727
    c0.312,0,0.566,0.253,0.566,0.566V13.777z M3.674,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85
    S4.143,6.98,3.674,6.98z"
                  ></path>
                </svg>
              </p>
            </section>
          </div>
        </div>
      );
    }
  });
  
  ReactDOM.render(<Hangmanizr />, document.getElementById("app"));

