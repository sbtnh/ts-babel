# The problem

Babel 7 doesn't transpile files outside of his root, and to make sure it does, the root of babel must be at the top most folder of the solution. In this case, that means having `babel.config.js` in `/` and installing required packages also in the root of the solution.

[See this article on setting up a monorepo with multiple packages.](https://babeljs.io/docs/en/config-files#monorepos)

## Important bits of code

`webpack.config.js`

```javascript
module: {
  rules: [{
    // Include ts, tsx, js, and jsx files.
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      rootMode: 'upward', // Important! This will look for a babel.config.js in the next parent folder
    }
  }],
}
```

`babel.config.js`

Create a `babel.config.js` at the root of your solution and install required packages. Here's the one from this repo.

```javascript
module.exports = api => { 
  api.cache(false); 
  
  return { 
    babelrcRoots: ['.', './app/*',], 
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread'
    ],
    presets: [
      '@babel/env',
      '@babel/typescript'
    ],
  };
};
```

