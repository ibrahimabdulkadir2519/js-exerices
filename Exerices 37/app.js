const blogForm = document.querySelector("#blog-form");
const titleInput = document.querySelector("#title-input");
const imageInput = document.querySelector("#image-input");
const contentInput = document.querySelector("#content-input");
const blogList = document.querySelector("#blog-list");

document.addEventListener("DOMContentLoaded", loadPosts);

// ADD POST
blogForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const post = {
    id: Date.now(),
    title: titleInput.value,
    image: imageInput.value,
    content: contentInput.value
  };

  addPostDOM(post);
  savePost(post);
  blogForm.reset();
});

// LOAD POSTS
function loadPosts() {
  const posts = getPosts();
  posts.forEach(post => addPostDOM(post));
}

// ADD POST TO DOM
function addPostDOM(post) {
  const div = document.createElement("div");
  div.className = "post";
  div.dataset.id = post.id;

  div.innerHTML = `
    <h3 class="post-title">${post.title}</h3>
    ${post.image ? `<img src="${post.image}">` : ""}
    <p class="post-content">${post.content}</p>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  div.querySelector(".delete-btn").addEventListener("click", function () {
    deletePost(post.id, div);
  });

  div.querySelector(".edit-btn").addEventListener("click", function () {
    editPost(post.id, div);
  });

  blogList.appendChild(div);
}

// EDIT POST 
function editPost(id, div) {
  const posts = getPosts();
  const post = posts.find(p => p.id === id);

  const newTitle = prompt("Edit Title", post.title);
  const newImage = prompt("Edit Image URL", post.image);
  const newContent = prompt("Edit Content", post.content);

  if (newTitle && newContent) {
    post.title = newTitle;
    post.image = newImage;
    post.content = newContent;

    localStorage.setItem("posts", JSON.stringify(posts));

    div.querySelector(".post-title").textContent = newTitle;
    div.querySelector(".post-content").textContent = newContent;

    if (newImage) {
      if (div.querySelector("img")) {
        div.querySelector("img").src = newImage;
      } else {
        const img = document.createElement("img");
        img.src = newImage;
        div.insertBefore(img, div.querySelector(".post-content"));
      }
    }
  }
}

// DELETE POST
function deletePost(id, div) {
  let posts = getPosts();
  posts = posts.filter(post => post.id !== id);
  localStorage.setItem("posts", JSON.stringify(posts));
  div.remove();
}

// LOCAL STORAGE
function savePost(post) {
  const posts = getPosts();
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
}

function getPosts() {
  return JSON.parse(localStorage.getItem("posts")) || [];
}