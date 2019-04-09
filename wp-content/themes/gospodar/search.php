<?php
/*
Template Name: Search Page
*/
?>
<?php get_header(); ?>
<h1 data-ix="zagl1"><span class="reddest">Результаты поиска</span></h1>
<?php
if (have_posts()) :
	while (have_posts()) : the_post();?>
		<a href="<?php echo get_permalink(); ?>">get_permalink</a>
		<div class="name"><?php the_title(); ?></div>
	<?php endwhile;
else :
	echo "Извините по Вашему результату ничего не найдено";
endif;
?>	
<?php wp_reset_postdata(); ?>
<?php get_footer(); ?>