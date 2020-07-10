const caasy = require('../dist/caasy-min');

caasy.init({ siteId: '5f06fbec5f52c3514a17c329', mode: 'dev' })

const main = async () => {
    try {
        const allPosts = await caasy.posts.getAll();
        console.log(allPosts);
        
        const post = await caasy.posts.getById('5eea4200be133a05fe606f84');
        console.log(post);
        
        const allPostIds = await caasy.posts.getAllIds();
        console.log(allPostIds);
        
        const allAuthors = await caasy.posts.getAllAuthors(2);
        console.log(allAuthors);
        
    } catch (error) {
        console.log(error)
    }
};

main();