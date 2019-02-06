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