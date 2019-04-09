<?php
/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

get_header( 'shop' );
$product =  wc_get_product(get_the_ID());
$main_img_id = $product->get_image_id();
$attachment_ids = $product->get_gallery_image_ids();

/*
get_variation_attributes - только те ЗНАЧЕНИЯ атрибутов, которые использовались для вариации
get_variation_default_attribute - Выводит выбор опций вариативного товара.
get_attributes - все атрибуты 
get_default_attributes - только те ЗНАЧЕНИЯ атрибутов, которые использовались для сравнения
get_variation_default_attributes - только те ЗНАЧЕНИЯ атрибутов, которые использовались для сравнения
wc_display_product_attributes($product) - просто список всех атрибутов товара

*/
?>
<div class="wm-hid">
	<?php woocommerce_template_single_add_to_cart(); ?>
</div>
<script>
	let prodType = '<?php echo $product->get_type(); ?>';
</script>
		<?php get_msgs(); ?>
		<?php wc_print_notices(); ?>
		<?php woocommerce_breadcrumb(); ?>
        <div class="wrapper">
            <div id="product">
            	<?php woocommerce_show_product_images(); ?>
                <div id="product-info">
                    <div id="product-info__first">
                        <h3 id="product-info__first-name"><?php the_title(); ?></h3>
                        <?php if ( $sku = $product->get_sku() ): ?>
	                        <p id="product-info__first-articul">
	                            Код товара: <span><?php echo $sku; ?></span>
	                        </p>
                        <?php endif ?>
                    </div>
                    <div id="product-info__specifications">
                        <ul>
                        	<?php echo wm_show_all_attributes($product->get_attributes()); ?>
                        </ul>
                    </div>

                    <div class="product-info__properties">
                        <!-- <form action=""> -->
                            <div class="product-info__properties-color" id="select-color">
	                        	<div id="product-form" class="wm-hid">
		                        	<?php //woocommerce_template_single_add_to_cart(); ?>
	                        	</div>
	                        	<?php echo get_color_variation($product); ?>
                            </div>
                            <div class="product-info__properties-quantity">
                                <p>Количество</p>
                                <div class="quantity-block">
                                    <button class="quantity-arrow-minus" onclick="qnt_minus(event)">
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/minus.png" alt="">
                                    </button>
                                    <input class="quantity-num" type="number" value="1" />
                                    <button class="quantity-arrow-plus" onclick="qnt_plus(event)">
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/plus.png" alt="">
                                    </button>
                                </div>
                                <span>(Оптовая цена от 3 шт.)</span>
                            </div>
                            <div class="product-info__properties-price">
                            	<?php if ($product->get_type() == 'simple'): ?>
                            		<?php if ($product->is_on_sale()): ?>
		                                <p class="product-info__properties-price__last">
		                                    Старая цена:
		                                    <span><?php echo $product->get_sale_price(); ?> грн</span>
		                                </p>
                            		<?php endif ?>
	                                <div class="product-info__properties-price__current">
	                                    <p><?php echo $product->get_regular_price(); ?> грн</p>
	                                </div>
                              	<?php else: ?>
                              		<p class="product-info__properties-price__last" id="old-price">
	                                    Старая цена:
	                                    <span id="price_reg"></span>
	                                </p>
                              		<div class="product-info__properties-price__current">
	                                    <p id="price_sale"></p>
	                                    <span class="before-price">Выберите вариацию товара</span>
	                                </div>
                            	<?php endif ?>
                            </div>
                            <div class="product-add">
                                <button id="wm-add-to-cart">
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/cart.png" alt=""> Добавить в корзину
                                </button>
                                <button>
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/oneClick.png" alt=""> Купить в один клик
                                </button>
                            </div>
                        <!-- </form> -->
                    </div>
                </div>
            </div>
            
        </div>
        <?php get_template_part('template-parts/stock', 'offer'); ?>
		<div class="best-offers">
                <div class="wrapper">
                    <div class="best-offers__inside">
                    	<?php 
						$upsell_ids = $product->get_upsell_ids();
                    	if (!empty($upsell_ids)): ?>                    		
	                        <h4>Похожие товары</h4>
	                        <div class="catalog-block__inside-items">
							<?php
							foreach ($upsell_ids as $id): ?>
							<?php 
								$product = wc_get_product($id);
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
							<?php endforeach ?>
							</div>
                		<?php endif ?>
                    </div>
                    </div>
                </div>
            </div>
    </main>

<?php get_footer( 'shop' );

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
