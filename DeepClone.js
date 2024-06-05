
//递归方法

// function deepClone(value){
//     if(typeof value !== 'object' || value === null){
//         return value;
//     }
    
//     const clone = Array.isArray(value) ? [] : {};
//     const clone  = Array.isArray(value) ? [] : {};

//     for(const key in value){
//         clone[key] =deepClone(value[key])
//     }

//     return clone;

// }


// function deepClone(value){
    
//     if(typeof value !== 'object' || value === null){
//         return value;
//     }

//     const clone = Array.isArray() ? [] : {};
//     for(const key in value){
//         clone[key] = deepClone(value[key]);
//     }

//     return clone;
// }

function deepClone(value){
    if(typeof value !== 'object' || value === null){
        return value;
    }

    const clone = Array.isArray(value) ? [] : {};  
    for(const key in value){
        console.log(key)
        clone[key] = deepClone(value[key]);
    }
    return clone;

}

obj={a:1,b:2,c:"CC",d:{d1:"Xdd"}, arr:[1,2,"dsa"]}

const newObj = deepClone(obj);
// console.log(typeof obj.)