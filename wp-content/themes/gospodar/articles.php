<?php
/*
Template Name: статьи 
*/
?>
<?php get_header(); ?>
<div class="news">
<div class="wrapper">
	<h4>Новости, статьи, обзоры</h4>
	<div class="news-inside news-insideMain">
		<?php 
		$the_query = new WP_Query( array(
			'paged' => get_query_var( 'paged', 1 ),
			'post_type' => 'post',
			'post_status' => 'publish',
			'posts_per_page' => 8,
		)); 
		$_monthsList = [
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
		];
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
							$month = date( '.m.', strtotime( $post->post_date ) );
							echo str_replace( $month , $_monthsList[$month], $now);
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
		<div class="pagination">
			<?php echo paginate_links( array ('total' => $the_query->max_num_pages ));?>
		</div>
	</div>
</div>
<?php get_footer(); ?>
