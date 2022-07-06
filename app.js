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
    }else if(Number(billAmount.value)===0){
        showMessage('Bill amount should be greater than 0');
    }
    else{
        labelCashGiven.style.display = "block";
        cashGiven.style.display = "block";
        checkButton.style.display = "block";
        table.style.display = "block";
    }
});

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if(Number(billAmount.value) > 0){
        if(cashGiven.value === ""){
            showMessage('Cash Given cannot be null');
        }
        else{
            if(Number(cashGiven.value) >= Number(billAmount.value)){
                var moneyToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
                calculateChange(moneyToBeReturned);
            }else{
                showMessage('Cash given should be a number which is  greater than or equal to Bill amount');
            }
        }   
    }else{
        showMessage('Bill Amount should be a number which is greater than 0');
    }
}); 

billAmount.addEventListener("click", function hideElements(){
    labelCashGiven.style.display = "none";
    cashGiven.style.display = "none";
    checkButton.style.display = "none";
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