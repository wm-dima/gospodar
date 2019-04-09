	<footer>
		<div class="wrapper">
			<div class="footer-inside">
				<div class="footer-inside__left">
					<a href="">
						<img src="<?php echo esc_url( get_theme_mod( 'footer_logo' ) ); ?>" alt="Footer logo">
					</a>
					<p class="footer-inside__left-right_reserved">
						<?php echo get_theme_mod( 'copyright' ); ?>
					</p>
					<p class="footer-inside__left-dev">
						Сайт разработан компанией <a href="">LS MARKETING</a>
					</p>
				</div>
				<div class="footer-inside__right">
					<div class="footer-inside__right-nav">
						<ul>
							<li><a href="">О нас</a></li>
							<li><a href="">Информация о доставке</a></li>
							<li><a href="">Политика безопасности</a></li>
							<li><a href="">Условия соглашения</a></li>
							<li><a href="">Связаться с нами</a></li>
						</ul>
					</div>
					<div class="footer-inside__right-contacts">
						<p class="footer-inside__right-contacts__phone">
							<?php $phone = get_theme_mod( 'phone' ); ?>
							<a href="tel:<?php echo get_call_phobe($phone); ?>" class="header-phone"><?php echo $phone; ?></a>
						</p>
						<p class="footer-inside__right-contacts__adress">
							<?php echo get_theme_mod( 'address' ); ?>
						</p>
						<div class="footer-inside__right-contacts__watch-map">
							<a href="">
								<img src="<?php echo get_template_directory_uri() ?>/assets/images/watchMap.png" alt="">
								<span>Посмотреть на карте</span> 
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php wp_footer(); ?>
		<script>
		var xhttp = new XMLHttpRequest();
		xhttp.open('POST', '<?php echo  admin_url('admin-ajax.php') ?>?action=the_clean_session', true);
		xhttp.send();
		</script>
	</footer>
</html>
