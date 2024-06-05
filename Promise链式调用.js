// 模拟一个异步操作，比如从服务器获取数据
function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 模拟从服务器获取数据成功
        const data = { username: 'example' };
        resolve(data);
        
        // 模拟从服务器获取数据失败
        // reject('Error: Unable to fetch data from the server');
      }, 2000); // 模拟2秒延迟
    });
  }
  
  // 调用 fetchDataFromServer 函数并处理 Promise 对象
  fetchDataFromServer()
    .then((data) => {
      console.log('Data received:', data);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  