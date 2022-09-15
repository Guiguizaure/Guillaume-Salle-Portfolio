function aboutImageRotate() {
    let aboutImages = document.querySelectorAll('.image-style-blue');

    for (let i = 0; i < aboutImages.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = aboutImages[i].getBoundingClientRect().top;
        let elementVisible = 200;

        if (elementTop < windowHeight - elementVisible){
            aboutImages[i].classList.add('rotateActive');

        } else {
            aboutImages[i].classList.remove('rotateActive');
        }
    }
}


function titleReveal() {
    let titleReveals = document.querySelectorAll('.section-title');

    for (let i = 0; i < titleReveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = titleReveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible){
            titleReveals[i].classList.add('active');

        } else {
            titleReveals[i].classList.remove('active');
        }
    }
}

function opacityProject() {
    let project = document.querySelectorAll('.project-image');

    for (let i = 0; i < project.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = project[i].getBoundingClientRect().top;
        let elementVisible = 200;

        if (elementTop < windowHeight - elementVisible){
            project[i].classList.add('active');

        } else {
            project[i].classList.remove('active');
        }
    }
}
function opacityProjectOhMyFood() {
    let project = document.querySelectorAll('.project-image-ohmyfood');

    for (let i = 0; i < project.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = project[i].getBoundingClientRect().top;
        let elementVisible = 200;

        if (elementTop < windowHeight - elementVisible){
            project[i].classList.add('active');

        } else {
            project[i].classList.remove('active');
        }
    }
}

function translateKeypoint() {
    let translate = document.querySelectorAll('.key-point-container');

    for (let i = 0; i < translate.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = translate[i].getBoundingClientRect().top;
        let elementVisible = 200;

        if (elementTop < windowHeight - elementVisible){
            translate[i].classList.add('active');

        } else {
            translate[i].classList.remove('active');
        }
    }
}

function zoomArtwork() {
    let zooms = document.querySelectorAll('.about-box-artwork-img img');

    for (let i = 0; i < zooms.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = zooms[i].getBoundingClientRect().top;
        let elementVisible = 200;

        if (elementTop < windowHeight - elementVisible){
            zooms[i].classList.add('zoomActive');

        } else {
            zooms[i].classList.remove('zoomActive');
        }
    }
}




window.addEventListener('scroll', aboutImageRotate);
window.addEventListener('scroll', titleReveal);
window.addEventListener('scroll', opacityProject);
window.addEventListener('scroll', opacityProjectOhMyFood);
window.addEventListener('scroll', translateKeypoint);
window.addEventListener('scroll', zoomArtwork);

aboutImageRotate();
titleReveal();
opacityProject();
opacityProjectOhMyFood()
translateKeypoint();
zoomArtwork();