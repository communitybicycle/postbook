import faker from "faker";

export const mockPosts = generateFakePosts();

function generateFakePosts(numPosts = 10) {
  const posts = {};
  for (let i = 0; i < numPosts; i++) {
    const newPostId = faker.random.uuid();
    posts[newPostId] = {
      authorName: faker.name.findName(),
      authorEmail: faker.internet.email(),
      content: faker.lorem.paragraph(),
      created: faker.date.past(),
      replies: [],
    };
  }

  return posts;
}
