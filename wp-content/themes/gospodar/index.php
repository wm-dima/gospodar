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
					<?php get_template_part( 'template-parts/woo/item', 'mini_cart' ); ?>
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