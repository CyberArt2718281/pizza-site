window.onload = function () {
    new WOW(
        {
            animateClass: 'animate__animated',
        }
    ).init();


    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });


    $('.product-image').magnificPopup(
        {
            type: 'image',
        }
    );

    $('document').ready(function () {

        $('.product-item').addClass('js-tilt');

        const tilt = $('.js-tilt').tilt({
            scale: 1.1,
        })
    })


    $('.products-title').css('color', '#ffffff').css('font-size', '45px')
    $('.product').css('padding-top', '80px').css('padding-bottom', '80px')
// $('.button:not(#no-touch)').css({
//     backgroundColor: 'transparent',
//     border: '1px solid rgb(255, 175,24)',
//     color: 'rgb(255, 175,24)',
// });
    let productInput = $('#product-input');
    productInput.attr('placeholder', 'Имя');
    $('.rights span').text(new Date().getFullYear());


    let products = $(".product");


// var rellax = new Rellax('.rellax', {
//     center: true
// });


    for (let i = 0; i < products.length; i++) {
        if (i % 2 === 0) {
            let element = products.eq(i).children().eq(1);
            element.text(element.text() + '*');
        }
    }

    let typed = new Typed('.double-title', {
        strings: ["Сделано с любовью", 'Самая вкусная пицца в мире\n' + '<span>только в Pizza Cheff</span>'],
        typeSpeed: 30,
        backSpeed: 50, // Скорость удаления текста
        loop: true, // Бесконечный цикл
        showCursor: false, // Показывать курсор
        cursorChar: '|', // Символ курсора
    });
    let typeFooter = new Typed('.order-text-title', {
        strings: ['<span>Хватит думать!</span>' + '\nДоставим заказ за 30 минут!', "Сделай заказ и получи промокод в 20% от заказа", ],
        typeSpeed: 50,
        backSpeed: 60, // Скорость удаления текста
        loop: true, // Бесконечный цикл
        showCursor: false, // Показывать курсор
        cursorChar: '|', // Символ курсора
    });
// document.getElementById('burger').onclick = function () {
//     document.getElementById('menu').classList.add('open');
// }
// document.querySelectorAll('#menu *').forEach((item) => {
//     item.onclick = () => {
//         document.getElementById('menu').classList.remove('open')
//     }
// })

// $('#choose-pizza').click(function () {
//     $('.products')[0].scrollIntoView({behavior: "smooth"});
// });


    let addToCartButtons = $('.add-to-cart-pizza');
// Объявляем переменную до её использования

    $(addToCartButtons).click((e) => {
        productInput.val($(e.target).parents('.product-item').find('.product-title').text());
        $('#order')[0].scrollIntoView({behavior: "smooth"});
    });

    let phoneInput = $('#phone-input');
    phoneInput.inputmask({"mask": "(999) 999-9999"});

    $('#create-order').click(function () {
        let addressInput = $('#address-input');
        if (!productInput.val()) {
            alert('Заполните пиццу');
            return;
        }
        if (!addressInput.val()) {
            alert('Заполните адрес');
            return;
        }

        if (!phoneInput.val()) {
            alert('Заполните телефон');
            return;
        }
        phoneInput.val('');
        addressInput.val('');
        productInput.val('');
        alert('Спасибо за заказ');
    });


    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 118, "density": {"enable": true, "value_area": 393.85584875935393}},
            "color": {"value": "#e3e3e3"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 0.3938558487593539,
                "random": true,
                "anim": {"enable": false, "speed": 3.5098075189649243, "opacity_min": 0.2233513875704952, "sync": false}
            },
            "size": {
                "value": 7.877116975187079,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2},
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "repulse"},
                "onclick": {"enable": true, "mode": "repulse"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 0.5}},
                "bubble": {"distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3},
                "repulse": {"distance": 200, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    $(document).ready(function() {
        $.scrolline({
            position: 'bottom',
            backColor: '#e0e0e0',
            frontColor: '#ff5722',
            weight: 3,
            opacity: 0.8,
            zindex: 10000,
        });
    });
}


