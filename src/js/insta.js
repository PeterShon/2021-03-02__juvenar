/* insta */
export function insta() {
  setTimeout(addDestroy, 400);
  setTimeout(addDestroy, 1000);
  setTimeout(addDestroy, 3000);
  setTimeout(addDestroy, 10000);

  function addDestroy() {
    if (document.querySelector('#eapps-instagram-feed-1')) {
      document.querySelector('#eapps-instagram-feed-1').lastChild.style.display = 'none';
    }
    if (document.querySelector('.eapps-link')) {
      document.querySelector('.eapps-link').style.display = 'none';
    }
  }
}