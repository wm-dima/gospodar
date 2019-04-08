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

// echo "<pre>";
	                        		
// var_dump( get_class_methods( $product ) );
// var_dump( $product->get_regular_price() );
// die;

// $variations = $product->get_available_variations();
// var_dump( $variations[0]['image']['full_src'] );
// die;


// echo '<div class="summary entry-summary">';
woocommerce_template_single_add_to_cart();
// echo "<div>";
// die;

// wm_show_all_attributes($product->get_attributes());
// if ( function_exists('dynamic_sidebar') )
		// dynamic_sidebar('sidebar-0');

?>
<script>
	let prodType = '<?php echo $product->get_type(); ?>';
</script>
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
                                    <button class="quantity-arrow-minus">
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/minus.png" alt="">
                                    </button>
                                    <input class="quantity-num" type="number" value="1" />
                                    <button class="quantity-arrow-plus">
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

        
            <div class="stock-block">
                <div class="stock-block__inside">
                    <div class="stock-block__inside-text">
                        <p>Акционное предложение</p>
                        <p>Скидки на
                            <span class="stock-item">сковороды</span> до -
                            <span class="stock-value">25%</span>
                        </p>
                    </div>
                    <div class="stock-block__inside-img">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/skov.png" alt="">
                    </div>
                    <a href="" class="stock-block__inside-more">Подробнее</a>
                </div>
            </div>
		
		
		<div class="best-offers">
                <div class="wrapper">
                    <div class="best-offers__inside">
                        <h4>Похожие товары</h4>
                        <div class="catalog-block__inside-items">
                        <div class="catalog-block__inside-items__item item-sale">
							  <div class="item-saleBlock">
								  -<span>20</span>%
                              </div>
                                <a href="#" class="itemAnchor">
                                    <div class="catalog-block__inside-items__item-img">
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/item-1.jpg" alt="">
                                    </div>
                                </a>  
							  <div class="catalog-block__inside-items__item-info">
								<div class="catalog-block__inside-items__item-info__category">
									<p>
										Мелкая бытовая техника
									</p>
								</div>
								<a class="catalog-block__inside-items__item-info__name" href="#">
									Электрочайник из нержавеющей стали Midea
								</a>
								<div class="catalog-block__inside-items__item-info__buy">
									<div class="catalog-block__inside-items__item-info__buy-price">
										<p class="last-price">
											<span class="last-price-value">1300</span> грн
										</p>
										<p class="current-price-item">
											<span class="current-price-value">
												1190<sup> 17</sup>
											</span> грн 
										</p>
									</div>
									<div class="catalog-block__inside-items__item-info__buy-inCart">
										<a href="">
											<img src="<?php echo get_template_directory_uri(); ?>/assets/images/mbasket.png" alt="">
											В корзину
										</a>
									</div>
								</div>
							</div>	
                          </div>
                          <div class="catalog-block__inside-items__item item-sale">
							  <div class="item-saleBlock">
								  -<span>20</span>%
                              </div>
                                <a href="#" class="itemAnchor">
                                    <div class="catalog-block__inside-items__item-img">
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/item-1.jpg" alt="">
                                    </div>
                                </a>  
							  <div class="catalog-block__inside-items__item-info">
								<div class="catalog-block__inside-items__item-info__category">
									<p>
										Мелкая бытовая техника
									</p>
								</div>
								<a class="catalog-block__inside-items__item-info__name" href="#">
									Электрочайник из нержавеющей стали Midea
								</a>
								<div class="catalog-block__inside-items__item-info__buy">
									<div class="catalog-block__inside-items__item-info__buy-price">
										<p class="last-price">
											<span class="last-price-value">1300</span> грн
										</p>
										<p class="current-price-item">
											<span class="current-price-value">
												1190<sup> 17</sup>
											</span> грн 
										</p>
									</div>
									<div class="catalog-block__inside-items__item-info__buy-inCart">
										<a href="">
											<img src="<?php echo get_template_directory_uri(); ?>/assets/images/mbasket.png" alt="">
											В корзину
										</a>
									</div>
								</div>
							</div>	
                          </div>
                          <div class="catalog-block__inside-items__item item-sale">
							  <div class="item-saleBlock">
								  -<span>20</span>%
                              </div>
                                <a href="#" class="itemAnchor">
                                    <div class="catalog-block__inside-items__item-img">
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/item-1.jpg" alt="">
                                    </div>
                                </a>  
							  <div class="catalog-block__inside-items__item-info">
								<div class="catalog-block__inside-items__item-info__category">
									<p>
										Мелкая бытовая техника
									</p>
								</div>
								<a class="catalog-block__inside-items__item-info__name" href="#">
									Электрочайник из нержавеющей стали Midea
								</a>
								<div class="catalog-block__inside-items__item-info__buy">
									<div class="catalog-block__inside-items__item-info__buy-price">
										<p class="last-price">
											<span class="last-price-value">1300</span> грн
										</p>
										<p class="current-price-item">
											<span class="current-price-value">
												1190<sup> 17</sup>
											</span> грн 
										</p>
									</div>
									<div class="catalog-block__inside-items__item-info__buy-inCart">
										<a href="">
											<img src="<?php echo get_template_directory_uri(); ?>/assets/images/mbasket.png" alt="">
											В корзину
										</a>
									</div>
								</div>
							</div>	
                          </div>
                          <div class="catalog-block__inside-items__item item-sale">
							  <div class="item-saleBlock">
								  -<span>20</span>%
                              </div>
                                <a href="#" class="itemAnchor">
                                    <div class="catalog-block__inside-items__item-img">
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/item-1.jpg" alt="">
                                    </div>
                                </a>  
							  <div class="catalog-block__inside-items__item-info">
								<div class="catalog-block__inside-items__item-info__category">
									<p>
										Мелкая бытовая техника
									</p>
								</div>
								<a class="catalog-block__inside-items__item-info__name" href="#">
									Электрочайник из нержавеющей стали Midea
								</a>
								<div class="catalog-block__inside-items__item-info__buy">
									<div class="catalog-block__inside-items__item-info__buy-price">
										<p class="last-price">
											<span class="last-price-value">1300</span> грн
										</p>
										<p class="current-price-item">
											<span class="current-price-value">
												1190<sup> 17</sup>
											</span> грн 
										</p>
									</div>
									<div class="catalog-block__inside-items__item-info__buy-inCart">
										<a href="">
											<img src="<?php echo get_template_directory_uri(); ?>/assets/images/mbasket.png" alt="">
											В корзину
										</a>
									</div>
								</div>
							</div>	
						</div>
                    </div>
                    </div>
                </div>
            </div>
    </main>

<?php get_footer( 'shop' );

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
