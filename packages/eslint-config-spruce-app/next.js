module.exports = {
  extends: ["./react"],
  globals: {
    React: "writable",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/anchor-is-valid": 0,
  },
};
