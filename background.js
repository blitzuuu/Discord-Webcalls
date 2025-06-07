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