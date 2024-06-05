Array.prototype.myMap = function(callback) {
    const resultArray = []; // 用于存储回调函数的返回值
    for (let i = 0; i < this.length; i++) {
        console.log(this[i] +" "+i+" "+this)
      if (this.hasOwnProperty(i)) { // 检查是否为数组自身的属性，而不是原型链上的属性
        // console.log(callback(this[i], i, this))
        resultArray.push(callback(this[i], i, this)); // 将回调函数的返回值添加到结果数组中
      }
    }
    return resultArray; // 返回新的数组
  };
  
  // 测试
  const array1 = [1, 4, 9, 16];
  const map1 = array1.myMap(x => x * 2);
  console.log(map1); // 输出: [2, 8, 18, 32]



// Array.prototype.myMap = function(callback){
//     const resultArray = []; //用于存储会掉函数的返回值
    
//     for(let i = 0; i< this.length;i++){
//         if(this.hasOwnProperty(i)){
//             //hasOwnProperty 检查是否为数组自身的属性，而不是圆形链上的属性
//             resultArray.push(callback(this[i], i .this)) 
//         }
//     }
    

//     return resultArray;

// }