module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    scripts: {
      build_dev: 'export IS_DEV=1 && vue-cli-service build'
    },

    // add some npm packages
    dependencies: {
      axios: '^0.18.0',
      'weixin-js-sdk': '^1.3.2',
      jsonp: '^0.2.1'
    }
  })

  /**
   * add plugins
   *
   * see the issue https://github.com/vuejs/vue-cli/issues/2529
   */
  if (opts.useEslint) {
    require('./pluginModules/eslint')(api, opts, rootOpts)
  }
  if (opts.useTypescript) {
    require('./pluginModules/typescript')(api, opts, rootOpts)
  }

  // delete the useless default template within cli-service
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src') || path.startsWith('public'))
      .forEach(path => delete files[path])
  })

  // render the template
  api.render('./template')

  /**
   * render with options
   * if we have many options to handel the file in render function later, we can split it to another template to do it
   */
}
