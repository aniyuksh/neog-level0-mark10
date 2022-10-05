const bill = document.querySelector("#bill-amt");
const amountGiven = document.querySelector("#amount");
const checkButton = document.querySelector("#check");
const message = document.querySelector("#error-message")
const returnedNotes = document.querySelector(".available-notes")
const noOfNotes = document.querySelectorAll(".no-of-notes")
const nextButton = document.querySelector('#next')
const availableNotes = [2000,500,100,20,10,5,1];

function calculate(amountToBeReturned){
  for(var i = 0 ; i < availableNotes.length;i++){
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

checkButton.addEventListener("click", function validateBillAndCashAmount(){
  message.style.display = "none";
  if(bill.value>0){
    if(amountGiven.value>=bill.value){
      var amountToBeReturned = amountGiven.value - bill.value;
      calculate(amountToBeReturned);
    }else{
      showMessage("The cash provided has to be equal to or more than the bill amount.")
    }
  }else{
    showMessage("Invalid bill amount");
  }
});


function showMessage(msg){
  message.style.display = "block";
  message.innerText = msg;
}

// nextButton.addEventListener('click', () => {
//   const inputBill = document.querySelector("#bill-amt");
//   billAmount = Number(inputBill.value);
//   checkBillValidation();
// })
