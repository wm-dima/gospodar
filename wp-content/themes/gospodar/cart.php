<?php
/*
Template Name: the_cart
*/
?>
<?php get_header(); ?>
<?php woocommerce_breadcrumb(); ?>
<?php echo do_shortcode( '[woocommerce_cart]' ); ?>
<?php get_footer(); ?>
