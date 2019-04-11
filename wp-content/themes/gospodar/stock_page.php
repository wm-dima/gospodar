<?php
/*
Template Name: акции 
*/
?>
<?php get_header(); ?>
<pre>
<?php
$page = get_query_var('paged') ? get_query_var('paged') : 1;
$args = array(
    'limit' => 2,
    'page'  => $page,
    'paginate' => true,
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
if ( $total <= 1 ) {
	return;
}
?>
<nav class="pagination">
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
</nav>

</pre>
<?php get_footer(); ?>
