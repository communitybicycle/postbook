import React from "react";
import Post from "./Post";
import { useRecoilState } from "recoil";
import { filterState, postsState, sortState } from "../atoms";

function ViewPosts() {
  const [posts, setPosts] = useRecoilState(postsState);
  const [filter] = useRecoilState(filterState);
  const [sort] = useRecoilState(sortState);

  const handleDelete = (id) => {
    const newPosts = { ...posts };
    delete newPosts[id];

    setPosts(newPosts);
  };

  return Object.entries(posts)
    .filter((item) => {
      if (filter) {
        const post = item[1];
        return (
          post.authorName.toLowerCase().includes(filter) ||
          post.authorEmail.toLowerCase().includes(filter) ||
          post.content.toLowerCase().includes(filter)
        );
      }
      return true;
    })
    .sort((a, b) =>
      sort === "descending"
        ? b[1].created - a[1].created
        : a[1].created - b[1].created
    )
    .map((data) => {
      const id = data[0]
      const post = data[1]
      return (
        <Post
          key={id}
          onDelete={handleDelete}
          id={id}
          date={post.created.toLocaleString()}
          {...post}
        />
      );
    });
}

export default ViewPosts;
