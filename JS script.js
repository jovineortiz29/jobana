/* ==================================================
   MENU TOGGLE
================================================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/* ===== OPEN / CLOSE MOBILE MENU ===== */

menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');

    navbar.classList.toggle('active');

};



/* ==================================================
   CLOSE MENU WHEN CLICKING A NAVIGATION LINK
================================================== */

let navLinks = document.querySelectorAll('.navbar a');


navLinks.forEach(link => {

    link.onclick = () => {

        menuIcon.classList.remove('bx-x');

        navbar.classList.remove('active');

    };

});



/* ==================================================
   ACTIVE NAVIGATION LINK WHILE SCROLLING
================================================== */

let sections = document.querySelectorAll('section');


window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute('id');


        if (
            top >= offset &&
            top < offset + height
        ) {

            navLinks.forEach(link => {

                link.classList.remove('active');

            });


            let activeLink =
                document.querySelector(
                    '.navbar a[href*=' + id + ']'
                );


            if (activeLink) {
                activeLink.classList.add('active');
            }

        }

    });

};