// Minimal UI: Hide Discord UI except voice controls (fragile, may need tweaking)
function hideUI() {
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

function simulateVoiceAction(command) {
  if (command === "join-voice") {
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

window.addEventListener("message", (e) => {
  if (e.data?.type === "DISCORD_VOICE_COMMAND") {
    simulateVoiceAction(e.data.command);
  }
});
