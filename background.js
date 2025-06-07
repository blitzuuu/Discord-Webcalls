chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({url: "https://discord.com/channels/*"}, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.update(tabs[0].id, {active: true});
    } else {
      chrome.tabs.create({url: "https://discord.com/channels/@me"});
    }
  });
});

chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    if (!tabs[0]) return;
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      func: (cmd) => {
        window.postMessage({type: "DISCORD_VOICE_COMMAND", command: cmd}, "*");
      },
      args: [command]
    });
  });
});
