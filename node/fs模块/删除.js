const fs = require('fs');

// 异步删除
fs.unlink('./论语.txt', (err) => {
  if (err) throw err;
  console.log('删除成功');
});

// 同步删除
fs.unlinkSync('./观书有感·其一 .txt');
