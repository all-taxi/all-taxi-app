module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@hooks": "./src/hooks",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@styles": "./src/styles",
            "@types": "./src/types",
            "@utils": "./src/utils",
            // 필요한 다른 경로들을 여기에 추가
          },
        },
      ],
    ],
  };
};
