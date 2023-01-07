module.exports = (config, context) => ({
  ...config,
  experiments: {
    ...config.experiments,
    outputModule: true,
    topLevelAwait: true,
  },
  output: {
    path: config.output.path,
    chunkFormat: 'module',
    library: {
      type: 'module',
    },
  },
})
