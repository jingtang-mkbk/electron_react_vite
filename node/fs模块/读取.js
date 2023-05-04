const fs = require('fs');

// 异步读取
fs.readFile('./论语.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 同步读取
const data = fs.readFileSync('./观书有感·其一 .txt', 'utf-8');
console.log(data);

// 流式读取
const rs = fs.createReadStream('./观书有感·其一 .txt', 'utf-8');
rs.on('data', (val) => {
  console.log(val);
  console.log(val.length);
});
// 读取完毕后, 执行 end 回调
rs.on('end', () => {
  console.log('读取完成');
});
