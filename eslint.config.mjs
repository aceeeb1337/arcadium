import pluginAstro from 'eslint-plugin-astro';

export default [
  ...pluginAstro.configs.recommended,
  {
    rules: {
      'astro/no-unused-css-selector': 'warn',
    },
  },
];
