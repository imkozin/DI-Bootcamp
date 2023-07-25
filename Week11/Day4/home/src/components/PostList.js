import postData from '../posts.json';

const PostList = () => {
    return (
        <div>
            {postData.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;