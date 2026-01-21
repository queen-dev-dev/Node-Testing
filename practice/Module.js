const posts = [
    {id:1, title:'Post One'},
    {id:2, title:'Post Two'}
]

export const getPosts = () => posts;

export const getPostsLength = () => posts.length

export default getPosts;   // no curly braces on either side

// export {getPosts};         needs curly braces on both sides