module.exports = {
  configureWebpack: () => {
    return {
      externals: ["element-ui", "lodash"],
    };
  },
};
