 const btn = document.getElementById('open');
 const modal_container = document.getElementsByClassName('modal_container')[0]
 const click = document.getElementById('click');

btn.addEventListener('click', () => {
    modal_container.classList.add('show');
})
click.addEventListener('click', () => {
    modal_container.classList.remove('show');
})
