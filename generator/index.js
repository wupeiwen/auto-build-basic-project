/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2020-12-10 11:02:58
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-12-14 09:22:47
 */
module.exports = (api, options, rootOptions) => {
  // --------------------------
  // package.json相关配置
  let package = {
    scripts: {
      "build-image": `vue-cli-service build  &&  docker build -t ${options['repository']}/${options['project-name']}/${options['image-name']}:latest ./docker`
    },
    dependencies: {
      "axios": "^0.21.0"
    },
    devDependencies: {
      "compression-webpack-plugin": "^1.1.12",
      "node-sass": "^4.14.1",
      "sass-loader": "^8.0.2",
      "ghooks": "^2.0.4"
    },
    config: {
      "ghooks": {}
    }
  }
  if (options['element-ui']) {
    package.dependencies['element-ui'] = "^2.14.1"
  }
  if (options['vue-g2']) {
    package.dependencies['@antv/g2'] = "3.5.15"
    package.dependencies['@antv/data-set'] = "0.9.6"
    package.dependencies['vue-g2'] = "^2.0.14"
  }
  if (options['vue-mapboxgl-components']) {
    package.dependencies['vue-mapboxgl-components'] = "^1.2.14"
  }
  if (options['pre-commit-lint']) {
    package.config.ghooks['pre-commit'] = "vue-cli-service lint"
  }
  if (options['validate-commit-msg']) {
    package.devDependencies['validate-commit-msg'] = "^2.14.0"
    package.config.ghooks['commit-msg'] = "validate-commit-msg"
  }
  api.extendPackage(package)
  // --------------------------
  // main.js 相关配置
  let imports = [`import router from './router/index'`,`import store from './store/index'`,`import '@/components/regist.js'`]
  if (options['vue-g2']) {
    imports.push(`import 'vue-g2'`)
  }
  if (options['vue-mapboxgl-components']) {
    imports.push(`import 'vue-mapboxgl-components'`)
    imports.push(`import 'vue-mapboxgl-components/lib/vue-mapboxgl-components.css'`)
  }
  if (options['element-ui']) {
    imports.push(`import ElementUI from 'element-ui'`)
    imports.push(`import 'element-ui/lib/theme-chalk/index.css'`)
  }
  api.injectImports(api.entryFile, imports)
  api.afterInvoke(() => {
    const { EOL } = require('os')
    const fs = require('fs')
    const contentMain = fs.readFileSync(api.resolve(api.entryFile), { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g)
    const elementIndex = lines.findIndex(line => line.match(/'element-ui\/lib\/theme-chalk\/index.css'/))
    lines[elementIndex] = lines[elementIndex] + `${EOL}Vue.use(ElementUI)`
    const renderIndex = lines.findIndex(line => line.match(/render/))
    lines[renderIndex] = `  router,${EOL}  store,${EOL}` + lines[renderIndex]
    fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
  })
  // ---------------------------

  api.render("./template/")
}