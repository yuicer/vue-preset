const path = require('path')

module.exports = (api, opts, rootOpts)=>{
  api.extendPackage({
    devDependencies: {
      '@vue/cli-plugin-eslint': '^3.1.5'
    }
  })

  api.onCreateComplete(() => {
    require('child_process').spawnSync(
      'vue',
      [
        'invoke',
        '@vue/cli-plugin-eslint',
        // the following 4 lines can be commented out if you need the plugin prompts
        // '--config',
        // 'standard',
        // '--lintOn',
        // 'save,commit'
      ],
      {
        stdio: 'inherit',
        cwd: path.join(process.cwd(), rootOpts.projectName)
      })
  })
}