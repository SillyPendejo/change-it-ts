import { Dispatch } from "react";
import { Post, StorageEntry } from "./Blog";

interface BlogPostsProps {
  posts: Post[];
  setPosts: Dispatch<React.SetStateAction<Post[]>>;
  getStorage: () => StorageEntry[];
  sendToStorage: Dispatch<StorageEntry[]>;
}

const BlogPosts: React.FC<BlogPostsProps> = (props) => {
  const { posts, setPosts, getStorage, sendToStorage } = props;

  const deletePost = (id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.date !== id));
    const storage = getStorage();
    for (const storageEntry of storage) {
      for (let i = 0; i < storageEntry.posts.length; i++) {
        if (storageEntry.posts[i].date! === id) {
          storageEntry.posts.splice(i, 1);
          break;
        }
      }
    }
    sendToStorage(storage);
  };

  const postElements = posts.map((post) => (
    <div className="blog__post block block_lime" key={post.date}>
      <div className="blog__left_container">
        <div className="blog__post_title">{post.title}</div>
        <div className="blog__post_text">{post.text}</div>
      </div>
      <div className="blog__right_container">
        <div className="blog__post_date">
          {new Date(post.date!).toLocaleString()}
        </div>
        <div
          className="blog__post_delete"
          onClick={() => deletePost(post.date!)}
        ></div>
      </div>
    </div>
  ));
  return (
    <div className="posts__container">
      {posts.length > 0 && (
        <div className="blog__posts block block_white">{postElements}</div>
      )}
      ;
    </div>
  );
};

export default BlogPosts;
