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
		$_monthsList = array(
			".01." => "января",
			".02." => "февраля",
			".03." => "марта",
			".04." => "апреля",
			".05." => "мая",
			".06." => "июня",
			".07." => "июля",
			".08." => "августа",
			".09." => "сентября",
			".10." => "октября",
			".11." => "ноября",
			".12." => "декабря"
		);
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
							<?php 
							$now =  date( 'j  .m., Y', strtotime( $post->post_date ) );
							echo str_replace(date('.m.', time()), $_monthsList, $now);
							?>
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