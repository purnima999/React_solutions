# React_solutions

#1.
```
input: const data=[{ id: 1, name: "eg", roll:4}, {id:2, name:"eg2",roll:5}, {id: 3, name:"eg3", roll: 9},...];
output: total = [4, 9, 18...]
```

#2. use input array and find the index of the elements, find even index positions and make sum of them, find odd index position and make sum of them, find total of both the sums and see weather it's even or odd?
#[code](https://github.com/purnima999/React_solutions/blob/main/two.js).
```
input:  ['j', 'd', 'k', 'e', 'n', 'v', 'g', 'h'];
output: sum of even value is even 12, sum of add values is odd 14, total of both sum is even 26. 
```

#3. find the number from string and reverse only the number.
```
input: "Purnima123"
output: "Purnima321"
````
#4. Convert the font style on the basis of input values for example: *Hello*: should be bold, _Hello_: should be italic, 
#[code](https://github.com/purnima999/React_solutions/blob/main/four.js).
#[code2](https://github.com/purnima999/React_solutions/blob/main/five.js).
```
input: *Hello Bold* _Hello italic_ `Hello strikethrough` ~Hello monospace~
output: <img width="133" alt="image" src="https://user-images.githubusercontent.com/57531599/215480634-42cd4862-515f-449d-9df3-35f40cfb6efe.png">
```
#5. typecase using map
```
const numbers = ["65", "12", "4", "-0.23", "6.543"];
const newArr = numbers.map(Number)
console.log(newArr) //Array(5)[ 65,12,4,-0.23,6.543 ]
```
#6. remove duplicates 

```
const numbers = [1, 2, 3, 4, 4, 4, 4, 5, 6, 6, 7];
const fruits = ["apple", "pear", "banana", "apple", "apple", "cherry"];

const uniqueNumbers = [...new Set(numbers)];
const uniqueStr = [...new Set(fruits)];
console.log("uniqueNumbers", uniqueNumbers, uniqueStr);

output:
uniqueNumbers
(7) [1, 2, 3, 4, 5, 6, 7]
(4) ["apple", "pear", "banana", "cherry"...]
0:"apple"
1:"pear"
2:"banana"
3:"cherry"
[[Prototype]]:[]
```



