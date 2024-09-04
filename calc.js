

const calculator =(num1, num2, mode) =>{
  if ((num1 !== null && num1 !==undefined ) && (num2 !== null && num2 !==undefined )){
    switch(mode) {
      
      case 'add':
        
        return console.log(num1+num2);
      case 'subtract':
        
        return console.log(num1-num2);
      case 'multiply':
        
        return console.log(num1*num2);
      case 'divide':
        
        return console.log(num1/num2); 
      default:
        return console.log(`invalid mode`) ;
    }     
  }else {
    return console.log(`invalid number(s)`)
  }
}
