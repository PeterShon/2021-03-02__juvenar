/* map - address-section */
export function map() {
  document.querySelector('.address-section__close-info').onclick = function () {
    document.querySelector('.address-section__map-info').style.display = 'none';
  }
}