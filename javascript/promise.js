function loadUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Loading user...");
      resolve({ name: "Sasmita", city: "Talcher" });
    }, 2000);
  });
}

async function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve(["Post 1", "Post 2"])
        : reject("Failed to load posts");
      console.log("Loading posts...");
    }, 3000);
  });
}

async function showDashboard() {
  const user = await loadUser();
  console.log(`User: ${user.name} from ${user.city}`);

  try {
    const posts = await loadPosts();
    posts.forEach((post) => console.log("Post:", post));
  } catch (error) {
    console.error("Error loading posts:", error);
  }
}

showDashboard();
