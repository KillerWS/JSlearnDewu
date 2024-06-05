var Parse = require('parse');

// 创建一个 HTML 字符串
const htmlString = '<div><h1>Hello, World!</h1><p>This is a paragraph.</p></div>';

// 创建一个 DOMParser 实例
let domparser = new DOMParser();

// 使用 parseFromString 方法将字符串解析为 HTML 树
const htmlTree = parser.parseFromString(htmlString, 'text/html');

// 输出解析后的 HTML 树
console.log(htmlTree);
