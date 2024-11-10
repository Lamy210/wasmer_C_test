const express = require('express');
const app = express();
const path = require('path');

// COEP と COOP のヘッダーを設定するミドルウェア
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

// 静的ファイルを提供
app.use(express.static(path.join(__dirname, 'public')));

// favicon.ico のリクエストを処理
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// サーバーの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`サーバーがポート ${PORT} で起動しました`);
});
