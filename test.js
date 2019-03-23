function deepCopy(source) {
  let target = null;
  if (typeof source === 'object' && source !== null) {
    target = source instanceof Array ? [] : {}
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = deepCopy(source[key]);
      }
    }
  } else {
    target = source;
  }
  return target;
}
let data = [{str: 'hello', hobby: ['movie', 'sing'], fn: function() {}}];

let newObj = deepCopy(data)
console.log(newObj);
