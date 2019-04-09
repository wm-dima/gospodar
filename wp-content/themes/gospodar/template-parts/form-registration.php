<div class="popup-formReg">
	<div class="popup-form__reg">
		<div class="popup-name">
			<p>Регистрация</p>
		</div>
		<div class="popup-inputs">
			<form action="<?php echo admin_url('admin-ajax.php'); ?>?action=registration_form" method="post" id="form-registration">
				<input type="text" name="first_name" placeholder="<?php echo isset( $_POST['first_name'] ) ? $_POST['first_name'] : 'Имя'; ?>">
				<input type="text" name="last_name" placeholder="<?php echo isset( $_POST['last_name'] ) ? $_POST['last_name'] : 'Фамилия'; ?>">
				<input type="text" name="username" placeholder="<?php echo isset( $_POST['username'] ) ? $_POST['username'] : 'Username'; ?>">
				<input type="text" name="billing_phone" placeholder="<?php echo isset( $_POST['billing_phone'] ) ? $_POST['billing_phone'] : 'Телефон'; ?>">
				<input type="text" name="mail" placeholder="<?php echo isset( $_POST['mail'] ) ? $_POST['mail'] : 'Email'; ?>">
				<input type="password" name="password" placeholder="<?php echo isset( $_POST['password'] ) ? $_POST['password'] : 'Пароль'; ?>">
				<input type="submit" name="submit" value="Зарегистрироваться"/>
			</form>
		</div>
		<div class="popup-close" onclick="$('.popup-formReg').toggleClass('popup-show')"></div>
	</div>
</div>
<script>
	document.querySelector('#form-registration').addEventListener('submit', function(e){
		// e.preventDefault();
		// let form = this;
		// console.log(form);
		// var form_data = new FormData(form);
		// var xhttp = new XMLHttpRequest();
		// xhttp.open('POST', form.action + '?action=registration_form', true);
		// xhttp.send(form_data);
		// xhttp.onreadystatechange = function() {
		// 	if (xhttp.readyState == 4) {
		// 		if (xhttp.status == 200) {
		// 			console.log(xhttp.response);
		// 			obj = JSON.parse(xhttp.response );
		// 		} else {
		// 			wm_ajax_err();
		// 		}
		// 	}
		// }
	})
</script>