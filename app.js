document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const triggers = document.querySelectorAll(".trigger");

    const openModal = (modal) => {
        modal.style.display = "flex";
    };

    const closeModal = (modal) => {
        modal.style.display = "none";
    };

    let triggerClicked = false;

    body.addEventListener("click", (event) => {
        if (!triggerClicked) {
            alert("Hey, c'est Arcel. Cliquez sur une section du paquet cadeau pour découvrir un souhait !");
        }
        triggerClicked = false;
    });

    triggers.forEach((trigger) => {
        const modal = trigger.querySelector(".modal");

        trigger.addEventListener("click", (event) => {
            event.stopPropagation();
            openModal(modal);
            triggerClicked = true; 
        });

        const closeButton = modal.querySelector(".close");
        closeButton.addEventListener("click", (event) => {
            event.stopPropagation();
            closeModal(modal);
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });
});
