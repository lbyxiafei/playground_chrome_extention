// background.js

let green_color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ green_color });
  console.log(
    "Default background color set to %cgreen",
    `color: ${green_color}`
  );
});
