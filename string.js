let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

let txt = "yam, Beans, Rice";
let part = txt.slice(7, 13);
console.log(part);

let str = "Apple, Banana, Kiwi";
let sun = str.substring(7, 13);
console.log(sun)

let sub = "Benz, Toyota, Bmw";
let ssub = str.substr(7, 6);
console.log(ssub)

let rep = "Please visit Microsoft!";
let newText = rep.replace("Microsoft", "W3Schools");

console.log(newText);

let all = "I love cats. Cats are very easy to love. Cats are very popular."
alltxt = all.replaceAll(/Cats/g,"Dogs");

console.log(alltxt);

let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

let smalltext1 = "Hello World!";       
let smalltext2 = smalltext1.toLowerCase();
console.log(smalltext2);

let con1 = "Hello";
let con2 = "World";
let con3 = con1.concat(" ", con2);
console.log(con3);

let trim1 = "      Hello World!      ";
let trim2 = trim1.trim();
console.log(trim2);

let st1 = "     space around     ";
let st2 = st1.trimStart();
console.log(st2)

let en1 = "     Hello World!     ";
let en2 = en1.trimEnd();
console.log(en2);


let pad = "9";
let padded = pad.padStart(4,"x");
console.log(padded)

let enpad = "5";
let enpadded = enpad.padEnd(4,"0");
console.log(enpad)

let at = "Character";
let char = at.charAt(0);
console.log(char)

let code = "Document write";
let codechar = code.charCodeAt(0);
console.log(codechar)

let pro = "HELLO WORLD";
let prop = pro[0];
console.log(prop)

let arr = "Arrange";
const myArr = text.split("a");
console.log(myArr)
