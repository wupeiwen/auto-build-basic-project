<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2020-12-10 11:02:58
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-12-11 11:48:31
-->
# <%= options["page-title"] %>

### 安装依赖
```
yarn install
```

### 开发环境运行
```
yarn serve
```

### 构建生产环境代码
```
yarn build
```

### 基于xx分支构建镜像
```
<!-- 切换xx分支 -->
git checkout <分支名称>
<!-- 安装依赖 -->
yarn install
<!-- 构建镜像 -->
yarn build-image <会执行两个命令yarn build && docker build -t <%= options["repository"] %>/<%= options["project-name"] %>/<%= options["image-name"] %>:latest ./docker>
```

### 修改镜像tag
```
docker tag <%= options["repository"] %>/<%= options["project-name"] %>/<%= options["image-name"] %>:latest <%= options["repository"] %>/<%= options["project-name"] %>/<%= options["image-name"] %>:<version>
```

### 将镜像推送到私有仓库
```
docker push <%= options["repository"] %>/<%= options["project-name"] %>/<%= options["image-name"] %>:<version>
```

### 从私有仓库拉取指定版本镜像
```
docker pull <%= options["repository"] %>/<%= options["project-name"] %>/<%= options["image-name"] %>:<version>
```

### 将镜像启动为容器
```
docker run --name=<container-name> --restart=always -d -p <front-port>:443 -e LOCATION='\/<prefix>' -e PROXY_PASS='http:\/\/<rest-serve-ip>:<rest-serve-port>' <%= options["repository"] %>/<%= options["project-name"] %>/<%= options["image-name"] %>:<version>
```