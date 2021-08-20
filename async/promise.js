const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}<li>`; // template literal
        });
        document.body.innerHTML = output;
    }, 1000);
};

function createPost(post) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('ERROR: Something went wrong');
            }

        }, 2000);
    })
}

/*
getPosts();
createPost({ title: 'post three', body: 'this is post three'})
        .then(getPosts)
        .catch((error) => {console.log(error )});
*/

// Async / Await
// async function init() {
//      await createPost({title: 'post three', body: 'this is post three'});
//      getPosts();
// }

// init();

// Async / Await / Fetch
async function fetchUsers() {
     const res = await fetch('https://jsonplaceholder.typicode.com/users');   
     const date = await res.json();

     console.log(date);
}

fetchUsers();



/*
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
setTimeout(resolve, 2000, 'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
*/