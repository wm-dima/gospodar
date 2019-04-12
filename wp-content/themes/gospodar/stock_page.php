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
			$args = [
				'total' => $the_query->max_num_pages,
				'prev_text'    => __('<div></div>'),
				'next_text'    => __('<div></div>'),
			];
			echo paginate_links( $args );?>
</nav>

</pre>
<?php get_footer(); ?>
