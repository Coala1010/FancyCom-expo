module.exports = {
  "stories": [
    '../storybook/stories/Button/Button.stories.mdx',
    "../storybook/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y'
  ]
}