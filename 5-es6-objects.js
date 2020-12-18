// Object property shorthand

const name = 'Prashant';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Bhiwani'
}

console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const { rating = 5, price = 20} = product;
console.log( rating, price);
// const {label, stock, price: newPrice, rating} = product;

// console.log( label, stock, newPrice, rating)