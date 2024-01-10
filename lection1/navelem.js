// console.log(document.documentElement); // тег <html>
// console.log(document.body); // тег <body>
// console.log(document.head); // тег <head>

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
console.log(document.body.children);

// // Сделаем в переборе коллекции вывод проверки, является ли он div
// for (let value of document.body.children) {
//     console.log(value.localName === 'div' ? "Это DIV" : "Это не DIV");
// }

for (let value of document.body.childNodes) {
    console.log(value.nodeType);
}
// https://dom.spec.whatwg.org/#node

for (let value of document.body.childNodes) {
    console.log(value.nodeValue);
}