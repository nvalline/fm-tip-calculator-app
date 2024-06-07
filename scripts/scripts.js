const billTotalInput = document.getElementById('bill');
const customTipButton = document.getElementById('customTip');
const radioButtons = document.getElementsByName('tipAmount');
const resetButton = document.getElementById('resetButton');
const formInputs = document.querySelectorAll('input');

// let billTotalAmount = 0;
// let tipPercentageAmount = 0;
// let customTipPercentageAmount = 0;
// let numberOfPeople = 0;

const amounts = {
	totalBill: 0,
	tipPercentage: 0,
	numberOfPeople: 0
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
		// console.log('AMOUNT', input.value);
		// console.log('TARGET', input.name);

		switch (input.name) {
			case 'bill':
				amounts.totalBill = parseInt(input.value);
				// billTotalAmount = input.value;
				break;
			case 'tipAmount':
				amounts.tipPercentage = input.value;
				// tipPercentageAmount = input.value;
				break;
			case 'customTip':
				amounts.tipPercentage = parseInt(input.value);
				// customTipPercentageAmount = input.value;
				break;
			case 'count':
				amounts.numberOfPeople = parseInt(input.value);
				// numberOfPeople = input.value;
				break;
			default:
				'0';
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
