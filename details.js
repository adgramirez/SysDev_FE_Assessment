document.addEventListener('DOMContentLoaded', () => {
  const colorDots = document.querySelectorAll('.big-dot');
  const colorText = document.getElementById('selected-color');
  let selectedColor = 'Peony';

  colorDots.forEach(dot => {
    const colorName = dot.getAttribute('data-color');

    dot.addEventListener('mouseenter', () => {
      colorText.textContent = `Color - ${colorName}`;
    });

    dot.addEventListener('mouseleave', () => {
      colorText.textContent = `Color - ${selectedColor}`;
    });

    dot.addEventListener('click', () => {
      selectedColor = colorName;
      colorText.textContent = `Color - ${selectedColor}`;

      colorDots.forEach(d => d.classList.remove('selected'));
      dot.classList.add('selected');
    });
  });
});
