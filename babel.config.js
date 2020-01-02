module.exports = {
  presets: [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["> 1%", "last 2 version", "ie >= 10"],
      },
      "useBuiltIns": "entry"
    }]
  ],
  plugins: [
    "@babel/plugin-transform-object-assign",
    ["@babel/plugin-transform-spread", {
      "loose": true
    }]
  ]
};
