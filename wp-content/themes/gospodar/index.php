<?php
/*
Template Name: index
*/
?>
<?php get_header(); ?>
		  <?php wm_before_products(); ?>
		  <div class="best-offers">
			  <div class="wrapper">
				  <div class="best-offers__inside">
					  <h4><?php echo get_field('entry_word', 5) ?></h4>
					  <div class="best-offers__inside-items">
					  	<?php 
				  		$ids = get_main_page_prod_ids();
						foreach ($ids as $key => $value): ?>
							<?php 
								$product = wc_get_product($value->ID);
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
				  </div>
			  </div>
		  </div>
		  <div class="stock-block">
			  <div class="wrapper">
				  <div class="stock-block__inside">
					  <div class="stock-block__inside-text">
						<p>Акционное предложение</p>
						<p>Скидки на 
							<span class="stock-item">сковороды</span> до 
							-<span class="stock-value">25%</span>
						</p>
					  </div>
					  <div class="stock-block__inside-img">
						  <img src="<?php echo get_template_directory_uri() ?>/assets/images/skov.png" alt="">
					  </div>
					  <a href="" class="stock-block__inside-more">Подробнее</a>
				  </div>
			  </div>
		  </div>
		  <div class="news">
			  <div class="wrapper">
				  <h4>Новости, статьи, обзоры</h4>
				  <div class="news-inside">
						<div class="news-inside__article">
							<div class="news-inside__article-img">
								<img src="<?php echo get_template_directory_uri() ?>/assets/images/article.jpg" alt="">
							</div>
							<div class="news-inside__article-text">
								<p class="news-inside__article-text__date">
									15 марта, 2019
								</p>
								<a class="news-inside__article-text__name" href="#">
									Как избавиться от неприятного запаха в квартире?
								</a>
								<p class="news-inside__article-text__text">
									Нет ничего хуже неприятного запаха в квартире. Избавиться от него может быть совсем не просто. Куда хуже, если сами хозяева привыкают к нему и перестают его...							
								</p>
							</div>	
							<div class="news-inside__article-stat">
								<div class="news-inside__article-stat__comments">
									<div class="news-inside__article-stat__comments-img"></div>
									<span class="comments-quantity">245</span>
								</div>
								<div class="news-inside__article-stat__seens">
									<div class="news-inside__article-stat__seens-img"></div>
									<span class="seens-quantity">54</span>
								</div>
							</div>
						</div>
						<div class="news-inside__article">
							<div class="news-inside__article-img">
								<img src="<?php echo get_template_directory_uri() ?>/assets/images/article.jpg" alt="">
							</div>
							<div class="news-inside__article-text">
								<p class="news-inside__article-text__date">
									15 марта, 2019
								</p>
								<a class="news-inside__article-text__name" href="#">
									Как избавиться от неприятного запаха в квартире?
								</a>
								<p class="news-inside__article-text__text">
									Нет ничего хуже неприятного запаха в квартире. Избавиться от него может быть совсем не просто. Куда хуже, если сами хозяева привыкают к нему и перестают его...							
								</p>
							</div>	
							<div class="news-inside__article-stat">
								<div class="news-inside__article-stat__comments">
									<div class="news-inside__article-stat__comments-img"></div>
									<span class="comments-quantity">245</span>
								</div>
								<div class="news-inside__article-stat__seens">
									<div class="news-inside__article-stat__seens-img"></div>
									<span class="seens-quantity">54</span>
								</div>
							</div>
						</div>
						<div class="news-inside__article">
							<div class="news-inside__article-img">
								<img src="<?php echo get_template_directory_uri() ?>/assets/images/article.jpg" alt="">
							</div>
							<div class="news-inside__article-text">
								<p class="news-inside__article-text__date">
									15 марта, 2019
								</p>
								<a class="news-inside__article-text__name" href="#">
									Как избавиться от неприятного запаха в квартире?
								</a>
								<p class="news-inside__article-text__text">
									Нет ничего хуже неприятного запаха в квартире. Избавиться от него может быть совсем не просто. Куда хуже, если сами хозяева привыкают к нему и перестают его...							
								</p>
							</div>	
							<div class="news-inside__article-stat">
								<div class="news-inside__article-stat__comments">
									<div class="news-inside__article-stat__comments-img"></div>
									<span class="comments-quantity">245</span>
								</div>
								<div class="news-inside__article-stat__seens">
									<div class="news-inside__article-stat__seens-img"></div>
									<span class="seens-quantity">54</span>
								</div>
							</div>
						</div>
						<div class="news-inside__article">
							<div class="news-inside__article-img">
								<img src="<?php echo get_template_directory_uri() ?>/assets/images/article.jpg" alt="">
							</div>
							<div class="news-inside__article-text">
								<p class="news-inside__article-text__date">
									15 марта, 2019
								</p>
								<a class="news-inside__article-text__name" href="#">
									Как избавиться от неприятного запаха в квартире?
								</a>
								<p class="news-inside__article-text__text">
									Нет ничего хуже неприятного запаха в квартире. Избавиться от него может быть совсем не просто. Куда хуже, если сами хозяева привыкают к нему и перестают его...							
								</p>
							</div>	
							<div class="news-inside__article-stat">
								<div class="news-inside__article-stat__comments">
									<div class="news-inside__article-stat__comments-img"></div>
									<span class="comments-quantity">245</span>
								</div>
								<div class="news-inside__article-stat__seens">
									<div class="news-inside__article-stat__seens-img"></div>
									<span class="seens-quantity">54</span>
								</div>
							</div>
						</div>
				  </div>
			  </div>
		  </div>
		  <div class="subscribe">
			  <div class="wrapper">
				  <div class="subscribe-inside">
					  <div class="subscribe-inside__img"></div>
					  <p>Для наших подписчиков - скидки, новинки и полезные советы</p>
					  <form action="">
						  <input type="text" placeholder="Введите свой Email для подписки на новости">
						  <input type="submit" value="Подписаться">
					  </form> 
					</div>
			  </div>
		  </div>
	</main>
<?php get_footer(); ?>