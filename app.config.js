module.exports = {
  name: "all-taxi-app",
  slug: "all-taxi-app",
  version: "1.0.0",
  platforms: ["ios", "android", "web"],
  extra: {
    eas: {
      projectId: "c79f1370-34dc-41d1-a99c-e8b3d7e7b36a",
    },
  },
  web: {
    bundler: "metro",
    publicPath: "/all-taxi-app/",
  },
};
