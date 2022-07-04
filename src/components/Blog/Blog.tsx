import React, { useState, useEffect } from "react";
import BlogControls from "./BlogControls";
import BlogForm from "./BlogForm";
import BlogPosts from "./BlogPosts";
import "../../css/Blog.css";
import "../../css/block.css";
import "../../css/Checklist.css";

export interface ControlsState {
  isSortAbc: boolean;
  isSortDate: boolean;
  isReversed: boolean;
  filter: string;
}

export interface StorageEntry {
  isSortAbc: boolean;
  isSortDate: boolean;
  isReversed: boolean;
  filter: string;
  posts: Post[];
}

export interface Post {
  title: string;
  text: string;
  date: number;
}

export interface FormState {
  title: string;
  text: string;
  date: number | null;
  isError: boolean;
}

const Blog: React.FC = () => {
  const [controls, setControls] = useState<ControlsState>({
    isSortAbc: false,
    isSortDate: false,
    isReversed: false,
    filter: "",
  });
  const [formState, setFormState] = useState<FormState>({
    title: "",
    text: "",
    date: null,
    isError: false,
  });
  const [posts, setPosts] = useState<Post[]>([]);

  const getStorage = (): StorageEntry[] => {
    const blogStorage = localStorage.blog
      ? JSON.parse(localStorage.blog)
      : [
          {
            isSortAbc: false,
            isSortDate: false,
            isReversed: false,
            filter: "",
            posts: [],
          },
        ];
    return blogStorage;
  };

  const sendToStorage = (entriesForStorage: StorageEntry[]) => {
    localStorage.blog = JSON.stringify(entriesForStorage);
  };

  const insertPostInEntry = (newPost: Post, storageEntry: StorageEntry) => {
    if (!storageEntry.isSortAbc && !storageEntry.isSortDate) {
      storageEntry.posts.push(newPost);
    } else {
      const indexForNewPost = storageEntry.posts.findIndex((storageEntryPost) => {
        const newPostValue = storageEntry.isSortAbc
          ? newPost.title
          : newPost.date as number;
        const storageEntryPostValue = storageEntry.isSortAbc
          ? storageEntryPost.title
          : storageEntryPost.date as number;
        let comparationResult;

        comparationResult = newPostValue < storageEntryPostValue;
        if (storageEntry.isReversed)
          comparationResult = newPostValue > storageEntryPostValue;
        return comparationResult;
      });

      if (indexForNewPost !== -1) {
        storageEntry.posts.splice(indexForNewPost, 0, newPost);
      } else {
        storageEntry.posts.push(newPost);
      }
    }
  };

  useEffect(() => {
    sendToStorage(getStorage());
  }, []);

  useEffect(() => {
    if (!formState.date) return;

    const newPostForStorage = {
      title: formState.title,
      text: formState.text,
      date: formState.date,
    };

    const storage = getStorage();
    for (const storageEntry of storage) {
      if (
        formState.title
          .toUpperCase()
          .includes(storageEntry.filter.toUpperCase())
      ) {
        insertPostInEntry(newPostForStorage, storageEntry);
      }
    }
    sendToStorage(storage);

    return;
  }, [formState.date]);

  const findSortedPostsInStorage = () => {
    for (const storageEntry of getStorage()) {
      const isEntryFilteredAndSorted =
        storageEntry.filter.toUpperCase() === controls.filter.toUpperCase() &&
        storageEntry.isSortAbc === controls.isSortAbc &&
        storageEntry.isSortDate === controls.isSortDate &&
        storageEntry.isReversed === controls.isReversed;

      if (isEntryFilteredAndSorted) {
        return storageEntry.posts;
      }
    }
    return null;
  };

  const findFilteredPostsInStorage = () => {
    for (const storageEntry of getStorage()) {
      const isEntryOnlyFiltered =
        storageEntry.filter.toUpperCase() === controls.filter.toUpperCase();

      if (isEntryOnlyFiltered) {
        return storageEntry.posts;
      }
    }

    return null;
  };

  const sortPosts = (posts: Post[]) => {
    if (!controls.isSortAbc && !controls.isSortDate) return posts;
    if (posts.length < 2) return posts;

    const comparePosts = (firstPost: Post, secondPost: Post) => {
      const firstPostValue = controls.isSortAbc
        ? firstPost.title
        : firstPost.date as number;
      const secondPostValue = controls.isSortAbc
        ? secondPost.title
        : secondPost.date as number;

      const comparationResult = firstPostValue > secondPostValue ? 1 : -1;
      if (controls.isReversed) return comparationResult === 1 ? -1 : 1;
      return comparationResult;
    };

    return posts.sort(comparePosts);
  };

  const createEntry = (postsForEntry: Post[]): StorageEntry => ({
    isSortAbc: controls.isSortAbc,
    isSortDate: controls.isSortDate,
    isReversed: controls.isReversed,
    filter: controls.filter,
    posts: postsForEntry,
  });

  useEffect(() => {
    let sortedPosts: Post[];
    const storageSortedPosts = findSortedPostsInStorage();
    if (storageSortedPosts) {
      setPosts(storageSortedPosts);
      return;
    }

    const storageFilteredPosts = findFilteredPostsInStorage();
    if (storageFilteredPosts) {
      sortedPosts = sortPosts(storageFilteredPosts);
      setPosts(sortedPosts);

      const storage = getStorage();
      storage.push(createEntry(sortedPosts));
      sendToStorage(storage);
      return;
    }

    sortedPosts = sortPosts(
      posts.filter((post) =>
        post.title.toUpperCase().includes(controls.filter.toUpperCase())
      )
    );
    setPosts(sortedPosts);
    if (sortedPosts.length === 0) return;

    const storage = getStorage();
    storage.push(createEntry(sortedPosts));
    sendToStorage(storage);
  }, [controls, formState]);

  return (
    <div className="blog_container">
      <BlogForm formState={formState} setFormState={setFormState} />
      <BlogControls controls={controls} setControls={setControls} />
      <BlogPosts
        posts={posts}
        setPosts={setPosts}
        getStorage={getStorage}
        sendToStorage={sendToStorage}
      />
    </div>
  );
};

export default Blog;
