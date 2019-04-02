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
					<a href=""><img src="<?php echo get_template_directory_uri() ?>/assets/images/logo.png" alt=""></a>
				</div>
				<div class="header-inside__contacts">
					<div class="header-inside__contacts-img"></div>
					<div class="header-inside__contacts-text">
						<ul>
							<li>+38 (067) 613-33-06</li>
							<li>г.Мелитополь, ул. Интеркультурная, 38</li>
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