ace.define("ace/theme/vaadin.css", ["require", "exports", "module"], function(require, exports, module) {
    module.exports = `
.ace-vaadin {
  background-color: var(--ace-bg, #ffffff);
  color: var(--ace-fg, #000);
}
.ace-vaadin .ace_text-layer,
.ace-vaadin .ace_marker-layer,
.ace-vaadin .ace_cursor-layer {
  margin-top: var(--ace-content-padding, 0) !important;
  margin-bottom: var(--ace-content-padding, 0) !important;
}
.ace-vaadin .ace_gutter {
  background: var(--ace-gutter-bg, #ebebeb);
  border-right: 1px solid var(--ace-gutter-border, #9f9f9f);
  color: var(--ace-gutter-fg, #888);
}
.ace-vaadin .ace_print-margin {
  width: 1px;
  background: var(--ace-print-margin-bg, #ebebeb);
}
.ace-vaadin .ace_fold {
  background-color: var(--ace-fold-bg, #3c4c72);
}
.ace-vaadin .ace_cursor {
  color: var(--ace-cursor, #000);
}
.ace-vaadin .ace_storage,
.ace-vaadin .ace_keyword,
.ace-vaadin .ace_variable {
  color: var(--ace-keyword, #7f0055);
}
.ace-vaadin .ace_constant.ace_buildin {
  color: var(--ace-constant-builtin, #5848f6);
}
.ace-vaadin .ace_constant.ace_library {
  color: var(--ace-constant-library, #06960e);
}
.ace-vaadin .ace_function {
  color: var(--ace-function, #3c4c72);
}
.ace-vaadin .ace_string {
  color: var(--ace-string, #2a00ff);
}
.ace-vaadin .ace_comment {
  color: var(--ace-comment, #719682);
}
.ace-vaadin .ace_comment.ace_doc {
  color: var(--ace-comment-doc, #3f5fbf);
}
.ace-vaadin .ace_comment.ace_doc.ace_tag {
  color: var(--ace-comment-doc-tag, #7f9fbf);
}
.ace-vaadin .ace_constant.ace_numeric {
  color: var(--ace-constant-numeric, darkblue);
}
.ace-vaadin .ace_tag {
  color: var(--ace-tag, #197674);
}
.ace-vaadin .ace_type {
  color: var(--ace-type, #7f007f);
}
.ace-vaadin .ace_xml-pe {
  color: var(--ace-xml-pe, #68685b);
}
.ace-vaadin .ace_meta.ace_tag {
  color: var(--ace-meta-tag, #197674);
}
.ace-vaadin .ace_invisible {
  color: var(--ace-invisible, #ddd);
}
.ace-vaadin .ace_entity.ace_other.ace_attribute-name {
  color: var(--ace-attribute-name, #7f007f);
}
.ace-vaadin .ace_marker-layer .ace_selection {
  background: var(--ace-selection-bg, #b5d5ff);
}
.ace-vaadin .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid var(--ace-bracket-border, #c0c0c0);
}
.ace-vaadin .ace_marker-layer .ace_step {
  background: var(--ace-step-bg, #ffff00);
}
.ace-vaadin .ace_marker-layer .ace_selected-word {
  border: 1px solid var(--ace-selected-word-border, #b5d5ff);
}
.ace-vaadin .ace_active-line {
  background: var(--ace-active-line-bg, #e8f2fe);
}
.ace-vaadin .ace_gutter-active-line {
  background-color: var(--ace-gutter-active-line-bg, #dadada);
}
.ace-vaadin .ace_indent-guide {
  background: var(--ace-indent-guide, url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y);
}
`;
});

ace.define("ace/theme/vaadin", ["require", "exports", "module", "ace/theme/vaadin.css", "ace/lib/dom"], function(require, exports, module) {
    "use strict";
    exports.isDark = false;
    exports.cssText = require("./vaadin.css");
    exports.cssClass = "ace-vaadin";
    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass, false);
});

(function() {
    ace.require(["ace/theme/vaadin"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
