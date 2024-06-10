const billError = document.getElementById('billError');
const billTotalInput = document.getElementById('bill');
const countError = document.getElementById('countError');
const countInput = document.getElementById('count');
const customTipButton = document.getElementById('customTip');
const formInputs = document.querySelectorAll('input');
const radioButtons = document.getElementsByName('tipAmount');
const resetButton = document.getElementById('resetButton');
const tipPerPersonEl = document.getElementById('tipPerPerson');
const totalPerPersonEl = document.getElementById('totalPerPerson');

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

// Calculate Tip Amounts
const calculateTipAmounts = (amounts) => {
	const bill = parseFloat(amounts.totalBill);
	const tipPercentage = parseFloat(amounts.tipPercentage);
	const count = parseInt(amounts.numberOfPeople);

	let tipPerPerson = ((bill * tipPercentage) / count).toFixed(2);
	let totalPerPerson = (bill / count + parseFloat(tipPerPerson)).toFixed(2);

	tipPerPersonEl.innerHTML = tipPerPerson;
	totalPerPersonEl.innerHTML = totalPerPerson;
};

// Display Errors
const displayBillError = () => {
	billError.classList = 'errorText';
	billTotalInput.style.outline = '2px solid var(--clr-alert-red)';
};

const displayCountError = () => {
	countError.classList = 'errorText';
	countInput.style.outline = '2px solid var(--clr-alert-red)';
};

// Hide Errors
const hideBillError = () => {
	billError.classList = 'errorText hidden';
	billTotalInput.style.outline = '2px solid var(--clr-primary-cyan)';
};

const hideCountError = () => {
	countError.classList = 'errorText hidden';
	countInput.style.outline = '2px solid var(--clr-primary-cyan)';
};

// Validate Form Amounts
const validateAmounts = (amounts) => {
	if (amounts.totalBill <= 0) {
		displayBillError();
	} else {
		hideBillError();
	}

	if (
		amounts.totalBill > 0 &&
		(amounts.numberOfPeople <= 0 || !amounts.numberOfPeople)
	) {
		displayCountError();
		return;
	} else {
		hideCountError();
		calculateTipAmounts(amounts);
	}
};

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

		setResetBtnDisabled(amounts);
		validateAmounts(amounts);
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
