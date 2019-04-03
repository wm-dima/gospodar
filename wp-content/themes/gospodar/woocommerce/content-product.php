<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>
<div class="best-offers__inside-items__item item-sale">
	<?php if ($product->is_on_sale()): ?>
		<div class="item-saleBlock">
			-<span><?php echo get_percent_sale($product); ?></span>%
		</div>
	<?php elseif(is_new_product($product->date_created)): ?>
			<div class="item-new">
				<div class="item-newBlock">
					NEW
				</div>
			</div>
	<?php endif ?>
	<a href="<?php echo get_permalink( $product->id ); ?>">
		<div class="best-offers__inside-items__item-img">
			<img src="<?php echo wm_get_main_img_url( $product->id ); ?>" alt="">
		</div>
	</a>
	<div class="best-offers__inside-items__item-info">
		<div class="best-offers__inside-items__item-info__category">
			<p><?php echo get_term( $product->category_ids[0] )->name; ?></p>
		</div>
		<a href="<?php echo get_permalink( $product->id); ?>" class="best-offers__inside-items__item-info__name">
			<?php echo $product->name; ?>
		</a>
		<div class="best-offers__inside-items__item-info__buy">
			<div class="best-offers__inside-items__item-info__buy-price">
				<?php if ($product->is_on_sale()): ?>
					<p class="last-price">
						<span class="last-price-value"><?php echo $product->get_regular_price(); ?></span> грн
					</p>
					<p class="current-price-item">
						<span class="current-price-value">
							<?php echo $product->get_sale_price(); ?>
						</span> грн 
					</p>
					<?php else: ?>
						<span class="current-price-value">
							<?php echo $product->get_regular_price(); ?>
						</span> грн 
				<?php endif ?>
			</div>
			<div class="best-offers__inside-items__item-info__buy-inCart">
				<?php if ($product->stock_status == 'outofstock'): ?>
					<a href="javascript:void(0)" class="out-of-stock">Нет в наличие</a>
					<?php else: ?>
						<a 
						href="/shop/?add-to-cart=<?php echo $product->id; ?>" 
						data-quantity="1" 
						class="button product_type_simple add_to_cart_button ajax_add_to_cart" 
						data-product_id="<?php echo $product->id; ?>" 
						data-product_sku="" 
						rel="nofollow"
						>
						<img src="<?php echo get_template_directory_uri() ?>/assets/images/mbasket.png" alt="">
						В корзину
					</a>
				<?php endif ?>
			</div>
		</div>
	</div>	
</div>

	
	<?php
	/**
	 * Hook: woocommerce_before_shop_loop_item.
	 *
	 * @hooked woocommerce_template_loop_product_link_open - 10
	 */
	// do_action( 'woocommerce_before_shop_loop_item' );

	/**
	 * Hook: woocommerce_before_shop_loop_item_title.
	 *
	 * @hooked woocommerce_show_product_loop_sale_flash - 10
	 * @hooked woocommerce_template_loop_product_thumbnail - 10
	 */
	// do_action( 'woocommerce_before_shop_loop_item_title' );

	/**
	 * Hook: woocommerce_shop_loop_item_title.
	 *
	 * @hooked woocommerce_template_loop_product_title - 10
	 */
	// do_action( 'woocommerce_shop_loop_item_title' );

	/**
	 * Hook: woocommerce_after_shop_loop_item_title.
	 *
	 * @hooked woocommerce_template_loop_rating - 5
	 * @hooked woocommerce_template_loop_price - 10
	 */
	// do_action( 'woocommerce_after_shop_loop_item_title' );

	/**
	 * Hook: woocommerce_after_shop_loop_item.
	 *
	 * @hooked woocommerce_template_loop_product_link_close - 5
	 * @hooked woocommerce_template_loop_add_to_cart - 10
	 */
	// do_action( 'woocommerce_after_shop_loop_item' );
	?>
