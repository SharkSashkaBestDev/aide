$(document).ready((e) => {
    const sections = document.querySelectorAll('.page-section');

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let index = 0;
    const animationDuration = 200;
    let lastTime = 0;

    nextBtn.addEventListener('click', () => {
        if (index > sections.length - 1) { return; }
        index++;
        sections.forEach((section, i) => {
            if (i === index) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    prevBtn.addEventListener('click', () => {
        if (index < 1) { return; }
        index--;
        sections.forEach((section, i) => {
            if (i === index) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('wheel', (e) => {
        const delta = e.wheelDelta;
        const currentTime = new Date().getTime();
    
        if (currentTime - lastTime < animationDuration) {
            // e.preventDefault();
            return;
        }

        if (delta < 0) {
            const nextBtnClick = new Event('click');
            nextBtn.dispatchEvent(nextBtnClick);
        } else {
            const prevBtnClick = new Event('click');
            prevBtn.dispatchEvent(prevBtnClick);
        }
    
        lastTime = currentTime;
    });
});

