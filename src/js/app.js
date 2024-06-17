const sortBtn = document.querySelector("#sort-num");
const numInput = document.querySelector("#num");
const modal = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector(".close");
const spanNum = document.querySelector(".numSort");

sortBtn.addEventListener("click", toggleModal);
modal.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);

function sort() {
    let inputValue = parseInt(numInput.value)
    let numSort = Math.floor(Math.random() * (inputValue + 1));

    spanNum.classList.remove("show");
    spanNum.offsetWidth;
    spanNum.textContent = `${numSort}`;
    spanNum.classList.add("show");
}

function toggleModal() {
    modal.classList.toggle("ativo");
    modal.style.display = modal.classList.contains("ativo") ? "flex" : "none";
}

function closeModal(e) {
    if (e.target === modal || e.target.classList.contains("close")) {
        modal.classList.remove("ativo");
        modal.style.display = "none";
        numInput.value = "";
    }
}