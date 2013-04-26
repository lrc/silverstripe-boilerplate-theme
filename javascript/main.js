/*!
 * Copyright Left, Right & Centre
 * 
 * The site's main javascript file. Everything should stem from here with other scripts loaded dynamically using require.js
 */
(function(){require(["jquery"],function(n){n(function(){var i=n("form.validate");i.length&&require(["forms"],function(){i.validate()})})})})(window);