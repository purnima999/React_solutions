import * as React from 'react';
import './style.css';

export default function App() {
  const stringInput = 'Purnima123';
  
//   method: 1
  function revserStringNum(stringInput) {
    let extractNum = [];
    let extractString = [];
    stringInput.split('').forEach((x) => {
      if (!isNaN(parseInt(x))) {
        extractNum.push(x);
      } else {
        extractString.push(x);
      }
    });
    let reversedNumStr = extractString
      .join('')
      .concat(extractNum.reverse().join(''));
    return reversedNumStr;
  }
  
//   method:2
  function revserStringNum(stringInput) {
    let extractNum = [];
    let extractString = [];
    const dt = stringInput.split("");
    dt?.filter((x) => !isNaN(x) ? extractNum.push(x) : extractString.push(x));
    let reversedNumStr = extractString.join('').concat(extractNum.reverse().join(''));
    return reversedNumStr;
  }
  console.log(revserStringNum(stringInput));
  
//   method:3
  function revserStringNum(stringInput) {
    let splittedString = stringInput.split('');
    const data = splittedString.filter((y: any) =>!isNaN(y) ? (splittedString.indexOf(y) !== -1 ? y : null) : null).reverse().join('');
    const result = splittedString.filter((x) => (data.indexOf(x) == -1 ? x : null))?.join('').concat(data);
    return result;
  }
  

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
