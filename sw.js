// sw.js

// 1. 【重要】修改版本号，触发浏览器重新缓存
const CACHE_NAME = 'xmas-tree-v1'; 

const ASSETS_TO_CACHE = [
    './',                 
    './index.html',       
    './manifest.json',    
    './icon-192.png',     
    './icon-512.png',
    // 如果您下载了本地模型，记得加上路径（假设它还在根目录）
    './hand_landmarker.task', 

    // --- 2. 修改歌曲路径 (加上 songs/ 前缀) ---
    "./songs/Ne-Yo - Because Of You.m4a",
    "./songs/Harryan Yoonsoan - Christmas Magic.m4a",
    "./songs/张杰 - 第一夫人.m4a",
    "./songs/ItsNoah - Mistletoe.m4a",
    "./songs/张杰 - 秋天的童话.m4a",

    // --- 3. 修改图片路径 (加上 photos/ 前缀) ---
    // 请列出 photos 文件夹里所有需要显示的图片
    './photos/1.jpg',
    './photos/2.jpg',
    './photos/3.jpg',
    './photos/4.jpg',
    './photos/5.jpg',
    './photos/6.jpg',
    './photos/7.jpg',
    './photos/8.jpg',
    './photos/9.jpg',
    './photos/10.jpg',
    './photos/11.jpg',
    './photos/12.jpg',
    './photos/13.jpg',
    './photos/14.jpg',
    './photos/15.jpg',
    './photos/16.jpg',
    './photos/17.jpg',
    './photos/18.jpg',
    './photos/19.jpg',
    './photos/20.jpg',
    './photos/21.jpg',
    './photos/22.jpg',
    './photos/23.jpg',
    './photos/24.jpg',
    './photos/25.jpg',
    './photos/26.jpg',
    './photos/27.jpg',
    './photos/28.jpg',
    './photos/29.jpg',
    './photos/30.jpg',
    './photos/31.jpg',
    './photos/32.jpg',
    './photos/33.jpg',
    './photos/34.jpg',
    './photos/35.jpg',
    './photos/36.jpg',
    './photos/37.jpg',
    './photos/38.jpg',
    './photos/39.jpg',
    './photos/40.jpg',
    './photos/41.jpg',
    './photos/42.jpg',
    './photos/43.jpg',
    './photos/44.jpg',
    './photos/45.jpg',
    './photos/46.jpg',
    './photos/47.jpg'
    // ... 如果有更多图片，请一一列出
];

// 下面的代码保持不变
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all assets');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
