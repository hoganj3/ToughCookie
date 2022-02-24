let blockAll = document.getElementById('blockAll');
let acceptAll = document.getElementById('acceptAll');

document.onload = chrome.storage.sync.get('mode', async ({ mode }) => await handleClick(mode));
blockAll.addEventListener('click', async () => await handleClick('blockAll'));
acceptAll.addEventListener('click', async () => await handleClick('acceptAll'));

async function handleClick(mode) {
  chrome.storage.sync.set({ mode });
  if (mode === 'blockAll') {
    blockAll.classList.add('selected');
    acceptAll.classList.remove('selected');  
  } else {
    acceptAll.classList.add('selected');
    blockAll.classList.remove('selected');  
  }
}
