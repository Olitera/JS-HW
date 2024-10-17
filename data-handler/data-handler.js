class DataHandler {
  constructor() {
    this.posts = new Map();
  }

  fetchPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        data.forEach((post) => this.posts.set(post.id, post));

        resolve('Fetch successful');
      } catch(error) {
        reject(`Error during fetching posts: ${error.message}`);
      }
    });
  }

  listPosts() {
    return Array.from(this.posts.values()).toSorted((a, b) => a.title.localeCompare(b.title));
  }

  getPost(id) {
    return this.posts.get(id) || null;
  }

  clearPosts() {
    this.posts.clear();
  }
}
