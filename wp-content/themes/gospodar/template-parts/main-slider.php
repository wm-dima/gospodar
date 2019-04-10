<?php 
	$slider = get_field('main_slider', 5);
	// echo "<pre>";
	// var_dump($slider);
	// die;
?>
<div class="main-slider">
	<div class="swiper-container">
		<div class="swiper-wrapper">
<?php foreach ($slider as $key => $value): ?>
			<div class="swiper-slide">
				<div class="swiper-pic" style="background-image: url('<?php echo $value['left_part_bg'] ?>')"></div>
				<div class="swiper-content">
					<div class="swiper-content__inside" style="background-image: url('<?php echo $value['right_part_bg'] ?>')">		
						<h2><?php echo $value['the_title'] ?></h2>
						<p><?php echo $value['the_text'] ?></p>
						<div class="bgblack"></div>
					</div>	
				</div>
			</div>
<?php endforeach ?>

		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
		<!-- Add Arrows -->
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
	</div>
</div>