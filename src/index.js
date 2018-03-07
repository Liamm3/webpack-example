import $ from 'jquery'
import 'popper.js'
import 'bootstrap'

import './scss/main.scss'

$(function () {
  $('[data-toggle="popover"]').popover()
})

const square = x => x ** 2

console.log(square(4))
