// const promise2 = new Promise((resolve, _) => resolve(1));
// const promise5 = new Promise((resolve, _) => setTimeout(() => resolve(5), 1000));
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(3);
const promise3 = new Promise((_, reject) => reject(3))

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log('All promises fulfilled:', values);
    })
    .catch(error => {
        console.error('At Line 11 one promise was rejected:', error);
    });

Promise.allSettled([promise1, promise2, promise3])
    .then(values => {
        console.log('All promises fulfilled in line19:', values);
    }).catch(error => {
        console.error('Status:', error);
    });
