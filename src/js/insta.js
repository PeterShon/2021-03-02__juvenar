/* insta */
export function insta() {
  setTimeout(() => {
    if (document.querySelector('#eapps-instagram-feed-1')) {
      document.querySelector('#eapps-instagram-feed-1').lastChild.style.display = 'none';
    }
    if (document.querySelector('.eapps-link')) {
      document.querySelector('.eapps-link').style.display = 'none';
    }

  }, 400);
}