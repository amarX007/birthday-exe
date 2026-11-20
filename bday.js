document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // DATE
    // =========================

    const dateText = "30th February";
    const dob = document.querySelector(".dob span");

    let currentIndex = 0;

    setTimeout(() => {

        const dateInterval = setInterval(() => {

            if (currentIndex < dateText.length) {

                dob.textContent += dateText[currentIndex];
                currentIndex++;

            } else {

                const starBefore = document.createElement("i");
                starBefore.className = "fa-solid fa-star";

                const starAfter = document.createElement("i");
                starAfter.className = "fa-solid fa-star";

                const dobContainer = document.querySelector(".dob");

                dobContainer.prepend(starBefore);
                dobContainer.appendChild(starAfter);

                clearInterval(dateInterval);
            }

        }, 150);

    }, 1000);


    // =========================
    // POPUP
    // =========================

    const btnLetter = document.querySelector("#btn_letter");
    const boxMail = document.querySelector(".boxMail");
    const closeBtn = document.querySelector(".close_popup");

    if (btnLetter && boxMail) {

        btnLetter.addEventListener("click", () => {

            console.log("Button clicked");

            boxMail.classList.add("active");

        });

    }

    if (closeBtn && boxMail) {

        closeBtn.addEventListener("click", () => {

            boxMail.classList.remove("active");

        });

    }

});