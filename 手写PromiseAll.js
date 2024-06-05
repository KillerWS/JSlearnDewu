const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Promise 1 resolved');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'Promise 2 resolved');
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'Promise 3 resolved');
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log('All promises resolved:', values);
    })
    .catch((error) => {
      console.error('One of the promises was rejected:', error);
    });
