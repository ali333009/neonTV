(() => {
  let ready = false;
  window.addEventListener('flutter-first-frame', () => {
    ready = true;
    document.getElementById('loading')?.remove();
  });
  document.getElementById('retry').addEventListener('click', () => location.reload());
  setTimeout(() => {
    if (ready) return;
    document.getElementById('loading-message').textContent =
      'Neon TV is taking longer to load. Check your connection and try again.';
    document.getElementById('retry').hidden = false;
  }, 45000);
  if ('serviceWorker' in navigator && window.isSecureContext) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' })
        .catch((error) => console.warn('Offline app shell could not be prepared.', error));
    });
  }
})();
