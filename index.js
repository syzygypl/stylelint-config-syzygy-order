"use strict";

module.exports = {
  "plugins": [
    "stylelint-order",
  ],
  "rules": {
    "order/properties-alphabetical-order": null,
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        {
          "type": "at-rule",
          "name": "extend",
          "hasBlock": false,
        },
        "declarations",
        "rules",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true,
        },
        {
          "type": "at-rule",
          "name": "return",
        },
      ],
    ],
    "order/properties-order": [
      [
        {
          "emptyLineBefore": "never",
          "properties": [
            "content",
          ],
        },
        {
          "emptyLineBefore": "never",
          "order": "flexible",
          "properties": [
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index",
          ],
        },
        {
          "emptyLineBefore": "never",
          "order": "flexible",
          "properties": [
            "box-sizing",
            "display",
            "table-layout",
            "float",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "justify-content",
            "align-items",
            "align-content",
            "align-self",
            "order",
            "width",
            "height",
            "max-width",
            "max-height",
            "min-height",
            "min-width",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "overflow",
            "overflow-x",
            "overflow-y",
            "overflow-scrolling",
            "vertical-align",
          ],
        },
        {
          "emptyLineBefore": "never",
          "order": "flexible",
          "properties": [
            "border",
            "border-block-end",
            "border-block-end-color",
            "border-block-end-style",
            "border-block-end-width",
            "border-block-start",
            "border-block-start-color",
            "border-block-start-style",
            "border-block-start-width",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-bottom-style",
            "border-bottom-width",
            "border-collapse",
            "border-color",
            "border-image",
            "border-image-outset",
            "border-image-repeat",
            "border-image-slice",
            "border-image-source",
            "border-image-width",
            "border-inline-end",
            "border-inline-end-color",
            "border-inline-end-style",
            "border-inline-end-width",
            "border-inline-start",
            "border-inline-start-color",
            "border-inline-start-style",
            "border-inline-start-width",
            "border-left",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-radius",
            "border-right",
            "border-right-color",
            "border-right-style",
            "border-right-width",
            "border-spacing",
            "border-style",
            "border-top",
            "border-top-color",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-top-style",
            "border-top-width",
            "border-width",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "background",
            "background-attachment",
            "background-blend-mode",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-repeat",
            "background-size",
            "box-shadow",
          ],
        },
        {
          "emptyLineBefore": "never",
          "order": "flexible",
          "properties": [
            "color",
            "font",
            "font-family",
            "font-size",
            "font-style",
            "font-weight",
            "line-height",
            "text-align",
            "text-decoration",
            "text-transform",
            "text-indent",
            "text-overflow",
            "white-space",
            "word-break",
            "word-wrap",
            "text-rendering",
            "font-smoothing",
            "letter-spacing",
          ],
        },
        {
          "emptyLineBefore": "never",
          "order": "flexible",
          "properties": [
            "transform",
            "transform-origin",
            "transform-box",
            "transform-style",
            "opacity",
            "visibility",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",
            "animation",
            "animation-delay",
            "animation-direction",
            "animation-duration",
            "animation-fill-mode",
            "animation-iteration-count",
            "animation-name",
            "animation-play-state",
            "animation-timing-function",
            "will-change",
            "perspective",
          ],
        },
        {
          "emptyLineBefore": "never",
          "order": "flexible",
          "properties": [
            "cursor",
            "pointer-events",
            "filter",
          ],
        },
      ],
      {
        "unspecified": "bottom",
      },
    ],
  },
};
