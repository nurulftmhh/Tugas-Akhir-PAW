const fromCurrencyOptions = document.querySelector('.from-currency select');
const toCurrencyOptions = document.querySelector('.to-currency select');
const fromAmount = document.querySelector('.from-amount input');
const fromResult = document.getElementById('from-result');
const toResult = document.getElementById('to-result');
const convertBtn = document.getElementById('convert-btn');
const baseURL = 'https://api.exchangerate.host/'

fromAmount.addEventListener('keyup', function(){
    let amount = Number(this.value);
    if(!amount) fromAmount.style.borderColor = "#de3f44";
    else fromAmount.style.borderColor = "#c6c7c9";
});

convertBtn.addEventListener('click', () => {
    let fromCurrency = fromCurrencyOptions.value;
    let toCurrency = toCurrencyOptions.value;
    let fromAmt = Number(fromAmount.value);
    if(fromAmt) getConvertedData(fromCurrency, toCurrency, fromAmt);
});

async function getConvertedData(from, to, amount){
    const API_URL = baseURL+`convert?from=${from}&to=${to}&amount=${amount}`;
    const result = await fetch(API_URL);
    const data = await result.json();
    displayConvertedData(from, to, amount, data.result);
}

function displayConvertedData(fromCurrency, toCurrency, fromAmt, toAmt){
    fromResult.innerHTML = `${fromAmt.toFixed(2)} ${fromCurrency}`;
    toResult.innerHTML = `${toAmt.toFixed(2)} ${toCurrency}`;
}
