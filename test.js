function  deepClone(data) {
  const type = judgeType(data);
  let obj;
  if (type === 'array') {
    obj = [];
  } else if (type === 'object') {
    obj = {};
  } else {
// 不再具有下一层次
    return data;
  }
  if (type === 'array') {
    // eslint-disable-next-line
    for (let i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]));
    }
  } else if (type === 'object') {
    // 对原型上的方法也拷贝了....
    // eslint-disable-next-line
    for (const key in data) {
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
}
function  judgeType(obj) {
// tostring会返回对应不同的标签的构造函数
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  };
  // if (obj instanceof Element) {
  //   return 'element';
  // }
  return map[toString.call(obj)];
}

function deepCopy(source) {
  let target ;
  if (Object.prototype.toString.call(source) === '[object Object]') {
    target = {};
  } else if (Object.prototype.toString.call(source) === '[object Array]') {
    target = [];
  } else {
    return source;
  }
  for (let key in source) {
    target[key] = deepCopy(source[key]);
  }
  return target;
}
function Animal(name) {
  this.name = name;
}
let cat = new Animal('cat');
let obj = {str: 'hello', data: new Date(), name: undefined, age: NaN, cat: cat}
console.log(deepClone(obj));
console.log(obj);