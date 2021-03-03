import $ from '../local_modules/jquery/dist/jquery.min'
import { myJquery } from '../js/my-jquery.js'
import { moveUp } from '../js/move-up.js'
import { popups } from '../js/popups.js'
import { parallax } from '../js/parallax.js'
import { compare } from '../js/compare.js'
import { burger } from '../js/burger.js'
import { slider } from '../js/slider.js'
import { tabs } from '../js/tabs.js'
import { header } from '../js/header.js'
import { select } from '../js/select.js'
import { feedback } from '../js/feedback.js'
import { animAppear } from '../js/anim-appear.js'
import { tilt } from '../js/tilt.js'
require(`../local_modules/choices.js/public/assets/scripts/choices.min`)
require(`../local_modules/vanilla-tilt/dist/vanilla-tilt.min`)

document.addEventListener(`DOMContentLoaded`, start())

window.$ = $
$(document).ready(() => {
  myJquery()
  // eslint-disable-next-line no-console
})


function start() {
  moveUp()
  popups()
  parallax()
  compare()
  burger()
  slider()
  tabs()
  header()
  select()
  feedback()
  animAppear()
  tilt()
}
