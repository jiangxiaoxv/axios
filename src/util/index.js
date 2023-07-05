// 自定义实现axios
function myAxios({ url, method = 'get', params = {}, data = {} } = options) {
  return new Promise((resolve, reject) => {
    // 执行移步ajax请求
    // 创建xhr对象
    const request = new XMLHttpRequest();
    request.open(method, url, true); // 异步请求
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 299) {
          console.log('response data', this.statusText);
          const response = {
            data: JSON.parse(this.response),
            status: this.status,
            statusText: this.statusText,
          };
          resolve(response);
        } else {
          reject(new Error(this.status));
        }
      }
    };
    if (method === 'get') {
      request.send();
    } else if (method === 'post') {
      request.setRequestHeader(
        'Content-Type',
        'application/json;charset=utf-8'
      );
      request.send(JSON.stringify(data));
    }

    // 打开链接（初始化请求，没有发请求）
    // 发送请求
    // 如果执行成功了，调用resolve
    // 失败了，调用reject
  });
}
