<?php
if ( isset($_POST['quantity']) || isset($_POST['add-to-cart']) ) {
	global $woocommerce;
	session_start();
	$_SESSION['wm_woo_notices'] = $woocommerce->session->wc_notices;
	header('Location: '.$_SERVER['HTTP_REFERER']);
}
if (isset($_SESSION['wm_woo_notices'])) {
	session_start();
	global $woocommerce;
	$woocommerce->session->wc_notices = $_SESSION['wm_woo_notices'];
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title><?php the_title(); ?></title>
	<?php wp_head(); ?>
	<?php global $woocommerce, $WC; ?>
</head>
<body>
	<header>
		<div class="wrapper">
			<div class="header-inside">
				<div class="header-inside__logo">
					<a href="<?php echo get_home_url(); ?>">
						<img src="<?php echo esc_url( get_theme_mod( 'header_logo' ) ); ?>" alt="Header logo">
					</a>
				</div>
				<div class="header-inside__contacts">
					<div class="header-inside__contacts-img"></div>
					<div class="header-inside__contacts-text">
						<ul>
							<?php $phone = get_theme_mod( 'phone' ); ?>
							<li><a href="tel:<?php echo get_call_phobe($phone); ?>" class="header-phone"><?php echo $phone; ?></a></li>
							<li><?php echo get_theme_mod( 'address' ); ?></li>
						</ul>
					</div>
				</div>
				<div class="header-inside__part2">
					<div class="header-inside__part2-login">
						<div class="header-inside__part2-login__img"></div>
						<div class="header-inside__part2-login__text">
							<ul>
								<li>Личный кабинет</li>
								<li>
									<?php if (is_user_logged_in()): ?>
										<a href="" onclick="window.location.href = '<?php echo wp_logout_url(); ?>'" class="log-out">Выход</a>
									<?php else: ?>
										<a href="" onclick="$('.popup-formLog').toggleClass('popup-show')">Вход</a>
										|
										<a href="" onclick="$('.popup-formReg').toggleClass('popup-show')">Регистрация</a>
									<?php endif ?>
								</li>
							</ul>
						</div>
					</div>
					<div class="header-inside__part2-cart">
						<a class="cart-wrap-link" href="<?php echo wc_get_cart_url(); ?>">
							<div class="header-inside__part2-cart__img"></div>
						</a>
						<div class="header-inside__part2-cart__text">
							<a class="cart-wrap-link" href="<?php echo wc_get_cart_url(); ?>">
								<ul>
									<li>
										Корзина 
										<span>
											(<span class="quantity-positions"><?php echo $woocommerce->cart->cart_contents_count; ?></span>)
										</span> 
									</li>
									<li>
										Сумма: 
										<span>
											<span class="price"><?php echo number_format( WC()->cart->cart_contents_total, 2 ); ?> </span>
											грн
										</span>
									</li>
								</ul>
							</a>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</header>
	<?php get_template_part('template-parts/form', 'registration'); ?>
	<?php get_template_part('template-parts/form', 'login'); ?>
	<main>
		<div class="search-catalog">
			<div class="wrapper">
				<div class="search-catalog__inside">
					<?php get_template_part('template-parts/categories', 'catalog'); ?>
					<div class="search-catalog__inside-stock">
						<a href="">
							<div class="search-catalog__inside-stock-inside">
								<div class="search-catalog__inside-stock-inside__img"></div>
								<a href="">Акции</a>
							</div>
						</a>
					</div>
					<div class="search-catalog__inside-search">
						<?php get_template_part('template-parts/search', 'form'); ?>
					</div>
				</div>
			</div>
		</div>