<?php
/**
 * Show options for ordering
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/orderby.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<form class="woocommerce-ordering" method="get">
	<select id="select-ordering" name="orderby" class="orderby wm-hid"> 
		<?php foreach ( $catalog_orderby_options as $id => $name ) : ?>
			<option 
				id="option-<?php echo esc_attr( $id ); ?>" 
				value="<?php echo esc_attr( $id ); ?>" 
				<?php selected( $orderby, $id ); ?>
			>
				<?php echo esc_html( $name ); ?>
			</option>
		<?php endforeach; ?>
	</select>
	<div id="dd-wrapper">
		<span id="active-option"></span>
		<div id="dd-variants">
		<?php foreach ( $catalog_orderby_options as $id => $name ) : ?>
				<label 
					for="option-<?php echo esc_attr( $id ); ?>"
					value="<?php echo esc_attr( $id ); ?>" 
					<?php selected( $orderby, $id ); ?>
				>
					<?php echo esc_html( $name ); ?>
				</label>
		<?php endforeach; ?>
		</div>
	</div>
	<input type="hidden" name="paged" value="1" />
	<?php wc_query_string_form_fields( null, array( 'orderby', 'submit', 'paged', 'product-page' ) ); ?>
	<input type="submit" class="order-apply wm-hid" data-order-apply value="Применить">
</form>

<script>
	let ddWrapper = document.querySelector('#dd-wrapper');
	let ddResult = ddWrapper.querySelector('#active-option');
	let ddVariants = ddWrapper.querySelector('#dd-variants');

	ddResult.innerText = ddVariants.querySelector('[selected="selected"]').innerText;

	ddVariants.addEventListener('click', function(e){
		if (window.location.href.search( e.target.getAttribute('value') ) !== -1) {
			remove_get_param('orderby');
		} else {
			document.querySelector('#select-ordering').value = e.target.getAttribute('value');
			document.querySelector('form [data-order-apply]').classList.remove('wm-hid');
			ddResult.innerText = e.target.innerText;
			document.querySelector('form [data-order-apply]').click();
		}
	})
</script>