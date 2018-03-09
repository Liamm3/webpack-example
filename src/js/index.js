import $ from 'jquery'
import 'popper.js'
import 'bootstrap'

import '../scss/main.scss'

$(function () {
  $('[data-toggle="popover"]').popover()
})
