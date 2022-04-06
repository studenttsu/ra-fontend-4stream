// import { User } from './user.js';

// ----------------------

// function getAccount(callback) {
//     setTimeout(() => {
//         const user = {
//             id: 1,
//             name: 'User'
//         };

//         callback(user);
//     }, 3000);
// }

// function getPosts(userId, callback) {
//     setTimeout(() => {
//         const posts = [
//             {
//                 id: 1,
//                 name: 'Post 1'
//             },
//             {
//                 id: 2,
//                 name: 'Post 2'
//             }
//         ];

//         callback(posts);
//     }, 3000);
// }


// getAccount(user => {
//     console.log(user);

//     getPosts(user.id, posts => {
//         console.log(posts);
//     });
// });

const wait = (timeout = 1000) => new Promise(r => setTimeout(() => r(), timeout));

async function getAccount() {
    await wait();

    return {
        id: 1,
        name: 'User'
    };
}

async function getPosts(userId) {
    if (!userId) {
        throw new Error('Id is required');
    }

    await wait();

    return [
        {
            id: 1,
            name: 'Post 1'
        },
        {
            id: 2,
            name: 'Post 2'
        }
    ];
}

async function getPostById(postId) {
    if (!postId) {
        throw new Error('Id is required');
    }

    await wait();

    return {
        id: postId,
        name: `Post ${postId}`
    };
}

function loader(isLoad) {
    console.log(isLoad ? 'Loading...' : 'Finish');
}

async function init() {
    loader(true);

    try {
        const user = await getAccount();
        const shortPostsInfo = await getPosts(user.id);
        const posts = await Promise.all(shortPostsInfo.map(item => getPostById(item.id)));
    
        console.log(posts);
    } catch (e) {
        console.error(e);
    } finally {
        loader(false);
    }
}

init();