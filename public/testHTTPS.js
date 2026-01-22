let xhr = new XMLHttpRequest();

xhr.open("GET", 'https://node-testing-three.vercel.app/api/users');

xhr.onload = function(params, otherparams, extraparams) {
    console.log(params);
    console.log(otherparams);
    console.log(extraparams);
}
xhr.send();
