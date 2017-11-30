chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			// check for ad every second
			setInterval(() => {
				// cache skip button 
				const skipBtns = [
					document.querySelector('.videoAdUiSkipButton'),
					document.querySelector('.close-button')
				];
				// click skip button if it exists
				for (let btn of skipBtns) {
					if (btn) {
						btn.click();
					}
				}
			}, 1000);
		}
	}, 10);
});