module.exports = (api) => {
  api.cache(true);
  
  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [];

  if (process.env.NODE_ENV === 'production') {
    presets.push('minify');
    plugins.push('transform-remove-console');
  }

  return {
    presets,
    plugins,
  };
};
