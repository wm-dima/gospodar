try{ 
	if (prodType == 'variable') {
		var variations = eval(document.querySelector('[data-product_variations]').getAttribute('data-product_variations'));
		var priceReg = document.querySelector('#price_reg');
	}
let priceSale = document.querySelector('#price_sale');
document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#select-color').addEventListener('click', function(e){
		if(e.target.closest('[for]')){
			let value = document.querySelector('#'+e.target.closest('[for]').getAttribute('for')).value
			document.querySelector('#pa_color').value = document.querySelector('#pa_color [value="'+value+'"]');
			variations.forEach(item => {
				if(item.attributes.attribute_pa_color == value){
					document.querySelector('.amazingslider-img-1 img').src = item.image.full_src;
					try{
						document.querySelector('[data-wm-slider-mini] .swiper-slide.swiper-slide-active img').src = item.image.full_src;
					} catch (er){}
					document.querySelector('[name="variation_id"]').value == item.variation_id;
					document.querySelector('[data-product_variations]').setAttribute('current-image', item.image_id);
					if (item.display_regular_price == item.display_price) {
						document.querySelector('#old-price').classList.add('wm-hid');
					} else {
						document.querySelector('#old-price').classList.remove('wm-hid');
					}
					priceReg.innerText = item.display_regular_price;
					priceSale.innerText = item.display_price;
				}
			})
		}

	});
	document.querySelector('#wm-add-to-cart').addEventListener('click', function(e){
		document.querySelector('.single_add_to_cart_button').click();
	});
});
} catch (er){}

function qnt_minus(e){
	e.preventDefault();
	let inp = document.querySelector('.quantity input');
	if (inp.min > inp.value - 1) return;
	--inp.value;
	document.querySelector('.quantity-block .quantity-num').value = inp.value;
}

function qnt_plus(e) {
	e.preventDefault();
	let inp = document.querySelector('.quantity input');
	if (inp.max != '' || inp.max > inp.value + 1) return;
	++inp.value;
	document.querySelector('.quantity-block .quantity-num').value = inp.value;
}
