/*  global $, readingTime, fancybox */
import $ from 'jquery'
import readingTime from './readingTime'

;(() => {
  'use strict'

	/**
	 * Fancybox
	 */

	/**
	 * Reading Time
	 */
  var $article = $('article')

  $('header div').append('<div class="reading-time">about a <span class="eta"></span> read | <span class="count"></span> words</div>')

  $article.readingTime({
    readingTimeTarget: '.eta',
    wordCountTarget: '.count',
    error: function (message) {
      $('.reading-time').remove()
    }
  })
  /**
   * Smooth Scroll
   */
  var hashLinks = 'a[href^="#"]'
  $(document).on('click', hashLinks, function (e) {
    e.preventDefault()

    var target = this.hash
    var $target = $(target)
    if ($target.length) {
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 400, 'swing', function () {
        window.location.hash = target
      })
    }
  })
})()
