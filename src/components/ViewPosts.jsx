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
    .map((data) => (
      <Post
        key={data[0]}
        onDelete={handleDelete}
        id={data[0]}
        date={data[1].created.toLocaleString()}
        {...data[1]}
      />
    ));
}

export default ViewPosts;
