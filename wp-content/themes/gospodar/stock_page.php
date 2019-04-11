<?php
/*
Template Name: акции 
*/
?>
<?php get_header(); ?>
<div class="catalog-block">
    <div class="wrapper">
        <div class="catalog-block__inside">
            <div class="catalog-block__inside-info">
                <div class="catalog-block__inside-info__name">
                   <h2><?php woocommerce_page_title(); ?></h2>
                </div>
                <div class="catalog-block__inside-info__sort">
                    <div class="catalog-block__inside-info__sort-name">
                        <p>Сортировать по: </p>
                    	<?php woocommerce_catalog_ordering(); ?>
                    </div>
                    <div class="catalog-block__inside-info__sort-quantity">
                        <p>Показывать по: </p>
                        <?php get_template_part('template-parts/woo/per', 'page'); ?>
                    </div>
                </div>
            </div>
            <div class="catalog-block__inside-items">
<?php
$page = get_query_var('paged') ? get_query_var('paged') : 1;
$args = array(
    'limit' => isset($_GET['per_page']) ? $_GET['per_page'] : 20,
    'page'  => $page,
    'paginate' => true,
    'include' => wc_get_product_ids_on_sale(),
);
$results = wc_get_products( $args );

if ( !empty($results->products)) {
	foreach ($results->products as $key => $value) {
		$product = wc_get_product($value->get_id());
		get_template_part( 'template-parts/woo/item', 'mini_cart' );
	}
} else {
	echo __( 'No products found' );
}


$total   = $results->max_num_pages;
$current = $page;
$base    = isset( $base ) ? $base : esc_url_raw( str_replace( 999999999, '%#%', remove_query_arg( 'add-to-cart', get_pagenum_link( 999999999, false ) ) ) );
?>


                    </div>
                    <di class="wm-pagination">
						<?php
							echo paginate_links( apply_filters( 'woocommerce_pagination_args', array( // WPCS: XSS ok.
								'base'         => $base,
								'format'       => $format,
								'add_args'     => false,
								'current'      => max( 1, $current ),
								'total'        => $total,
								'prev_text'    => '&larr;',
								'next_text'    => '&rarr;',
								'type'         => 'list',
								'end_size'     => 3,
								'mid_size'     => 3,
							) ) );
						?>
                    </di>
                    <div class="catalog-block__inside-downNav">
                        <div class="catalog-block__inside-downNav__found">
                            <p>
                                Найдено товаров:
                                <span class="found-quantity"><?php echo $results->total; ?></span>
                            </p>
                        </div>
                        <div class="catalog-block__inside-downNav__nav">

                        </div>
                    </div>
                    <?php get_template_part('template-parts/stock', 'offer'); ?>
					<?php get_template_part('template-parts/last', 'news'); ?>
                </div>
            </div>
        </div>
    </main>

<?php get_footer(); ?>
