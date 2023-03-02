import * as React from 'react';
import './style.css';
import Test from './test';

export default function App() {
  const [boldText, setBoldText] = React.useState('' as any);
  const [res, setRes] = React.useState('' as any);

  let speChar: any = '*_~`';
  let openingTagsList: any = {
    '*': '<b>',
    _: '<i>',
    '*_': '<b><i>',
    '_*': '<b><i>',
  };
  let closingTagsList: any = {
    '*': '</b>',
    _: '</i>',
    '*_': '</b></i>',
    '_*': '</b></i>',
  };
  let openingTagsListKeys = Object?.keys(openingTagsList);
  let closingTagsListKeys = Object?.keys(closingTagsList);

  function getMarkupFromPseudoMarkdown(currentTarget) {
    let str = currentTarget;
    console.log('str', str);
    setBoldText(str);
    return str?.split(/(\*)/).reduce((matchVal, match, ind, matchList) => {
      if (match === '*') {
        matchVal = `${matchVal}${match}`;
      } else {
        if (matchList[ind - 1] === '*' && matchList[ind + 1] === '*') {
          matchVal = `${matchVal} <b>${match}</b> `;
          setRes(matchVal);
        } else {
          matchVal = `${matchVal}${match}`;
          setRes(matchVal);
        }
      }
      return matchVal;
    });
  }

  function displayCreatedMarkup(e) {
    let currentTarget = e?.target?.value;
    let matchedSplChar = '';

    for (let i = 0; i < currentTarget.length; i++) {
      if (matchedSplChar.indexOf(currentTarget[i]) === -1) {
        if (speChar.indexOf(currentTarget[i]) !== -1)
          matchedSplChar += currentTarget[i];
      }
    }
    if (matchedSplChar === '*') console.log('strstr', currentTarget, e);
    const markup = getMarkupFromPseudoMarkdown(currentTarget);
    document.querySelector('code pre').textContent = markup;
    document.querySelector('output').innerHTML = markup;
  }

  return (
    <div>
      <input
        id="textarea"
        onChange={(e: any) => displayCreatedMarkup(e)}
      ></input>
      <output></output>
      <code>
        <pre></pre>
      </code>
    </div>
  );
}
