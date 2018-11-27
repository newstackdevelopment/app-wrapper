var path = require("path");
var webpackConfigModule = require("nwb/lib/createWebpackConfig");
var createBuildConfig = require("nwb/lib/appCommands").createBuildConfig;
var createWebpackConfig = webpackConfigModule.default;
var reactConfig = require("nwb/lib/react");
var nwbConfig = require(process.cwd() + "/nwb.config.js");

function createNwbWebpackConfig() {
  var args = { _: ["build-" + nwbConfig.type] };
  var buildConfig = createBuildConfig(
    args,
    reactConfig(args).getBuildConfig(args)
  );
  delete buildConfig.plugins.html;
  return createWebpackConfig(
    buildConfig,
    {},
    Object.assign(
      {
        babel: {},
        devServer: {},
        karma: {},
        npm: {},
        webpack: {},
        path: path.resolve("nwb.config.js")
      },
      nwbConfig
    )
  );
}

var config = createNwbWebpackConfig();
config.plugins = config.plugins.filter(function(plugin) {
  return !plugin.chunkNames && !(plugin.options && plugin.options.template);
});
process.traceDeprecation = true;
module.exports = {
  webpackConfig: config,
  components: "src/components/**/[A-Z]*.js"
};
