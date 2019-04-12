<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

get_header( 'shop' );

/**
 * Hook: woocommerce_before_main_content.
 *
 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
 * @hooked woocommerce_breadcrumb - 20
 * @hooked WC_Structured_Data::generate_website_data() - 30
 */
do_action( 'woocommerce_before_main_content' );

?>
	<?php
	/**
	 * Hook: woocommerce_archive_description.
	 *
	 * @hooked woocommerce_taxonomy_archive_description - 10
	 * @hooked woocommerce_product_archive_description - 10
	 */
	//do_action( 'woocommerce_archive_description' );
	?>
<?php
if ( woocommerce_product_loop() ) {

	/**
	 * Hook: woocommerce_before_shop_loop.
	 *
	 * @hooked woocommerce_output_all_notices - 10
	 * @hooked woocommerce_result_count - 20
	 * @hooked woocommerce_catalog_ordering - 30
	 */
	// do_action( 'woocommerce_before_shop_loop' );
	
?>
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

	woocommerce_product_loop_start();

	if ( wc_get_loop_prop( 'total' ) ) {
		while ( have_posts() ) {
			the_post();

			/**
			 * Hook: woocommerce_shop_loop.
			 *
			 * @hooked WC_Structured_Data::generate_product_data() - 10
			 */
			do_action( 'woocommerce_shop_loop' );

			wc_get_template_part( 'content', 'product' );
		}
	}

	woocommerce_product_loop_end();

	/**
	 * Hook: woocommerce_after_shop_loop.
	 *
	 * @hooked woocommerce_pagination - 10
	 */
	//do_action( 'woocommerce_after_shop_loop' );
} else {
	/**
	 * Hook: woocommerce_no_products_found.
	 *
	 * @hooked wc_no_products_found - 10
	 */
	do_action( 'woocommerce_no_products_found' );
}

/**
 * Hook: woocommerce_after_main_content.
 *
 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
 */
// do_action( 'woocommerce_after_main_content' );

/**
 * Hook: woocommerce_sidebar.
 *
 * @hooked woocommerce_get_sidebar - 10
 */
// do_action( 'woocommerce_sidebar' );

?>
                    </div>
                    <di class="wm-pagination">
                    	<?php woocommerce_pagination(); ?>
                    </di>
                    <div class="catalog-block__inside-downNav">
                        <div class="catalog-block__inside-downNav__found">
                            <p>
                                Найдено товаров:
                                <span class="found-quantity"><?php woocommerce_result_count(); ?></span>
                            </p>
                        </div>
                        <div class="catalog-block__inside-downNav__nav">
							<div class="pagination">
								<?php 
								$args = [
									'total' => $the_query->max_num_pages,
									'prev_text'    => __('<div></div>'),
									'next_text'    => __('<div></div>'),
								];
								echo paginate_links( $args );?>
							</div>
                        </div>
                    </div>
                    <?php get_template_part('template-parts/stock', 'offer'); ?>
					<?php get_template_part('template-parts/last', 'news'); ?>
                </div>
            </div>
        </div>
    </main>
<?php 

get_footer( 'shop' );
