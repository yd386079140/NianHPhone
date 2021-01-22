# 设置基础镜像
FROM nginx
# 将dist文件中的内容复制到
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo 'echo init ok!!'