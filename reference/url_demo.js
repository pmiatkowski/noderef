const url = require('url');

const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string&status=300#hash');

// Serialized URL
console.log(myURL);
console.log(myURL.searchParams.get('status'));
console.log(myURL.pathname);
myURL.searchParams.append('abcd', '123');

console.log(myURL.searchParams);

myURL.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});