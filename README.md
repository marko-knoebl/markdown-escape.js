Escape Markdown control characters.

```javascript
var escape = require('markdown-escape')
var assert = require('assert')

assert(escape("#1! We're #1!") === "\\#1\\! We\\'re \\#1\\!")
assert(escape("#1! We're #1!", {flavor: "gfm"}) === "\\#1\\! We're \\#1\\!")
assert(escape("https://google.com", {flavor: "commonmark"}) === "https\\:\\/\\/google\\.com")
assert(escape("https://google.com", {flavor: "gfm"}) === "https://google\\.com")
```
