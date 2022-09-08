// Initialize button with user's preferred color
let changeColorButton = document.getElementById("btn_change_color");

chrome.storage.sync.get("color", ({ color }) => {
  changeColorButton.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColorButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  console.log("Lby!");

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
