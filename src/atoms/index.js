import { atom } from "recoil";
import { mockPosts } from "../mocks";

export const postsState = atom({
  key: "postsState",
  default: mockPosts,
});

export const filterState = atom({
  key: "filterState",
  default: "",
});

export const sortState = atom({
  key: "sortState",
  default: "descending",
});
