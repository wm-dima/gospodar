<?php 

$sale_group = get_field('sale_group', 5);
?>
<div class="sale-banner">
	<div class="wrapper">
	  <div class="sale-banner__items">
	  	<?php foreach ($sale_group as $key => $value): ?>
	  		<?php if ( $value['sale_text_1'] && $value['sale_text_2'] ): ?>
				<div class="sale-banner__items-item">
					<img src="<?php echo $value['bg_image']; ?>" alt="">
					<div class="sale-banner__items-item__inside">
						<a class="sale-banner__items-item__inside-name " href="">
							<span><?php echo $value['the_text']; ?></span> 
						</a>
						<p class="sale-banner__items-item__inside-position_price">
							<span class="sp1"><span class="last-price">
								<?php echo $value['sale_text_1']; ?>
							</span><?php echo $value['suffix_1']; ?></span>
							<span class="sp2"><span class="current-price">
								<?php echo $value['sale_text_2']; ?>
							</span><?php echo $value['suffix_2']; ?></span>
						</p>
					</div>		
				</div>
			<?php else: ?>
				<div class="sale-banner__items-item">
					<img src="<?php echo $value['bg_image']; ?>" alt="">
					<div class="sale-banner__items-item__inside">
						<a class="sale-banner__items-item__inside-name light-p" href="">
							<span><?php echo $value['the_text']; ?></span> 
						</a>
						<p class="sale-banner__items-item__inside-sale_price">
							<?php echo $value['sale_text_1']; ?>
							<span class="sale-index"><?php echo $value['suffix_1']; ?></span>
						</p>
					</div>
				</div>
	  		<?php endif ?>
	  	<?php endforeach ?>
	  </div>
	</div>
</div>