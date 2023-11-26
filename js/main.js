const sizeButtonCollection = document.querySelectorAll('.btnSize');

function setActive(e) {
    let elems = document.querySelector('.active');
    elems !==null && elems.classList.remove('active');
    e.target.classList.add('active');
}

sizeButtonCollection.forEach((button) => {
        button.addEventListener("click", (element) => {
        let display = document.getElementById('size');
        display.innerHTML = element.target.innerHTML;
        setActive(element)
    })
});