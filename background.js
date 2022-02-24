chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ mode });
  console.log('Default mode set to ' + mode);
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    chrome.storage.sync.get('mode', ({ mode }) => {
      if (mode === 'blockAll') {
        console.log('Running block all');
      } else if (mode === 'acceptAll') {
        console.log('Running accept all');
      }
    });
  }
})
