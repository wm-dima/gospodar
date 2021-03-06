<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.5.1
 */

defined( 'ABSPATH' ) || exit;

// Note: `wc_get_gallery_image_html` was added in WC 3.3.2 and did not exist prior. This check protects against theme overrides being used on older versions of WC.
if ( ! function_exists( 'wc_get_gallery_image_html' ) ) {
	return;
}

global $product;

$main_img_id = $product->get_image_id();
$main_img = wp_get_attachment_image_url( $main_img_id, 'full' );
$main_img = empty($main_img) ? get_template_directory_uri() . '/assets/images/no_image.png' : $main_img;
$attachment_ids = $product->get_gallery_image_ids();
?>
		<div id="product-gallery">
		    <div id="amazingslider-wrapper-1">
		        <div id="amazingslider-1">
		            <ul class="amazingslider-slides">
		                <li>
		            		<img src="<?php echo $main_img; ?>" />
		                </li>
		                <?php if (!empty($attachment_ids)): ?>
		                	<?php foreach ($attachment_ids as $key => $value): ?>
				                <li>
				            		<img src="<?php echo wp_get_attachment_image_url( $value, 'full' ) ?>" />
				                </li>	
		                	<?php endforeach ?>
		                <?php endif ?>
		            </ul>
		            <ul class="amazingslider-thumbnails">
		                <li>
		            		<img src="<?php echo $main_img; ?>" />
		                </li>
		                <?php if (!empty($attachment_ids)): ?>
		                	<?php foreach ($attachment_ids as $key => $value): ?>
				                <li>
				            		<img src="<?php echo wp_get_attachment_image_url( $value, 'full' ) ?>" />
				                </li>	
		                	<?php endforeach ?>
		                <?php endif ?>
		            </ul>

		        </div>
			</div>
			<div class="swiper-container" data-wm-slider-mini>
				<div class="swiper-wrapper">
					<li class="swiper-slide"><img src="<?php echo $main_img; ?>" /></li>
	                <?php if (!empty($attachment_ids)): ?>
	                	<?php foreach ($attachment_ids as $key => $value): ?>
			                <li class="swiper-slide"><img src="<?php echo wp_get_attachment_image_url( $value, 'full' ) ?>" /></li>
	                	<?php endforeach ?>
	                <?php endif ?>
				</div>
				<div class="swiper-pagination"></div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
		</div>
		
        