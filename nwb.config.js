var path = require("path");
module.exports = {
  type: "react-component",
  npm: {
    esModules: false,
    umd: false
  },
  babel: {
    plugins: [
      ["import", { libraryName: "antd", libraryDirectory: "es", style: true }] // `style: true` for less
    ]
  },
  webpack: {
    rules: {
      "less-rule": {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              modifyVars: {
                //   "@grey-1": "#ffffff",
                //   "@grey-2": "#fafafa",y
                //   "@grey-3": "#f5f5f5",
                //   "@grey-4": "#e8e8e8",
                //   "@grey-5": "#d9d9d9",
                //   "@grey-7": "#8c8c8c",
                //   "@grey-8": "#595959",
                //   "@grey-9": "#262626",
                //   "@grey-10": "#000000",
                //   "@grey-6": "#bfbfbf",
                //   "@primary-color": "@grey-6",
                //   //dow-red
                //   "@dow-red-1": "#ffe6e7",
                //   "@dow-red-2": "#ffa3ab",
                //   "@dow-red-3": "#ff7a8a",
                //   "@dow-red-4": "#ff526c",
                //   "@dow-red-5": "#f5274d",
                //   "@dow-red-6": "#e80033",
                //   "@dow-red-7": "#c20030",
                //   "@dow-red-8": "#9c002c",
                //   "@dow-red-9": "#750025",
                //   "@dow-red-10": "#4f001c",
                //   "@dow-red-primary": "@dow-red-6",

                //   //layout dow red
                "@layout-header-background": "#FFFFFF",
                "@layout-body-background": "#FFFFFF"
                //   "@menu-submenu-bg": "#c20030",
                //   "@menu-item-active-bg": "#ff7a8a",
                //   "@menu-bg": "@dow-red-primary",
                //   "@menu-item-color": "@primary-1",
                //   "@menu-highlight-color": "@primary-10",
                //   //switch component
                //   "@switch-color": "@dow-red-primary",
                //   //tab component
                //   "@tabs-card-active-color": "@dow-red-primary",
                //   "@tabs-active-color": "@dow-red-7",
                //   "@tabs-highlight-color": "@dow-red-primary",
                //   "@tabs-ink-bar-color": "@dow-red-primary",
                //   "@tabs-hover-color": "@dow-red-5"
              },
              javascriptEnabled: true
            }
          }
        ]
      }
    },
    aliases: {
      // Enable use of 'img/file.png' paths in JavaScript and
      // "~images/file.png" paths in stylesheets to require an image from
      // src/images from anywhere in the the app.
      //'img': path.resolve('src/images'),
      // Enable use of require('src/path/to/module.js') for top-down imports
      // from anywhere in the app, to promote writing location-independent
      // code by avoiding ../ directory traversal.
      //'src': path.resolve('src')
    }
    // copy: [
    //   // Copy directory contents to output
    //   { from: "src/images/", to: "lib/images/" }
    // ]
  }
};
