function addLargeNumbers(num1, num2) {
    let carry = 0;//进位
    let result = '';
    
    // 从个位开始逐位相加
    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
      const digit1 = i < 0 ? 0 : parseInt(num1[i]);
      const digit2 = j < 0 ? 0 : parseInt(num2[j]);
      const sum = digit1 + digit2 + carry;
      result = (sum % 10) + result;
      carry = sum >= 10 ? 1 : 0;
    }
    
    return result;
  }
  
  // 测试
  const num1 = '125';
  const num2 = '456';
  console.log(addLargeNumbers(num1, num2)); // 输出：111111111011111111100
  

//   for(let i = num1.length - 1, j = num2.length - 1;i >= 0 || j >= 0 || carry > 0; i--, j-- ){
//         const digit1 = i<0 ? 0: parseInt(num1[i]);
//         const digit2 = j < 0 ? 0 : parseInt(num2[j]);
//         const sum = digit1 + digit2 + carry;
//         result = (sum%10)

//   }