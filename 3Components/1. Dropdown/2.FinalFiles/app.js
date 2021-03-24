const dropdown = document.querySelector('.dropdown-btn');
const blocTop = document.querySelector('.bloc-top');
const allLinks = document.querySelectorAll('.bloc-links li');

const allDropHeight = `${dropdown.scrollHeight}px`
const blocTopHeight = `${blocTop.scrollHeight}px`
dropdown.style.height = blocTopHeight;

dropdown.addEventListener('click', dropAnim);

let toggleIndex = false;

function dropAnim(){
const toggle =
    toggleIndex ?
    (
        dropdown.style.height = blocTopHeight,
        toggleIndex = false
    ) 
    :
    (
        dropdown.style.height = allDropHeight,
        toggleIndex = true
    )

    console.log(toggle);
}