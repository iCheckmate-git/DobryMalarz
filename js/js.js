jQuery(document).ready(function() {
  const mobile_btn = document.querySelector('.mobile_menu');
  const menu = document.querySelector('.header__navigation ul');

  if (menu) {
    mobile_btn.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }

  const modal_btn = document.querySelectorAll('.modal_btn');

  modal_btn.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = document.querySelector('.modal_zamove');
      const overlay = document.querySelector('.overlay');
      this.classList.add('active');
      overlay.classList.add('active');
      modal.classList.add('active');

      // Отключаем скролл у body
      document.body.style.overflow = 'hidden';

      const close = modal.querySelector('.close');

      close.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Включаем скролл обратно
        modal_btn.forEach(btn => btn.classList.remove('active')); // Убираем класс active у всех кнопок
      });
    });
  });

  const scrollBtn = document.querySelector(".arrow_up");

    if (scrollBtn) {
        scrollBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
})
