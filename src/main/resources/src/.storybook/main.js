const path = require('path');

module.exports = {
  "stories": [
    //"../src/components/**/**/*.stories.mdx",
    "../components/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    "@storybook/addon-essentials",
  ],

  rules: [
    {
      test: /\.css$/,
      loaders: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }],
      include:  path.resolve(__dirname, '../src'),
    }
  ]
}