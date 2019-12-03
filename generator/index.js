module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      "build-image": "vue-cli-service build  &&  docker build -t <image-name>:latest ./docker"
    },
    dependencies: {
      "axios": "^0.18.0",
      "element-ui": "^2.7.0"
    },
    devDependencies: {
      "compression-webpack-plugin": "^1.1.12",
      "node-sass": "^4.12.0",
      "sass-loader": "^8.0.0"
    }

  });

  api.render("./files/");

}