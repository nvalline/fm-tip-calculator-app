const billTotalInput = document.getElementById('bill');
const countInput = document.getElementById('count');
const customTipButton = document.getElementById('customTip');
const radioButtons = document.getElementsByName('tipAmount');
const resetButton = document.getElementById('resetButton');
const formInputs = document.querySelectorAll('input');

let amounts = {
	totalBill: '',
	tipPercentage: '',
	numberOfPeople: ''
};

// Reset radio button check status when custom tip selected
const removeCheckedStatus = () => {
	Array.prototype.forEach.call(radioButtons, (radioButton) => {
		radioButton.checked = false;
	});
};

customTipButton.addEventListener('focus', () => removeCheckedStatus());

// Get input values
Array.prototype.forEach.call(formInputs, (input) => {
	input.addEventListener('input', (e) => {
		switch (input.name) {
			case 'bill':
				amounts.totalBill = input.value;
				break;
			case 'tipAmount':
				amounts.tipPercentage = input.value;
				break;
			case 'customTip':
				amounts.tipPercentage = (input.value / 100).toString();
				break;
			case 'count':
				amounts.numberOfPeople = input.value;
				break;
			default:
				0;
		}

		console.log('AMOUNTS', amounts);

		setResetBtnDisabled(amounts);
	});
});

// Set Reset button disabled
const setResetBtnDisabled = (amounts) => {
	const { totalBill, tipPercentage, numberOfPeople } = amounts;

	if (!totalBill && !tipPercentage && !numberOfPeople) {
		resetButton.disabled = true;
	} else {
		resetButton.disabled = false;
	}
};

// Handle Reset Button click
resetButton.addEventListener('click', () => location.reload());
