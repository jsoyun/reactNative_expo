[
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
    alias: {
      tests: ['./tests/'],
      "@components": "./src/components",
    }
  }
]