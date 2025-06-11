window.onload = function () {
    new WOW(
        {
            animateClass: 'animate__animated',
        }
    ).init();


    $('document').ready(function () {

        $('.product-item').addClass('js-tilt');

        const tilt = $('.js-tilt').tilt({
            scale: 1.1,
        })
    })


    $('.products-title').css('color', '#ffffff').css('font-size', '45px')
    $('.product').css('padding-top', '80px').css('padding-bottom', '80px')

    let productInput = $('#product-input');
    productInput.attr('placeholder', 'Имя');
    $('.rights span').text(new Date().getFullYear());


    let products = $(".product");



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

    $('#burger').click(function () {
        $('#menu').addClass('open');
    });

    $('#menu *').click(function () {
        $('#menu').removeClass('open');
    });

    $('#choose-pizza').click(function () {
        $('.products')[0].scrollIntoView({behavior: "smooth"});
    });


    let addToCartButtons = $('.add-to-cart-pizza');

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
}


if (!localStorage.getItem('cookieAccepted')) {
    $('.cookie').show();
}
$('.cookie-accept').click(() => {
    $('.cookie').hide();
    localStorage.setItem('cookieAccepted', '1');
});


let cookie = {
    set: (name, value, options) => {
        if(!name || !value){
            return null;
        }
        let string = name + '=' + value;
        if(options){
            string += ';' + options;
        }
        document.cookie = string;
        return cookie;
    },
    get: (name)=>{
        const value = "; " + document.cookie;
        const parts = value.split(`; ${name}=`);
        if(parts.length === 2){
            return parts.pop().split(';').shift();
        }
    },
    delete: (name)=>{
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}