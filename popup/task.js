
const subscribeModal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close")


if(document.cookie === 'modalWindow=close') {
        subscribeModal.classList.remove('modal_active');
} else {
        subscribeModal.classList.add('modal_active')
}

/*
//вариант включения всплывающего окна ( если куки пустые - при первом запуске программы)
if(document.cookie === "") {
        subscribeModal.classList.add("modal_active")
}
*/

modalClose.addEventListener("click", () => {
        subscribeModal.classList.remove("modal_active");
        document.cookie = "modalWindow=close";
})

//console.log(document.cookie);
//document.cookie = 'modalWindow=; Expires=Thu, 01 Jan 1970 00:00:00:'; // Удаление cookie для тестирования