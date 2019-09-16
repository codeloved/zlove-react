module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
          ie: "11"
        },
        //usage不需要在入口的开头引入整个pollfill,会根据项目使用且targets缺失的引入相应的pollfill
        useBuiltIns: "usage",
        // @babel/polyfill依赖core-js手动升级到@3
        corejs: 3
      },
    ],
    [
      "@babel/preset-react"
    ]
  ];
  const plugins = [
    ["@babel/plugin-proposal-decorators",  { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
    ["@babel/plugin-syntax-dynamic-import"]
  ];

  return {
    presets,
    plugins
  };
}