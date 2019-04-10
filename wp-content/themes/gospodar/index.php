<?php
/*
Template Name: index
*/
?>
<?php get_header(); ?>
<?php get_template_part('template-parts/main', 'slider'); ?>
<div class="free-delivery">
	<div class="wrapper">
		<div class="free-delivery__inside">
			<h4><?php echo get_field('main_subtitle', 5); ?></h4>
		</div>
	</div>
</div>
<?php get_template_part('template-parts/sale_main_page', 'banner'); ?>
<div class="best-offers boBody">
	<div class="wrapper">
		<div class="best-offers__inside">
			<h4><?php echo get_field('entry_word', 5) ?></h4>
			<div class="best-offers__inside-items" id="best-offers__inside-items">
				<?php 
				$ids = get_main_page_prod_ids();
				foreach ($ids as $key => $value): ?>
					<?php 
					$product = wc_get_product($value->ID);
					?>
					<div class="best-offers__inside-items__item item-sale">
						<?php if ($product->is_on_sale()): ?>
							<?php if ($product->get_type() !== 'variable'): ?>
								-<span><?php echo get_percent_sale($product); ?></span>%
							<?php else: ?>
								<span>SALE</span>
							<?php endif ?>
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
				<?php endforeach ?>
			</div>
		</div>
	</div>
</div>
<?php get_template_part('template-parts/stock', 'offer'); ?>
<?php get_template_part('template-parts/last', 'news'); ?>
	<div class="subscribe">
		<div class="wrapper">
			<div class="subscribe-inside">
				<div class="subscribe-inside__img"></div>
				<p>Для наших подписчиков - скидки, новинки и полезные советы</p>
				<?php echo do_shortcode( '[mc4wp_form id="216"]' ); ?>
			</div>
		</div>
	</div>
</main>
<?php get_footer(); ?>