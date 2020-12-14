/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2020-12-10 16:31:16
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-12-11 17:11:18
 */
module.exports = [
  {
    name: 'page-title',
    type: 'input',
    message: '标题',
    default: '',
    group: '基础设置',
    description: '显示在浏览器的标题栏或标签页上。它只可以包含文本，若是包含有标签，则包含的任何标签都不会被解释。',
    link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element'
  },
  {
    name: 'repository',
    type: 'input',
    message: '仓库地址',
    default: 'http://192.168.93.172',
    group: 'Docker相关'
  },
  {
    name: 'project-name',
    type: 'input',
    message: '项目名称',
    default: '',
    group: 'Docker相关'
  },
  {
    name: 'image-name',
    type: 'input',
    message: '镜像名称',
    default: '',
    group: 'Docker相关'
  },
  {
    name: 'element-ui',
    type: 'confirm',
    message: '启用element-ui',
    default: true,
    group: '组件相关',
    description: '一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
    link: 'https://element.eleme.io/#/zh-CN/component/installation'
  },
  {
    name: 'vue-g2',
    type: 'confirm',
    message: '启用图表组件',
    default: false,
    group: '组件相关',
    description: '基于 Vue 和 AntV/G2 的可视化组件库📈',
    link: 'https://blog.peiwen.fun/vue-g2/#/'
  },
  {
    name: 'vue-mapboxgl-components',
    type: 'confirm',
    message: '启用地图组件',
    default: false,
    group: '组件相关',
    description: '基于 Vue 和 mapbox-gl 的地理信息可视化组件库',
    link: 'https://blog.peiwen.fun/vue-mapboxgl-components/#/'
  },
  {
    name: 'pre-commit-lint',
    type: 'confirm',
    message: '[pre-commit]启用代码检查',
    default: true,
    group: 'Git钩子',
    description: '提交代码时触发，检查代码是否符合规范',
    link: 'https://standardjs.com/'
  },
  {
    name: 'validate-commit-msg',
    type: 'confirm',
    message: '[commit-msg]启用日志格式检查',
    default: true,
    group: 'Git钩子',
    description: '提交代码时触发，检查Commit是否符合规范',
    link: 'https://blog.peiwen.fun/2018/09/28/git_commit_rules/#more'
  }
]