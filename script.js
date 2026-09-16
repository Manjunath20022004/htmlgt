// Button on the home page
function sayHello() {
    alert("Hello! Welcome to my personal website!");
}

// Contact form
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const result = document.getElementById("result");

    result.textContent = `Thank you, ${name}! Your message has been received.`;

    // Clear the form
    document.querySelector("form").reset();
}
