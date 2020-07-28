import instance from './instance/index';
import helpers from './helpers/index';
import posts from './posts/index';
import pages from './pages/index';

export default { posts, pages, helpers, init: instance.set };