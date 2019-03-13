
/*---------------------Nav Bar Sticky--------------------------*/

	const nav = document.querySelector('#main');
	const topOfNav = nav.offsetTop;

	function fixNav() {
		if(window.scrollY > topOfNav) {
			document.body.classList.add('fixed-nav');
		} else {
			document.body.classList.remove('fixed-nav');
		}
	}

	window.addEventListener('scroll', fixNav);

	/*-------------------------Smooth Scroll-------------------*/

	function smoothScroll(targetPos, duration) {

		var startPos = window.pageYOffset;
/*		var distance = targetPos - startPos;*/
		var startTime = null;

		function animation(currentTime) {
			if (startTime == null)
				startTime = currentTime;
			var timeElapsed = currentTime - startTime;
			var run = ease(timeElapsed, startPos, targetPos, duration);
			window.scrollTo(0, run);
			
			if(timeElapsed < duration) 
				requestAnimationFrame(animation);

		}

		function ease(t, b, c, d) {
			t /= d/2;
			if (t < 1) return c/2*t*t + b;
			t--;
			return -c/2 * (t*(t-2) - 1) + b;
		}

		requestAnimationFrame(animation);
	}

	var scroll2 = document.querySelector('.scroll-2');

	scroll2.addEventListener('click', function(){
		var target = document.querySelector('.about-me-section');
		var targetPos = target.getBoundingClientRect().top - 116;
		smoothScroll(targetPos, 800);
	});

	var scroll3 = document.querySelector('.scroll-3');
	scroll3.addEventListener('click', function() {
		var target = document.querySelector('#get-in-touch');
		var targetPos = target.getBoundingClientRect().top - 56;
		smoothScroll(targetPos, 800);
	});

	var scroll1 = document.querySelector('.scroll-1');

	scroll1.addEventListener('click', function(){
		var target = document.querySelector('#banner');
		var targetPos = target.getBoundingClientRect().top - 56;
		smoothScroll(targetPos, 800);
	});

	var scroll4 = document.querySelector('.action-button');

	scroll4.addEventListener('click', function(){
		var target = document.querySelector('#portfolio-block');
		var targetPos = target.getBoundingClientRect().top - 56;
		smoothScroll(targetPos, 800);
	});

/*-----------------Form Submit----------------------*/

	const myForm = document.querySelector('.form-group');
	const sendBtn = document.querySelector('#send_button');

	sendBtn.addEventListener('click', takeData);

	function takeData(e) {

		e.preventDefault();
		/*console.log(myForm);*/

		var name = document.querySelector('#name').value;
		var email = document.querySelector('#email').value;
		var subject = document.querySelector('#subject').value;
		var message = document.querySelector('#message').value;
		var statusElm = $('.status');
		statusElm.empty();

		console.log(email);

		if (name.length > 4) {
			/*statusElm.append('<div>Name is valid</div>');*/
		} else {
			statusElm.append('<div>Name should have more than 4 characters</div>');
		}

		if (email.length > 5 && email.includes('@') && email.includes('.')) {
			/*statusElm.append('<div>Email is valid</div>');*/
		} else {
			statusElm.append('<div>Email is not valid</div>');
		}

		if (subject.length > 2) {
			/*statusElm.append('<div>Subject is valid</div>');*/
		} else {
			statusElm.append('<div>Subject is not valid</div>');
		}

		if (message.length > 20) {
			/*statusElm.append('<div>Message is valid</div>');*/
		} else {
			statusElm.append('<div>Message should have more than 20 characters</div>');
		}
	}

	var menu = document.getElementById('menu-toggler');
	var navMobile = document.querySelector('.menu-mobile-items');
	var exit = document.getElementById('exit');

	menu.addEventListener('click', function(e) {
		// document.querySelector('.menu-mobile-items').style.visibility='visible';
		navMobile.classList.toggle('menu');
	});


	exit.addEventListener('click', function(e) {
		navMobile.classList.toggle('menu');
	});