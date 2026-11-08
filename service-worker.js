self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // مجرد مستمع فارغ لتفعيل خاصية التثبيت
});
