const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const nextButton = document.querySelector("#btn-next");
const labelCashGiven = document.querySelector("#label-cash-given");
const message = document.querySelector("#error-message");
const table = document.querySelector(".change-table");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1 ];

labelCashGiven.style.display = "none";
cashGiven.style.display = "none";
checkButton.style.display = "none";
table.style.display = "none";

nextButton.addEventListener("click", function(){
    hideMessage();
    if(billAmount.value===""){
        showMessage('Bill amount cannot be null');
    }else if(Number(billAmount.value)<=0){
        showMessage('Bill amount should be greater than 0');
    }else if(Number(billAmount.value) > 0){
        labelCashGiven.style.display = "block";
        cashGiven.style.display = "block";
        checkButton.style.display = "block";
        table.style.display = "none";
    }
    else if(typeof(billAmount.value)===typeof('billAmount')){
        showMessage('Bill Amount should not be a string');
    }
    
});

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
        if(cashGiven.value === ""){
            showMessage('Cash Given cannot be null');
        }else if(Number(cashGiven.value)<=0){
            showMessage('Cash given should be greater than or equal to bill amount');
        }else if(Number(cashGiven.value) >= Number(billAmount.value)){
            var moneyToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            console.log(moneyToBeReturned);
            calculateChange(moneyToBeReturned);
            table.style.display="block";
        }else if(typeof(cashGiven.value)===typeof('cashGiven')){
            showMessage('Cash Given should not be a string');
        }   
}); 

billAmount.addEventListener("click", function hideElements(){
    hideMessage();
    labelCashGiven.style.display = "none";
    cashGiven.style.display = "none";
    checkButton.style.display = "none";
    table.style.display = "none";
    cashGiven.value = "";
    billAmount.value="";
    for( var i=0; i < availableNotes.length; i++ ){
        numberOfNotes[i].innerText = "";
    }

});

cashGiven.addEventListener("click", function hideBelowElements(){
    hideMessage();
    table.style.display = "none";
    cashGiven.value = "";
    for( var i=0; i < availableNotes.length; i++ ){
        numberOfNotes[i].innerText = "";
    }

});

function calculateChange(moneyToBeReturned){
    for( var i=0; i < availableNotes.length; i++ ){
        var noOfNotes = Math.trunc(moneyToBeReturned / availableNotes[i]);
        moneyToBeReturned = moneyToBeReturned % availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes;
    }

}
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg
}

function hideMessage(){
    message.style.display = "none";
}