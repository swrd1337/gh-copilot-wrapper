const webview = document.querySelector('webview');
const backButton = document.getElementById('back-button');

// Wait for the webview to be ready
webview.addEventListener('dom-ready', () => {
  updateBackButton();
});

// Update button state when navigation happens
webview.addEventListener('did-navigate', () => {
  updateBackButton();
});

webview.addEventListener('did-navigate-in-page', () => {
  updateBackButton();
});

// Back button click handler
backButton.addEventListener('click', () => {
  if (webview.canGoBack()) {
    webview.goBack();
  }
});

// Update button state based on navigation history
function updateBackButton() {
  backButton.disabled = !webview.canGoBack();
}

// Initial button state
updateBackButton();
