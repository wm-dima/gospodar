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
						<p><?php echo get_field('title_special_offer', 5); ?></p>
						<p><?php echo get_field('subtitle_special_offer', 5); ?></p>
					  </div>
					  <div class="stock-block__inside-img">
						  <img src="<?php echo get_field('img__special_offer', 5); ?>" alt="">
					  </div>
					  <a href="" class="stock-block__inside-more">Подробнее</a>
				  </div>
			  </div>
		  </div>
		  <div class="news">
			    <div class="wrapper">
				    <h4>Новости, статьи, обзоры</h4>
				    <div class="news-inside">
					<?php 
						$the_query = new WP_Query( array(
						'post_type' => 'post',
						'post_status' => 'publish',
						'posts_per_page' => 4,
						)); 
					if ( $the_query->have_posts() ) : 
						while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
							<div class="news-inside__article">
								<a href="<?php echo get_permalink($post->id); ?>">
									<div class="news-inside__article-img">
										<img src="<?php
										$img = get_the_post_thumbnail_url( $post, 'medium' );
											echo  $img ? $img : get_template_directory_uri() . '/assets/images/article.jpg'
										?>" 
										alt="">
									</div>
								</a>
								<div class="news-inside__article-text">
									<p class="news-inside__article-text__date">
										15 марта, 2019
									</p>
									<a class="news-inside__article-text__name" href="<?php echo get_permalink($post->id); ?>">
										<?php the_title(); ?>
									</a>
									<p class="news-inside__article-text__text">
										 <?php the_excerpt(); ?>						
									</p>
								</div>	
								<div class="news-inside__article-stat">
									<div class="news-inside__article-stat__comments">
										<div class="news-inside__article-stat__comments-img"></div>
										<span class="comments-quantity"><?php echo get_comments_number($post->id); ?></span>
									</div>
									<div class="news-inside__article-stat__seens">
										<div class="news-inside__article-stat__seens-img"></div>
										<span class="seens-quantity"><?php echo get_post_meta( get_the_ID(), 'viewed' )[0]; ?></span>
									</div>
								</div>
							</div>
						<?php endwhile; wp_reset_postdata(); ?>
					<?php else : ?>
						<p>Пока еще нет записей</p>
					<?php endif; ?>
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