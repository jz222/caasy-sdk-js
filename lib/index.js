import posts from './posts/index';
import instance from './instance/index';

export default { posts, init: instance.set };