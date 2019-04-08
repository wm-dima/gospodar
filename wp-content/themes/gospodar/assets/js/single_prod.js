if (prodType == 'variable') {
	let variations = eval(document.querySelector('[data-product_variations]').getAttribute('data-product_variations'));
	let priceReg = document.querySelector('#price_reg');
}
let priceSale = document.querySelector('#price_sale');
document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#select-color').addEventListener('click', function(e){
		if(e.target.closest('[for]')){
			let value = document.querySelector('#'+e.target.closest('[for]').getAttribute('for')).value
			document.querySelector('#pa_color').value = value;
			variations.forEach(item => {
				if(item.attributes.attribute_pa_color == value){
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