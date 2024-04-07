'use strict';

const viewImages = document.querySelector('.box_view-images');
const lists = viewImages.children;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// ぼたんを押したとき
function slideImg(Index) {
    const listWidth = lists[0].getBoundingClientRect().width;
    viewImages.style.transform = `translateX(${-1 * listWidth * currentIndex}px)`;
}

function classToggle() {
    prevBtn.classList.remove('disabled');
    nextBtn.classList.remove('disabled');
    if (currentIndex === 0) {
        prevBtn.classList.add('disabled');
    } else if (currentIndex === 2) {
        nextBtn.classList.add('disabled');
    }
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    slideImg(currentIndex);
    classToggle();
    selectToggleActive(currentIndex);
});
nextBtn.addEventListener('click', () => {
    currentIndex++;
    slideImg(currentIndex);
    classToggle();
    selectToggleActive(currentIndex);
});

// リストのボタンを押したとき
const selectImgLists = document.querySelectorAll('.box_list-images li');
selectImgLists.forEach((selectImgList, index) => {
    selectImgList.addEventListener('click', () => {
        currentIndex = index;
        selectToggleActive(currentIndex);
        slideImg(currentIndex);
        classToggle();
    })
})

function selectToggleActive(index) {
    selectImgLists.forEach((list) => {
        list.classList.remove('active');
    });
    selectImgLists[index].classList.add('active');
}