# <project-name>

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
yarn build-image <会执行两个命令yarn build && docker build -t <image-name>:latest ./docker>
```

### 修改镜像tag
```
docker tag <image-name>:latest <image-name>:<version>
```

### 将镜像推送到私有仓库
```
docker push <image-name>:<version>
```

### 从私有仓库拉取指定版本镜像
```
docker pull <image-name>:<version>
```

### 将镜像启动为容器
```
docker run --name=<container-name> --restart=always -d -p <front-port>:80 -e LOCATION='\/<prefix>' -e PROXY_PASS='http:\/\/<rest-serve-ip>:<rest-serve-port>' <image-name>:<version>
```