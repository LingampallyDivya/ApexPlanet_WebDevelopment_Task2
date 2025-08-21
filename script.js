// -------------------
// Contact Form Validation
// -------------------
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(name === "" || email === "" || message === "") {
    alert("All fields are required!");
  } else if(!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
  }
});

// -------------------
// To-do List
// -------------------
function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if(task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  // Remove button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
