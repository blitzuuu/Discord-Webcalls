// Hide most Discord UI except voice controls
function hideUI() {
  // Hide sidebar, chat, etc. (fragile selectors!)
  const selectors = [
    '[class*="sidebar"]',
    '[class*="chatContent"]',
    '[class*="panels-"]',
    '[class*="container-"][class*="membersWrap"]',
    '[class*="title-"]',
    '[class*="searchBar"]'
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.style.display = "none");
  });
  // Optionally, tweak styles for voice panel
  const voicePanel = document.querySelector('[class*="voiceUserPanel-"]');
  if (voicePanel) voicePanel.style.width = "100vw";
}

// Try to click join/leave buttons
function simulateVoiceAction(command) {
  if (command === "join-voice") {
    // Try to find and click the 'Join Voice' button
    const joinBtn = [...document.querySelectorAll('button')]
      .find(btn => btn.textContent.toLowerCase().includes("join voice"));
    if (joinBtn) joinBtn.click();
  }
  if (command === "leave-voice") {
    const leaveBtn = [...document.querySelectorAll('button')]
      .find(btn => btn.textContent.toLowerCase().includes("disconnect"));
    if (leaveBtn) leaveBtn.click();
  }
}

window.addEventListener("DOMContentLoaded", hideUI);
window.addEventListener("load", hideUI);

// Listen for hotkey messages from background
window.addEventListener("message", (e) => {
  if (e.data?.type === "DISCORD_VOICE_COMMAND") {
    simulateVoiceAction(e.data.command);
  }
});