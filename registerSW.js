if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pwa-starter/sw.js', { scope: '/pwa-starter/' })})}