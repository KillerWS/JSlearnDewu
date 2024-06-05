function deepClone(value){
    if(value !== 'object' || value ===null){
        return value;
    }
    const clone = Array.isArray(value) ? [] : {};
    for(const key in value){
        
        clone[key] = deepClone(value[key]);
       
    }
    return clone;

}

obj={a:1,b:2,c:"CC",d:{d1:"Xdd"}, arr:[1,2,"dsa",{ss:11}]}

const newObj = deepClone(obj);
console.log(newObj)

obj2={arr:[1,2,"dsa",{ss:11}]}

for(const key in obj2['arr']){
        
    console.log(key);
   
}




