const caasy = require('../dist/caasy-min');

caasy.init({ siteId: '5f05b799985d5565e1826922' })

const main = async () => {
    try {
        const allPosts = await caasy.posts.getAll();
        console.log(allPosts);
        
        const post = await caasy.posts.getById('5f11a482b37775863c3243a8');
        console.log(post.getElementById('1594991894531-636n'));

        const allPostIds = await caasy.posts.getAllIds();
        console.log(allPostIds);

        const allAuthors = await caasy.posts.getAllAuthors(2);
        console.log(allAuthors);

        const postsByAuthor = await caasy.posts.getAllByAuthor('5f05b66d985d5565e1826921', 1);
        console.log(postsByAuthor);
        
    } catch (error) {
        console.log(error)
    }
};

main();