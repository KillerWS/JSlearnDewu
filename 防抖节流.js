


function throttle(func, limit){
    let lastRan;
    let lastFunc;

    return function(){
        const context = this;
        const args = arguments
        if(!lastRan){
            func.aplly(context,args);
            lastRan = Date.now();
        }else{

            clearTimeout(lastFunc);

            lastFunc = setTimeout(()=>{
                //超过时间限制才允许执行
                if(Date.now() - lastRan >= limit){
                    func.aplly(context,args);
                    lastRan = Date.now();
                    
                }
            }, limit-(Date.now() - lastRan))

        }

        if( Date.now() - lastRan >= limit){
            func.aplly(context,args);
            lastRan = Date.now();
        }

    }
}   


//手写节流函数
function throttle(func, limit){
    let lastFunc; //计时器
    let lastRan;    //最后一次运行的时间记录
    return function(){
        let context = this;
        let args = arguments;
        
        if(!lastRan){
            //没执行过
           func.apply(context, lastRan);
           lastRan = Date.now(); 
        }else{
            clearTimeout(lastFunc);
            lastFunc = setInterval(()=>{
                //超过时间才允许执行
                if( Date.now() - lastRan >= limit){
                    func.apply(context, lastRan);
                    lastRan = Date.now(); 
                }
                
            }, limit - (Date.now() - lastRan));
        }

    }
}

//手写防抖函数
function debounce(func, delay){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        let p = setTimeout(()=>{
            func.apply(context, args);
        }, delay)
        
    }
}

