const customTipButton = document.getElementById('customTip');
const radioButtons = document.getElementsByName('tipAmount');

// Reset radio button check status when custom tip selected
const removeCheckedStatus = () => {
	Array.prototype.forEach.call(radioButtons, (radioButton) => {
		radioButton.checked = false;
	});
};

customTipButton.addEventListener('focus', () => removeCheckedStatus());
