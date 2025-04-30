const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurnDownService = require("turndown");

function sanitizeMarkdownContent(markDownContent) {
  // 1 convert markdown into html
  const convertedHtml = marked.parse(markDownContent);

  //2 sanitize html (to maialicous cod eis there check is done)
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"]),
  });

  //3 convert back sanitize Html to markdown
  const turnDownService = new TurnDownService();
  const sanitizeMarkdown = turnDownService.turndown(sanitizedHtml);

  return sanitizeMarkdown;
}

module.exports = sanitizeMarkdownContent;
