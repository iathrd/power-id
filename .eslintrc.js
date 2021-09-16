module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      "eslint-import-resolver-custom-alias":{
       "alias":{
          "@pages": "./src/pages",
          "@components": "./src/components",
          "@configs": "./src/configs",
          '@hooks' : "./src/hooks",
          "@utils": "./src/utils"
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      }
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "max-len": ["warn", { "code": 100 }],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-default-props": [2, { "ignoreCase": true }],
    "react/jsx-sort-props": [2, { "ignoreCase": true }],
    "no-console": 2,
    "no-trailing-spaces": 2,
    "object-curly-spacing": [2, "always", { "arraysInObjects": false }],
    "react/jsx-key": 2,
    "react/jsx-max-depth": [0, { "max": 5 }],
  },
};
