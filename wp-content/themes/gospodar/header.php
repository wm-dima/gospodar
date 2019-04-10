<?php
if ( isset($_POST['quantity']) || isset($_POST['add-to-cart']) ) {
	global $woocommerce;
	session_start();
	$_SESSION['wm_woo_notices'] = $woocommerce->session->wc_notices;
	header('Location: '.$_SERVER['HTTP_REFERER']);
}
session_start();
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
<body id="the-id-<?php echo get_the_ID(); ?>">
	<header>
		<div class="wrapper">
			<div class="header-inside">
				<div class="header-inside__logo">
					<a href="<?php echo get_home_url(); ?>">
						<img src="<?php echo esc_url( get_theme_mod( 'header_logo' ) ); ?>" alt="the Header logo">
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
									<a href="javascript:void(0);" onclick="document.querySelector('.popup-formLog').classList.toggle('popup-show')">Вход</a>
									|
									<a href="javascript:void(0);" onclick="document.querySelector('.popup-formReg').classList.toggle('popup-show')">Регистрация</a>
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
				<div class="menu" onclick="document.querySelector('.mobile-menu').classList.toggle('mobile-menuShow')"></div>
				<div class="mobile-menu">
					<div class="mobile-menu__close" onclick="document.querySelector('.mobile-menu').classList.toggle('mobile-menuShow')"></div>
						<div class="header-inside__logo">
							<a href="<?php echo get_home_url(); ?>">
								<img src="<?php echo esc_url( get_theme_mod( 'header_logo' ) ); ?>" alt="the Header logo">
							</a>
						</div>
					<div class="mobile-menu__list">
						<ul>
							<li><a href="">О нас</a></li>
							<li><a href="">Каталог</a></li>
							<li><a href="">Новости</a></li>
							<li><a href="">Информация о доставке</a></li>
							<li><a href="">Политика безопасности</a></li>
							<li><a href="">Связаться с нами</a></li>
						</ul>
					</div>
					<div class="menuLine"></div>
					<div class="mobile-menu__login">
						<div class="mobile-menu__login-img"></div>
						<a href="">Вход </a>|<a href=""> Регистрация</a>
					</div>
					<div class="mobile-menu__cart">
						<div class="mobile-menu__cart-img"></div>
						<a href="">Корзина</a>
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
					<?php session_start(); ?>
					<div 
						class="search-catalog__inside-stock 
						<?php if ( isset( $_SESSION['only_in_stock'] ) && $_SESSION['only_in_stock']): ?>
							only_in_stock--ative 
						<?php endif ?>">
						<a href="javascript:void(0);" onclick="only_in_stock()">
							<div class="search-catalog__inside-stock-inside">
								<div class="search-catalog__inside-stock-inside__img"></div>
								<a href="javascript:void(0);" onclick="only_in_stock()">Акции</a>
							</div>
						</a>
					</div>
					<?php echo wm_render_only_stock_form(); ?>
					<div class="search-catalog__inside-search">
						<?php get_template_part('template-parts/search', 'form'); ?>
					</div>
				</div>
			</div>
		</div>