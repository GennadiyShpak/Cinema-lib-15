import refs from './refs';

window.addEventListener('scroll', onScrollToBack);

export default function onScrollToBack() {
  const getTop = document.documentElement.scrollTop;

  if (getTop > 180) {
    refs.scrollBackBtn.classList.add('is-active');
  } else {
    refs.scrollBackBtn.classList.remove('is-active');
  }
  refs.scrollBackBtn.addEventListener('click', () => {
    animateScrollTo(refs.body, {
      speed: 500,
      maxDuration: 3000,
    });
  });
}
