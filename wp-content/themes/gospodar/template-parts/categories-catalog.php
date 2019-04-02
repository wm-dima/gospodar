<div class="search-catalog__inside-show_catalog">
	<a href="javascript:void(0)">
		<div class="search-catalog__inside-show_catalog-inside">
			<div class="search-catalog__inside-show_catalog-inside__img"></div>
			<p>Каталог товаров</p>
		</div>
	</a>	
	<div class="catalog-min">
		<ul>
			<?php 
			$args = array(
			'taxonomy' => 'product_cat',
			'hide_empty' => false,
			'parent'   => 0
			);
			$product_cat = get_terms( $args );
			foreach ($product_cat as $parent_product_cat) : ?>
				<li>
					<a href="<?php echo get_term_link($parent_product_cat->term_id); ?>"><?php echo $parent_product_cat->name; ?>
					<?php 
					$child_args = array(
					'taxonomy' => 'product_cat',
					'hide_empty' => false,
					'parent'   => $parent_product_cat->term_id
					);
					$child_product_cats = get_terms( $child_args );
					if ($child_product_cats) :?>
						<img src="<?php echo get_template_directory_uri() ?>/assets/images/right-arrow.svg" alt="" class="catalog-arrow" width="7px">
						</a>
						<div class="catalog-additional">
							<ul>
								<?php
								foreach ($child_product_cats as $child_product_cat):
								?>
									<li>
										<a href="<?php echo get_term_link($child_product_cat->term_id); ?>">
											<?php echo $child_product_cat->name; ?>
										</a>
									</li>
								<?php 
								endforeach;?>
							</ul>
						</div>
					<?php
					else: ?>
						</a>
					<?php 
					endif;?>
				</li>
			<?php 
			endforeach;?>
		</ul>
	</div>
</div>