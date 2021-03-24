const allTabs = Array.from(document.querySelectorAll('.tabs'));
const allContent = document.querySelectorAll('.content');

allTabs.forEach(tab => {


    tab.addEventListener('click', e => {

        for(let i = 0; i < allTabs.length; i++){
            allTabs[i].classList.remove('active-tabs')
        }
        e.target.classList.toggle('active-tabs')


        const index = allTabs.indexOf(e.target);

        for(let m = 0; m < allContent.length; m++){
            allContent[m].classList.remove('active-content');
        }
        allContent[index].classList.add('active-content');

    })

})