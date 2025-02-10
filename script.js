// document.addEventListener("DOMContentLoaded", function () {
//     // Mobile Navigation Toggle
//     const navLinks = document.querySelector(".nav-links");
//     const navToggle = document.createElement("button");
//     navToggle.innerHTML = "☰";
//     navToggle.classList.add("nav-toggle");
//     document.querySelector("nav").prepend(navToggle);

//     navToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//     });

//     // Smooth Scrolling for Navigation
//     document.querySelectorAll(".nav-links a").forEach(anchor => {
//         anchor.addEventListener("click", function (event) {
//             event.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);
//             const targetSection = document.getElementById(targetId);
//             if (targetSection) {
//                 window.scrollTo({
//                     top: targetSection.offsetTop - 50,
//                     behavior: "smooth",
//                 });
//             }
//         });
//     });

//     // Dynamic Content Loading (Example)
//     const aboutSection = document.getElementById("about");
//     const loadMoreBtn = document.createElement("button");
//     loadMoreBtn.textContent = "Load More";
//     loadMoreBtn.classList.add("btn");
//     aboutSection.appendChild(loadMoreBtn);

//     loadMoreBtn.addEventListener("click", function () {
//         const extraContent = document.createElement("p");
//         extraContent.textContent =
//             "More details about QCG IITR and its latest research initiatives...";
//         aboutSection.appendChild(extraContent);
//         loadMoreBtn.style.display = "none";
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Toggle
    const navLinks = document.querySelector(".nav-links");
    const navToggle = document.createElement("button");
    navToggle.innerHTML = "☰";
    navToggle.classList.add("nav-toggle");
    document.querySelector("nav").prepend(navToggle);

    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });

    // Dynamic Content Loading (Example)
    // const aboutSection = document.getElementById("about");
    // const loadMoreBtn = document.createElement("button");
    // loadMoreBtn.textContent = "Load More";
    // loadMoreBtn.classList.add("btn2");
    // aboutSection.appendChild(loadMoreBtn);

    // loadMoreBtn.addEventListener("click", function () {
    //     const extraContent = document.createElement("p");
    //     extraContent.textContent =
    //         "More details about QCG IITR and its latest research initiatives...";
    //     aboutSection.appendChild(extraContent);
    //     loadMoreBtn.style.display = "none";
    // });
});


function toggleChatbot() {
    let chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

const responses = {
    "hello": "Hi there! How can I help?",
    "how are you": "I'm just a bot, but I'm doing great!",
    "bye": "Goodbye! Have a great day!",
    "your name": "I'm a simple chatbot!",
    "tell me about recruitments": "Sure! We're always looking for talented individuals to join our team. Check out our website for more information.",
    "how many recruitments are done every year": "many"
    
    
};

function sendMessage() {
    let input = document.getElementById("userInput").value.trim().toLowerCase();
    let chatbox = document.getElementById("chatbox");

    if (!input) return; 

    
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = input;
    chatbox.appendChild(userMessage);

    // Add bot response
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.textContent = responses[input] || "I don't understand that.";
        chatbox.appendChild(botMessage);

        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll
    }, 500);

    document.getElementById("userInput").value = ""; // Clear input
}