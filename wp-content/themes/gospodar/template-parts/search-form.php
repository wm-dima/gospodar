<form action="<?php echo home_url('/'); ?>">
	<input 
		type="text" 
		class="search-field" 
		value="<?php echo get_search_query() ?>" 
		name="s" 
		id="s" 
		placeholder="Введите запрос для поиска"
		required
	>
	<div class="select">
		<div class="naebka">Все категории</div>
		<select name="product_cat" id="select">
			<option value="">Все категории</option>
			<?php 
			$args = array(
				'taxonomy' => 'product_cat',
				'hide_empty' => true,
			);
			$product_cat = get_terms( $args );
			foreach ($product_cat as $key => $category): ?>
				<option value="<?php echo $category->slug ?>"><?php echo $category->name ?></option>
			<?php endforeach ?>
		</select>
	</div>		
	<button>
		 <span>Искать</span>
			<img src="<?php echo get_template_directory_uri() ?>/assets/images/search.svg" alt="" width="20px">
	</button>
</form>

<script>
	select.addEventListener('change', function(e){
		let newText = select.querySelector('[value="'+e.target.value+'"]').innerText;
		newText.length = 40;
		document.querySelector('.select .naebka').innerText = newText;
	})
</script>