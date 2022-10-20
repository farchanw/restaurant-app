import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('Service Worker not supported in the browser');
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
  } catch (error) {
    throw new Error('Failed to register service worker');
  }
};

export default swRegister;
