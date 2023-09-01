// Variables
    const cardFront = document.querySelector(".card-front");
    const form = document.querySelector("form");
    const input = document.querySelector("input");
    const subscribeBtn = document.querySelector(".subscribe-btn");
    const errorMessage = document.querySelector(".error-message");
    const cardBack = document.querySelector(".card-back");
    const dismissBtn = document.querySelector(".dismiss-btn");

// Form and subscribe button event listener
    form.addEventListener("submit", validate);
    subscribeBtn.addEventListener("click", validate);

// Check if email is valid
    const validEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

// When dismiss-btn is clicked, show card-front again
    const dismiss = () => {
        cardFront.classList.remove("hidden");
        cardBack.classList.add("hidden");
    }

// Display card-back if email is valid, otherwise display error state on card-front
    function validate(e) {
    
        e.preventDefault();

        if (!validEmail(email.value)) {
            errorMessage.classList.remove("hidden");
            input.style.backgroundColor = "#ffe8e6";
            input.style.border = "1px solid var(--clr-primary-tomato)";
        } else {
            cardFront.classList.add("hidden");
            cardBack.classList.remove("hidden");
            dismissBtn.addEventListener("click", dismiss);
            // Reset back to default state
                errorMessage.classList.add("hidden");
                input.style.backgroundColor = "#fff";
                input.style.border = "1px solid var(--clr-neutral-gray)";
                input.value = "";
        }
    }