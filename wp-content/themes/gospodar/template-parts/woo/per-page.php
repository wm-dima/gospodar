<form class="per-page" id="per-page" method="get">
	<input type="number" name="per_page" min="1" max="100">
	<input type="submit" class="order-apply wm-hid" data-order-apply value="Применить">
</form>
<script>
	document.querySelector('#per-page [type="number"]').addEventListener('change', function(e){
		document.querySelector('#per-page [type="submit"]').classList.remove('wm-hid');
	});
</script>