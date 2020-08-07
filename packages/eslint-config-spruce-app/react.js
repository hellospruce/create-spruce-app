module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "./lib/shared",
    "prettier/react",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-nested-ternary": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [
          {
            char: ">",
            alternatives: ["&gt;"],
          },
          {
            char: "}",
            alternatives: ["&#125;"],
          },
        ],
      },
    ],
  },
};
