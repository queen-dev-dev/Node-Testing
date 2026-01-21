const xhr = new XMLHttpRequest();

let Chechs = 0;

let myPromise = new Promise((resolve, reject) => {
    xhr.addEventListener('load', () => {
        console.log("Responded")
        resolve();
    });
    xhr.addEventListener('error', function(error) {
        reject(error);
    })
    xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
    xhr.send();
    Chechs ++;
}).then(function() {
    Chechs = 999;
    console.log("Finished!")
})
.catch((error) => {
    Chechs=0;
    console.log(error.srcElement.status)
})

async function loadPage() {
    console.log('load page')
}