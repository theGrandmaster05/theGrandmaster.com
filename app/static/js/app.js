// Trying out service workers

if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js', { scope: './' })
        .then(registration => console.log('Service worker Registered'))
        .catch(error => console.error('Service worker failed to register'));
}

let get  = function(url) {
    return new Promise(function(reject,resolve) {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                let result = xhr.responseText;
                result = JSON.parse(result);
                resolve(result);
            } else {
                reject(xhr);
            }
        };
        xhr.open('GET', url,  true);
        xhr.send();
    })
}