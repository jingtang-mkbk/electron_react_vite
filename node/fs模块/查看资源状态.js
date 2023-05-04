const fs = require('fs');

// 异步获取状态
fs.stat('./观书有感·其一.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 同步获取状态
const data = fs.statSync('./观书有感·其一.txt');
console.log(data);
