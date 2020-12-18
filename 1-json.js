const fs = require('fs');

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Rayn Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
const newData = {
    ...data,
    name: 'Prashant',
    age: 24
}

const newDataJSON = JSON.stringify(newData);
fs.writeFileSync('1-json.json', newDataJSON);

