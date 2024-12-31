// Mở SidePanel khi click vào icon tiện ích
chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
})

// Mở trang welcome.html khi tiện ích được cài đặt
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        chrome.tabs.create({ url: "welcome.html" });
    }
});

// Mở trang feedback.html khi tiện ích bị gỡ cài đặt
chrome.runtime.setUninstallURL("https://chatvn.org/extension/uninstall.html");