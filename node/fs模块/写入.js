const fs = require('fs');

// 异步写入
fs.writeFile('./论语.txt', '三人行，必有我师焉', (err) => {
  if (err) {
    console.log('打印失败');
    return;
  }
  console.log('写入成功');
});

// 同步写入
try {
  fs.writeFileSync('./论语.txt', '三人行，必有我师焉');
} catch (err) {
  console.log(err);
}

// 追加写入异步
fs.appendFile('./论语.txt', '\r\n择其善者而从之，其不善者而改之。', (err) => {
  if (err) throw err;
  console.log('追加成功');
});

// 追加写入同步
fs.appendFileSync('./论语.txt', '\r\n温故而知新, 可以为师矣');

// 流式写入
const ws = fs.createWriteStream('./观书有感·其一 .txt');

ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');
ws.end();
