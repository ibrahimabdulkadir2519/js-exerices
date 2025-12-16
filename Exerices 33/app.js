function changeContent() {
 
  document.getElementById("title").textContent = "Content Changed!";
  document.getElementById("text").textContent =
    "The text has been updated using JavaScript.";


  document.getElementById("box").innerHTML =
    "<strong>New HTML Content</strong> <em>added successfully</em>";
}
