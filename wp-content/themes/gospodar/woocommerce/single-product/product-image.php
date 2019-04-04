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
$attachment_ids = $product->get_gallery_image_ids();
?>
		<div id="product-gallery">
		    <div id="amazingslider-wrapper-1">
		        <div id="amazingslider-1">
		            <ul class="amazingslider-slides">
		                <li>
		            		<img src="<?php echo wp_get_attachment_image_url( $main_img_id, 'full' ) ?>" />
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
		            		<img src="<?php echo wp_get_attachment_image_url( $main_img_id, 'full' ) ?>" />
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
			<div class="swiper-container">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					<li class="swiper-slide">
		                <li>
		            		<img src="<?php echo wp_get_attachment_image_url( $main_img_id, 'full' ) ?>" />
		                </li>
		                <?php if (!empty($attachment_ids)): ?>
		                	<?php foreach ($attachment_ids as $key => $value): ?>
				                <li>
				            		<img src="<?php echo wp_get_attachment_image_url( $value, 'full' ) ?>" />
				                </li>	
		                	<?php endforeach ?>
		                <?php endif ?>
					</li>
				</div>
				<!-- If we need pagination -->
				<div class="swiper-pagination"></div>
				<!-- If we need navigation buttons -->
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
		</div>
		
        