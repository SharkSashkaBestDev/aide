$(document).ready(() => {
  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  const $demoImage = $('.demo-image-wrapper .demo-image');

  const moveTweet = () => {
    const $tweet = $('#twitter-widget-0');
    $demoImage.before($tweet);
    console.log($tweet.css('position'));
    setTimeout(() => {
      tryAgain();
      console.log($tweet);
      }, 500);
  };

  const tryAgain = () => {
    const $tweet = $('#twitter-widget-0');
    const tweetEl = $tweet.get()[0];
    if (undefined === tweetEl) {
      setTimeout(() => {
        tryAgain();
      }, 100);
    }
    tweetEl.style.position = "absolute";
    console.log('img top', $demoImage.get()[0].offsetHeight);
    tweetEl.style.top = $demoImage.offset().top + $demoImage.get()[0].offsetHeight / 2 + 'px';
    tweetEl.style.left = $demoImage.get()[0].offsetWidth / 2 + 'px';
    $tweet.parent().removeClass('hidden');
  };

  moveTweet();

  return;

  if (!isChrome) {
    console.warn('Smooth scroll functionality is supported for Chrome only');

    // hiding scrolling buttons
    $('.main-wrapper > .buttons-section').css('display', 'none');
    $('.main-wrapper').css('overflow', 'initial');

    return;
  }

  const sections = document.querySelectorAll('.page-section');

  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;
  const animationDuration = 200;
  let lastTime = 0;

  nextBtn.addEventListener('click', () => {
    if (index > sections.length - 1) {
      return;
    }
    index++;
    sections.forEach((section, i) => {
      if (i === index) {
        section.scrollIntoView({behavior: 'smooth'});
      }
    });
  });

  prevBtn.addEventListener('click', () => {
    if (index < 1) {
      return;
    }
    index--;
    sections.forEach((section, i) => {
      if (i === index) {
        section.scrollIntoView({behavior: 'smooth'});
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

