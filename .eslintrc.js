module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',  // 替换掉原始的解析器,原始解析器很多语法不支持
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": "off", // 编辑器已经支持.js结尾文件中写jsx,不需要.jsx结尾了
    "react/prop-types": "off", // 关闭props-types验证
  },
};
