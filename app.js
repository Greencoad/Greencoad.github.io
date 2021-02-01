const mobile_menu = document.querySelector('.navbar-toggler .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.navbar-toggler .nav-bar .nav-list ul li a');
const header = document.querySelector('.navbar-toggler.container');
const navbartoggler= document.querySelector(".navbar-toggler .navbar-collapse .navbar-nav .nav-item .nav-link")

navbartoggler.addEventListener('click', () => {
    navbartoggler.classList.toggle("active");
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
        navbartoggler.classList.toggle("active");
		mobile_menu.classList.toggle('active');
	});
});
