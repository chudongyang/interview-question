let path = require('path');
function getEntry(globPath, pathDir) {  
  var obj = globPath.split(",");
  console.log(obj);
  var files = [];
  for (var i in obj){
      var file = glob.sync(obj[i]);
      for (var j in file){
          files.push(file[j]); 
      }
  } 
  var entries = {},
      entry, dirname, basename, pathname, extname,titie;
  for (var i = 0; i < files.length; i++) {
      entry = files[i];
      dirname = path.dirname(entry);// 返回一个路径的目录名称
      extname = path.extname(entry);//extname 扩展名 .js
      basename = path.basename(entry, extname);//返回一个路径中最低一级目录名称
      pathname = path.join(dirname, basename);
      pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname;
      titie = pathname.substr(3);
      entries[titie] = './' + entry;
  }
  return entries;
}
let entries = getEntry('src/active/*.js,src/finance/*.js');
console.log(entries);