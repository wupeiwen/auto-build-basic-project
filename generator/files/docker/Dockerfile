FROM nginx

# 删除默认http配置
RUN rm /etc/nginx/nginx.conf

# 添加http配置
ADD ./nginx.conf /etc/nginx/nginx.conf

# 删除默认serve配置
RUN rm /etc/nginx/conf.d/default.conf

# 环境变量LOCATION
ENV LOCATION '\/location'

# 环境变量PROXY_PASS
ENV PROXY_PASS 'http:\/\/127.0.0.1:80'

# 添加serve配置
ADD ./default.conf /etc/nginx/conf.d/

# 复制构建后的代码
COPY ./dist  /usr/share/nginx/html/

# 复制config脚本
COPY ./config.sh "/opt/"

# 解决文件可能出现的换行符乱码问题
RUN sed -i 's/\r$//g' "/opt/config.sh"

# 文件赋权
RUN chmod +x "/opt/config.sh"

# 运行config脚本
ENTRYPOINT ["/opt/config.sh"]
