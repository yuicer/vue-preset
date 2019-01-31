const path = require('path')

module.exports = (api, opts, rootOpts)=>{
  api.extendPackage({
    devDependencies: {
      '@vue/cli-plugin-typescript': '^3.1.1'
    }
  })

  api.onCreateComplete(() => {
    require('child_process').spawnSync(
      'vue',
      [
        'invoke',
        '@vue/cli-plugin-typescript'
      ],
      {
        stdio: 'inherit',
        cwd: path.join(process.cwd(), rootOpts.projectName)
      })
  })
}