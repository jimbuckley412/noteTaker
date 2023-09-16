const goBackBtn = document.querySelector('.go-back-btn');

const goBack = (e) => {
    e.preventDefault();

    history.back();
};

goBackBtn.addEventListener('click', goBack);