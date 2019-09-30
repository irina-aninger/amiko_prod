// mobile menu

let mobileNav = document.querySelector('.mobile__navbar');

document.querySelector('.burger').addEventListener('click', function () {
    mobileNav.style.display = 'block';
    $('.header__cart').clone().removeClass('lg-3 md-4').appendTo('.mobile__navbar .mobile__cart');
    $('.navbar__wrapper').clone().appendTo('.mobile__wrapper')
});

close = document.querySelector('.mobile__navbar .close').addEventListener('click', function () {
    mobileNav.style.display = 'none';
    $('.mobile__cart .header__cart').remove();
    $('.mobile__wrapper .navbar__wrapper').remove()
});


// dropdown sidebar menu

$('.dropdown__item a').children('.arrow').click(function (el) {
    el.preventDefault();
    $(this).parents('.dropdown__item').toggleClass('active');
    $('.arrow').not(this).parents('.dropdown__item').removeClass('active')
});


// cart checked checkbox

let inputCheckbox = $('.cart__wrapper input[type="checkbox"]');

console.log(inputCheckbox);

const statusCheck = () => {
    if (inputCheckbox.length === inputCheckbox.filter(':checked').length) {
        $('.checked__all input').prop('checked', 'checked');
    } else {
        $('.checked__all input').prop('checked', '')
    }
};

statusCheck();

$('.cart__wrapper').change(statusCheck);

$('.checked__all input').click(function () {
    inputCheckbox.prop('checked', 'checked');
});


// product count

let count = document.querySelector('.count'),
    minus = document.querySelector('.minus'),
    plus  = document.querySelector('.plus');

minus.addEventListener('click', function () {
    if (count.value >= 1) {
        return count.value--
    }
});

plus.addEventListener('click', function () {
    count.value++
});


// product tabs

let volumeTabs = document.querySelector('.volume__tabs');

volumeTabs.addEventListener('click', function (e) {
    let volumeTab = document.querySelectorAll('.volume__tabs li');
    volumeTab.forEach( function (item) {
        item.classList.remove('active')
    });
    e.classList.add('active')
});


// product to top cart

let countCart = document.querySelector('.header__cart .cart__count'),
    addCart   = document.querySelector('#add-cart');

addCart.addEventListener('click', function () {
    if (count.value >= 1) {
        return countCart.innerHTML++
    }
});