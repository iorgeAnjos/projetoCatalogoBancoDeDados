const menuItens = document.querySelectorAll('.menu a[href^="#"]');
menuItens.forEach((item) => {
  item.addEventListener('click', scroolToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scroolToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const to = getScrollTopByHref(event.target) - 50;

  scrollToPosition(to);
}
function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 700;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}
function cadastro() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Deck salvo com êxito',
    showConfirmButton: false,
    timer: 2000,
  });
}
function editar() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Deck alterado com êxito',
    showConfirmButton: false,
    timer: 2000,
  });
}

function apagar() {
  Swal.fire('Bom trabalho!', 'Deck excluido com exito!', 'success');
}
