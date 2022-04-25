import $ from 'jquery';
import { OrderForm } from './forms/order-form';

function init() {
    $('.slider').slick({
        slidesToShow: 4,
        prevArrow: '.slider-prev',
        nextArrow: '.slider-next'
    });

    new OrderForm();
}

$(document).ready(init);