// @ts-check
// @ts-ignore eslint-plugin-tailwindcss is not typed
import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/no-v-html': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'vue/no-unused-vars': 'warn',
      'vue/multi-word-component-names': 'off',
    },
  },
).prepend(
  tailwind.configs['flat/recommended'],
)
