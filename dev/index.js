const caasy = require('../dist/caasy-min');

caasy.init({ siteId: '5ee4debb36189554686eb89b', mode: 'dev' })

const main = async () => {
    try {
        const allPosts = await caasy.posts.getAll();
        console.log(allPosts);
        
        const post = await caasy.posts.getById('5eea4200be133a05fe606f84');
        console.log(post);
    } catch (error) {
        console.log(error)
    }
};

main();