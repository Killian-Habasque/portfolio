"use strict";
(function () {
	let parallax;

	document.addEventListener("DOMContentLoaded", initialiser);

	function initialiser(evt) {

		parallax = document.querySelectorAll(".txtParallax");

		let boutonNav = document.querySelector('.boutonNav');
		boutonNav.addEventListener("click", navOpen);

	}


	function navOpen() {
		document.querySelector(".one").classList.add('open');
		document.querySelector(".nav").classList.add('open');

		let navtexte = document.getElementsByClassName("navTexte");
		for (let navSelec of navtexte) {
			navSelec.classList.add('open');
		}

		let boutonNav = document.querySelector('.boutonNav');
		boutonNav.removeEventListener("click", navOpen);
		boutonNav.addEventListener("click", navClose);
	}

	function navClose() {
		document.querySelector(".one").classList.remove('open');
		document.querySelector(".nav").classList.remove('open');

		let navtexte = document.getElementsByClassName("navTexte");
		for (let navSelec of navtexte) {
			navSelec.classList.remove('open');
		}

		let boutonNav = document.querySelector('.boutonNav');
		boutonNav.addEventListener("click", navOpen);
		boutonNav.removeEventListener("click", navClose);
	}


	window.addEventListener('scroll', function () {
		var value = window.scrollY;

		let navtexte = document.getElementsByClassName("txtParallax");
		for (let navSelec of navtexte) {
			navSelec.style.top = -value * 0.5 + 'px';
		}


	})


})();