var resetMonitor = false;

function clearDisplay() {
    document.getElementById('display').textContent = 'Enter expression...';
  }

  function appendToDisplay(value) {
    if(document.getElementById('display').textContent == 'Enter expression...' || document.getElementById('display').textContent == 'Error' || document.getElementById('display').textContent == 'NaN'){
      document.getElementById('display').textContent = '';
    }
    if(resetMonitor == false){
      document.getElementById('display').textContent += value;
    }else{
      clearDisplay();
      if(document.getElementById('display').textContent == 'Enter expression...' || document.getElementById('display').textContent == 'Error' || document.getElementById('display').textContent == 'NaN'){
        document.getElementById('display').textContent = '';
      }
      document.getElementById('display').textContent += value;
      resetMonitor = false;
    }
  }

  function calculate() {
    try {
      if( document.getElementById('display').textContent.includes('/0')){
        throw error
      }
      if(document.getElementById('display').textContent.includes('π')){
        document.getElementById('display').textContent = document.getElementById('display').textContent.replace("π","Math.PI");
      }
      if(document.getElementById('display').textContent.includes('e')){
        document.getElementById('display').textContent = document.getElementById('display').textContent.replace("e","Math.E");
      }
      if(document.getElementById('display').textContent.includes('mod')){
        document.getElementById('display').textContent = document.getElementById('display').textContent.replace("mod","%");
      }
      
      document.getElementById('display').textContent = eval(document.getElementById('display').textContent);
      resetMonitor = true;
    } catch (error) {
    document.getElementById('display').textContent = 'Error';
    }
  }

  function negativePositive(){
    let currentValue = document.getElementById('display').textContent;
    if(currentValue == 'Enter expression...' || currentValue == 'Error' || currentValue == 'NaN'){
      document.getElementById('display').textContent = '-';
    }
    else if(currentValue.charAt(0) == "-"){
      document.getElementById('display').textContent = currentValue.substring(1);
    }else{
      document.getElementById('display').textContent = "-" + currentValue;
    }
  }

  function fraction(){
    let currentValue = document.getElementById('display').textContent;
    let intValue = parseInt(currentValue);
    let result = 1/intValue;
    document.getElementById('display').textContent = result;
  }

  function multiply(){
    let currentValue = document.getElementById('display').textContent;
    let intValue = parseInt(currentValue);
    let result = intValue**2;
    document.getElementById('display').textContent = result;
  }

  function appendParenthesis(value){
    let currentValue = document.getElementById('display').textContent;
    if(currentValue == 'Enter expression...' || currentValue == 'Error' || currentValue == 'NaN'){
      document.getElementById('display').textContent = '';
    }
    if(value == 'left'){
      document.getElementById('display').textContent += '(';
    }
    if(value == 'right'){
      document.getElementById('display').textContent += ')';
    }
  }

  function abs(){
    let currentValue = document.getElementById('display').textContent;
    let intValue = parseInt(currentValue);
    let result = Math.abs(intValue);
    document.getElementById('display').textContent = result;
  }

  function tenTimesX(){
    let currentValue = document.getElementById('display').textContent;
    let intValue = parseInt(currentValue);
    let result = 10**intValue;
    document.getElementById('display').textContent = result;
  }

  function log(){
    let currentValue = document.getElementById('display').textContent;
    let intValue = parseInt(currentValue);
    let result = Math.log(intValue);
    document.getElementById('display').textContent = result;
  }

  function ln(){
    let currentValue = document.getElementById('display').textContent;
    let intValue = parseInt(currentValue);
    let result = Math.log(intValue);
    document.getElementById('display').textContent = result;
  }

  function deleteLast() {
    let currentValue = document.getElementById('display').textContent;
    let updatedValue = currentValue.slice(0, -1);
    document.getElementById('display').textContent = updatedValue;
  }
  
  function sqrt(){
    let currentValue = document.getElementById('display').textContent;
    let intValue = parseInt(currentValue);
    let result = Math.sqrt(intValue);
    document.getElementById('display').textContent = result;
  }

  function factorial() {
    let currentValue = document.getElementById('display').textContent;
    let intValue = parseInt(currentValue);
    let result = calculateFactorial(intValue);
    document.getElementById('display').textContent = result;
  }
  
  function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  }
  
  


  // custom config for the MTW app 
  const mtwAppConfig = {
      border: true // app border in the MTW page                    
  }

  ///////////////////////////////////////////////////////
  // implement this functions in order to use private API        
  const sendPrivateApiRequest = async () => {
      // your code here:
      // sendRequestToParent({ cat: 'getAssets' })
  }        

  const acceptPrivateApiResponse = async (data) => {
      // process received data here:
      // console.log(data)
  }

  // use this in order to send on document load
  document.addEventListener('DOMContentLoaded', () => {
      // your code here:
      //sendRequestToParent({ method: 'getAssets' })
  })
src="https://morethanwallet.com/appstore/index.js"