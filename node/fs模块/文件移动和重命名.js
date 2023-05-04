const fs = require('fs');

// 异步移动
fs.rename('./论语.txt', './mkbk/论语.txt', (err) => {
  if (err) throw err;
  console.log('移动完成');
});

// 同步移动
fs.renameSync('./论语.txt', './mkbk/论语.txt');
