"use strict";

const propertiesIterator = (values = '', property = '', suffix = '') => (
  values.map((position) => `${property}-${position}${suffix ? `-${suffix}` : ''}`).flat()
);

const logicalProperties = (property, suffix) => propertiesIterator(['block', 'block-start', 'block-end', 'inline', 'inline-start', 'inline-end'], property, suffix);
const tblrProperties = (property, suffix) => propertiesIterator(['top', 'bottom', 'left', 'right'], property, suffix);

const withSuffixes = (property, suffixes) => suffixes.map((suffix) => `${property}-${suffix}`);

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
            "container",
            "container-name",
            "container-type",
          ],
        },
        {
          "emptyLineBefore": "never",
          "order": "flexible",
          "properties": [
            "position",
            "inset",
            ...logicalProperties("inset"),
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
            "clear",
            "vertical-align",

            "grid",
            "grid-area",
            "grid-gap",
            ...withSuffixes("grid", ["auto-rows", "auto-columns", "auto-flow"]),
            "grid-column",
            ...withSuffixes("grid-column", ["start", "end", "gap"]),
            "grid-row",
            ...withSuffixes("grid-row", ["start", "end", "gap"]),
            "grid-template",
            ...withSuffixes("grid-template", ["areas", "columns", "rows"]),

            "gap",
            "row-gap",
            "column-gap",

            "flex",
            ...withSuffixes("flex", ["basis", "direction", "flow", "grow", "shrink", "wrap"]),
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

            'inline-size',
            'max-inline-size',
            'min-inline-size',
            'block-size',
            'max-block-size',
            'min-block-size',

            "padding",
            ...tblrProperties("padding"),
            ...logicalProperties("padding"),
            "margin",
            ...tblrProperties("margin"),
            ...logicalProperties("margin"),

            "overflow",
            ...withSuffixes("overflow", ["x", "y", "scrolling"]),
          ],
        },
        {
          "emptyLineBefore": "never",
          "order": "flexible",
          "properties": [
            "border",
            ...logicalProperties("border"),
            ...logicalProperties("border", "color"),
            ...logicalProperties("border", "style"),
            ...logicalProperties("border", "width"),
            ...tblrProperties("border"),
            ...tblrProperties("border", "color", true),
            ...tblrProperties("border", "style"),
            ...tblrProperties("border", "width"),
            "border-radius",
            "border-start-start-radius",
            "border-start-end-radius",
            "border-end-start-radius",
            "border-end-end-radius",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            ...withSuffixes("border", ["color", "image", "style", "width", "spacing", "collapse"]),
            ...withSuffixes("border-image", ["outset", "repeat", "slice", "source", "width"]),
            "outline",
            ...withSuffixes("outline", ["color", "offset", "style", "width"]),
            "background",
            ...withSuffixes("background", ["attachment", "blend-mode", "clip", "color", "image", "origin", "position", "repeat", "size"]),
            "box-shadow",
          ],
        },
        {
          "emptyLineBefore": "never",
          "order": "flexible",
          "properties": [
            "color",
            "font",
            ...withSuffixes("font", ["display", "family", "size", "stretch", "style", "variant", "weight"]),
            "line-height",
            "text-align",
            "text-decoration",
            ...withSuffixes("text-decoration", ["color", "line", "style", "thickness"]),
            "text-emphasis",
            ...withSuffixes("text-emphasis", ["color", "position", "style"]),
            "text-underline-offset",
            "text-underline-position",
            "text-transform",
            "text-indent",
            "text-justify",
            "text-orientation",
            "text-overflow",
            "text-shadow",
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
            ...withSuffixes("transform", ["origin", "box", "style"]),
            "opacity",
            "visibility",
            "transition",
            ...withSuffixes("transition", ["delay", "duration", "property", "timing-function"]),
            "animation",
            ...withSuffixes("animation", ["delay", "direction", "duration", "fill-mode", "iteration-count", "name", "play-state", "timing-function"]),
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
            "appearance",
          ],
        },
      ],
      {
        "unspecified": "bottom",
      },
    ],
  },
};
