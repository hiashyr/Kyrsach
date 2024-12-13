function scrollToTestModes() {
  document.getElementById('test-modes').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.chose_theory a');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Предотвращаем стандартное поведение ссылки

          const targetId = this.getAttribute('href').substring(1); // Удаляем # из href
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка
          }
      });
  });
});