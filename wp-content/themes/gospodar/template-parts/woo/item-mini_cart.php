<?php global $product; 
if(empty($product)) return;
?>
<div class="best-offers__inside-items__item item-sale">
	<?php if ($product->is_on_sale()): ?>
		<div class="item-saleBlock">
			<?php if ($product->get_type() !== 'variable'): ?>
				-<span><?php echo get_percent_sale($product); ?></span>%
			<?php else: ?>
				<span>SALE</span>
			<?php endif ?>
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
			<?php if ($product->is_on_sale() && $product->get_sale_price() != '' && $product->get_regular_price() != '' ): ?>
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
						<?php echo $product->price; ?>
					</span> грн 
			<?php endif ?>
			</div>
			<div class="best-offers__inside-items__item-info__buy-inCart">
				<?php if ($product->stock_status == 'outofstock'): ?>
					<a href="javascript:void(0)" class="out-of-stock">На складе</a>
				<?php else: ?>
					<a 
						href="/shop/?add-to-cart=<?php echo $product->id; ?>" 
						data-quantity="1" 
						class="button product_type_simple add_to_cart_button ajax_add_to_cart" 
						data-product_id="<?php echo $product->id; ?>" 
						data-product_sku="" 
						rel="nofollow"
					>
						<?php if ($product->stock_status != 'outofstock'): ?>
							<img src="<?php echo get_template_directory_uri() ?>/assets/images/mbasket.png" alt="">
                            В корзину
                        <?php else: ?>
                            На складе
						<?php endif ?>
					</a>
				<?php endif ?>
			</div>
		</div>
	</div>	
</div>