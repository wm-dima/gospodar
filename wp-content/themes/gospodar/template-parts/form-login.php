<div class="popup-formLog">
	<div class="popup-form__log">
		<div class="popup-name">
			<p>Авторизация</p>
		</div>
		<div class="popup-inputs">
	   <!-- <form action="">
				<input type="text" placeholder="Введите ваш логин">
				<input type="text" placeholder="Введите ваш пароль">
				<button>Войти</button>
			</form> -->

		<form method="post" class="wc-auth-login">
			
				<label for="username"><?php esc_html_e( 'Username or email address', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
				<input type="text" class="input-text" name="username" id="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( $_POST['username'] ) : ''; ?>" /><?php //@codingStandardsIgnoreLine ?>
			
				<label for="password"><?php esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
				<input class="input-text" type="password" name="password" id="password" />
			
				<?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
				<button type="submit" class="button button-large button-primary wc-auth-login-button" name="login" value="<?php esc_attr_e( 'Login', 'woocommerce' ); ?>"><?php esc_html_e( 'Login', 'woocommerce' ); ?></button>
				<input type="hidden" name="redirect" value="<?php echo esc_url( $redirect_url ); ?>" />
			
		</form>

		</div>
	<div class="login-socials">
			<p>Вход через социальные сети</p>
			<div class="login-socials__block">
				<a href=""><img src="<?php echo get_template_directory_uri(); ?>/assets/images/f.png" alt=""></a>
				<a href=""><img src="<?php echo get_template_directory_uri(); ?>/assets/images/g+.png" alt=""></a>
				<a href=""><img src="<?php echo get_template_directory_uri(); ?>/assets/images/tw.png" alt=""></a>
			</div>
		</div> 
		<div class="popup-close" onclick="document.querySelector('.popup-formLog').classList.toggle('popup-show')"></div>
	</div>
</div>