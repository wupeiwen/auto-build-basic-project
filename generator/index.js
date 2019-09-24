module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      "build-image": "vue-cli-service build  &&  docker build -t <image-name>:latest ./docker"
    },
    dependencies: {
      "axios": "^0.18.0",
      "element-ui": "^2.7.0",
      "node-sass": "^4.11.0",
      "sass-loader": "^7.1.0",
      "scss": "^0.2.4",
    },
    devDependencies: {
      "compression-webpack-plugin": "^1.1.12",
    }

  });

  api.render("./files/");

}