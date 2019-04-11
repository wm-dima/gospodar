<form class="per-page" id="per-page" method="get" class="wm-hid">
	<input type="number" name="per_page" min="1" max="100" value="<?php echo isset($_GET['per_page']) ? $_GET['per_page'] : ''; ?>">
	<input type="submit" class="order-apply wm-hid" data-order-apply value="Применить">
</form>
<div id="per-page-div">
	<span id="current-count"><?php echo isset($_GET['per_page']) ? $_GET['per_page'] : 20; ?></span>
	<div id="select-new-count" style="display: none;">
		<span class="order-count--variant" data-per-page="20">20</span>
		<span class="order-count--variant" data-per-page="40">40</span>
		<span class="order-count--variant" data-per-page="60">60</span>
		<span class="order-count--variant" data-per-page="80">80</span>
	</div>
</div>
<script>
	document.querySelector('#select-new-count').addEventListener('click', function(e){
		if (e.target.hasAttribute('data-per-page')) {
			document.querySelector('#per-page [name="per_page"]').value = e.target.getAttribute('data-per-page');
			document.querySelector('#per-page').submit();
		}
	});
</script>