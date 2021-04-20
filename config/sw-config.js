module.exports = {
  cache: {
    cacheId: "large-react",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "large-react",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
