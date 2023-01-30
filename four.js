import * as React from 'react';
import './style.css';

export default function App() {
  const [boldText, setBoldText] = React.useState('' as any);
  const [res, setRes] = React.useState('' as any);

  let speChar: any = '*_~`';
  let openingTagsList: any = {
    '*': '<b>',
    _: '<i>',
    '*_': '<b><i>',
    '_*': '<b><i>',
    '`': '<strike>',
    '*`': '<b><strike>',
    '*_`': '<b><i><strike>',
  };
  let closingTagsList: any = {
    '*': '</b>',
    _: '</i>',
    '*_': '</b></i>',
    '_*': '</b></i>',
    '`': '</strike>',
    '*`': '</b></strike>',
    '*_`': '</b></i></strike>',
  };
  let openingTagsListKeys = Object?.keys(openingTagsList);
  let closingTagsListKeys = Object?.keys(closingTagsList);

  function strFont(e) {
    let str = e.target.value;
    let matchedSplChar = '';

    for (let i = 0; i < str.length; i++) {
      if (matchedSplChar.indexOf(str[i]) === -1) {
        if (speChar.indexOf(str[i]) !== -1) matchedSplChar += str[i];
      }
    }

    if (matchedSplChar as any) {
      let FL = str[str.indexOf(matchedSplChar,0)];
      let SL = str[str.indexOf(matchedSplChar, 1)];

      let startingTags;
      let closingTags;

      for (let key in openingTagsListKeys) {
        if (matchedSplChar === openingTagsListKeys[key]) startingTags = openingTagsList[matchedSplChar];
      }
      for (let key in closingTagsListKeys) {
        if (matchedSplChar === closingTagsListKeys[key]) closingTags = closingTagsList[matchedSplChar];
      }

      if (FL && SL && FL == SL) {
        let replaceTags = str.replace(FL, startingTags).replace(SL, closingTags);

        let divTag = document.createElement('div');
        divTag.innerHTML = replaceTags;
        let htmlObj: any = divTag.firstChild;

        console.log('dddddd', divTag.firstElementChild);
        if (htmlObj.innerHTML) setRes(htmlObj);

        setBoldText(e.target.value);
      } else {
        setBoldText(e.target.value);
      }
    } else {
      setBoldText(e.target.value);
    }
    console.log(res, str);
  }

  document.onkeyup = function (e) {
    if (e.ctrlKey && e.which == 66) {
      setBoldText('**');
    } else if (e.ctrlKey && e.which == 73) {
      setBoldText('__');
    } else {
      setBoldText(boldText);
    }
  };

  return (
    <div>
      <input type="text" value={boldText || ''} onChange={(e) => strFont(e)} />
      {res ? <res.tagName>{res?.innerHTML}</res.tagName> : ''}
    </div>
  );
}
