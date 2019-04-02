<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title><?php the_title(); ?></title>
	<?php wp_head(); ?>
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
									<a href="">Вход</a>
									|
									<a href="">Регистрация</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="header-inside__part2-cart">
						<div class="header-inside__part2-cart__img"></div>
						<div class="header-inside__part2-cart__text">
							<ul>
								<li>
									Корзина 
									<span>
										(<span class="quantity-positions">5</span>)
									</span> 
								</li>
								<li>
									Сумма: 
									<span>
										<span class="price">6500 </span>
										грн
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</header>
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

