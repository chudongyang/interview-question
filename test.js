function strCounter(str) {
  if (typeof str !== 'string') {
    throw new Error(`${str} is not a string`);
  }
  let max = 0; 
  let result = '';
  let obj = str.split('').reduce((prev, next) => {
    prev[next] = prev[next] ? prev[next] + 1 : 1;
    return prev;
  }, {})
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      result = key;
    }
  }
  return result;
}
console.log(strCounter('aassssssddddfffff'));