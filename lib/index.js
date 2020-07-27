import posts from './posts/index';
import pages from './pages/index';
import instance from './instance/index';

export default { posts, pages, init: instance.set };