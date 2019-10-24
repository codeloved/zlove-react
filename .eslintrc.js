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
    "import/no-extraneous-dependencies": "off", // 关闭依赖位置检测(devDependencies和dependencies)
    "react/jsx-props-no-spreading": "off", // 允许属性展开
    "react/no-array-index-key": "off", // 允许index为key
    "no-confusing-arrow": ["error", {"allowParens": true}], // 允许箭头函数使用()包含,才能使用条件语句等
    "no-restricted-syntax": "off",
    "no-prototype-builtins": "off",
    "import/prefer-default-export": "off",
    "arrow-parens": ["error", "as-needed"],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/prefer-stateless-function": "off",
  },
  settings: {
    "import/resolver": {
      "alias": {
        "map": [
          ["@", "./src"]
        ],
        "extensions": [".js", ".jsx", ".json"]
      }
    }
  },
};
