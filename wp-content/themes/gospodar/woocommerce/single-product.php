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
?>
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
                            <li><span class="specification">Материал корпуса:</span><span class="specification-answer">Металл/Пластик</span></li>
                            <li><span class="specification">Материал корпуса:</span><span class="specification-answer">Металл/Пластик</span></li>
                            <li><span class="specification">Материал корпуса:</span><span class="specification-answer">Металл/Пластик</span></li>
                            <li><span class="specification">Материал корпуса:</span><span class="specification-answer">Металл/Пластик</span></li>
                            <li><span class="specification">Материал корпуса:</span><span class="specification-answer">Металл/Пластик</span></li>
                            <li><span class="specification">Материал корпуса:</span><span class="specification-answer">Металл/Пластик</span></li>
                            <li><span class="specification">Материал корпуса:</span><span class="specification-answer">Металл/Пластик</span></li>
                        </ul>
                    </div>

                    <div class="product-info__properties">
                        <form action="">
                            <div class="product-info__properties-color">
                                <input type="radio" id="product-black" name="color" value="black" checked="checked">
                                <label for="product-black">
                                    <div id="black"></div>
                                </label>

                                <input type="radio" id="product-red" name="color" value="red">
                                <label for="product-red">
                                    <div id="red"></div>
                                </label>

                                <input type="radio" id="product-green" name="color" value="green">
                                <label for="product-green">
                                    <div id="green"></div>
                                </label>

                                <input type="radio" id="product-white" name="color" value="white">
                                <label for="product-white">
                                    <div id="white"></div>
                                </label>

                                <input type="radio" id="product-blue" name="color" value="blue">
                                <label for="product-blue">
                                    <div id="blue"></div>
                                </label>
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
                                <p class="product-info__properties-price__last">
                                    Старая цена:
                                    <span>1120 грн</span>
                                </p>
                                <div class="product-info__properties-price__current">
                                    <p>1049 грн</p>
                                </div>
                            </div>
                            <div class="product-add">
                                <button>
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/cart.png" alt=""> Добавить в корзину
                                </button>
                                <button>
                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/oneClick.png" alt=""> Купить в один клик
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="wrapper">
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
