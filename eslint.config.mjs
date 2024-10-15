import bf from '@antfu/eslint-config'

export default bf ({
  jsx: true,
  typescript: true,
  react: true,
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'ts/no-require-imports': 'off',
    'react/no-unstable-context-value': 'off',
    'react-dom/no-dangerously-set-innerhtml': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'node/prefer-global/process': 'off',
    'react/no-create-ref': 'off',
    'react/no-array-index-key': 'off',
  },
})
