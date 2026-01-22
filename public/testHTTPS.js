let xhr = new XMLHttpRequest();

xhr.open("GET", 'https://node-testing-three.vercel.app/api/users');

xhr.onload(function(params) {
    console.log(params);
})
xhr.send();
