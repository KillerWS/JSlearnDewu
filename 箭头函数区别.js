function regularFunction() {
    console.log(this); // this 指向调用时的上下文
  }
  
  regularFunction(); // 在全局上下文中调用

  const arrowFunction = () => {
    console.log(this); // this 指向定义时的上下文
  }
  
  arrowFunction(); // 在全局上下文中调用
  