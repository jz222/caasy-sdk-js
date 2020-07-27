const caasy = require('../dist/caasy-min');

caasy.init({ siteId: '5f05b799985d5565e1826922' })

const main = async () => {
    try {
        const allPosts = await caasy.posts.getAll();
        console.log(allPosts);
        
        const post = await caasy.posts.getById('5f11a482b37775863c3243a8');
        console.log(post);
        
        const allPostIds = await caasy.posts.getAllIds();
        console.log(allPostIds);
        
        const allAuthors = await caasy.posts.getAllAuthors(1);
        console.log(allAuthors);
        
        const postsByAuthor = await caasy.posts.getAllByAuthor('5f05b66d985d5565e1826921', 1);
        console.log(postsByAuthor);
        
        const allPages = await caasy.pages.getAll();
        console.log(allPages);

        const pageById = await caasy.pages.getById('5f1eb50afca07ac46ce85056');
        console.log(pageById.elements);
        
    } catch (error) {
        console.log(error)
    }
};

main();