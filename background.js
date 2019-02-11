const copyTextToClipboard = text => {
    const copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    document.body.appendChild(copyFrom);  
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.blur();
    document.body.removeChild(copyFrom);
}

chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.query({currentWindow: true, active: true}, (tab) => {
        const pretty = decodeURIComponent(tab[0].url)
        copyTextToClipboard(pretty);
  });
});