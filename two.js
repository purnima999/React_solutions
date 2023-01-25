import * as React from 'react';
import './style.css';

export default function App() {
  let data = ['j', 'd', 'k', 'e', 'n', 'v', 'g', 'h'];
  let evenI;
  let oddI;
  let total;
  data?.map((x, index) => {
    if (index % 2 == 0) {
      evenI = index;
      evenI += evenI;
    } else {
      oddI = index;
      oddI += oddI;
    }
    total = evenI + oddI;
  });

  if (evenI % 2 == 0 || oddI % 2 == 0 || total % 2 == 0 ) {
    console.log(`sum is even`,evenI,oddI,total);
  } else {
    console.log(`sum is odd`,evenI,oddI,total);
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
