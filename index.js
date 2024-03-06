const input = document.querySelector("input");
const form = document.querySelector("form");
const addInvalid = document.querySelector(".invalid")
const container = document.querySelector(".container")
const pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/




function displayInvalid(e) {
    e.preventDefault();
    if (input.value) {
        addInvalid.textContent = ""
        input.classList.remove("invalid")
        if (pattern.test(input.value)) {
            input.style.border = "1px solid hsl(231, 7%, 60%)"
            input.style.color = " hsl(235, 18%, 26%)"
            addInvalid.textContent = ""
        } else {
            input.style.border = "1px solid hsl(4, 100%, 67%)"
            input.style.color = "hsl(4, 100%, 67%)"
            addInvalid.textContent = "Invalid email"
        }

    } else {
        addInvalid.textContent = "Please enter your email"
        input.classList.add("invalid")
    }
}

function handleSumbit(e) {
    e.preventDefault();
    if (input.value && pattern.test(input.value)) {
        container.innerHTML = ""
        container.style.width = "500px"
        container.innerHTML = `
        <div>
        <h1 style="margin-bottom:1rem">Thanks for subscribing!</h1>
        <p style="margin-bottom:1rem">A confirmation email has been sent to <strong>${input.value}</strong>. Please open it and click the button inside to confirm your subscription</p>
       <button class="return-home">Dismiss message</button>
       <div>
        `
        const returnHome = document.querySelector(".return-home")
        returnHome.addEventListener("click", function () {
            window.location.reload();
        })
    }
}



input.addEventListener("input", displayInvalid);
form.addEventListener("submit", handleSumbit)