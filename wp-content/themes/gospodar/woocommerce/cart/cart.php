	<?php
	/**
	 * Cart Page
	 *
	 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart.php.
	 *
	 * HOWEVER, on occasion WooCommerce will need to update template files and you
	 * (the theme developer) will need to copy the new files to your theme to
	 * maintain compatibility. We try to do this as little as possible, but it does
	 * happen. When this occurs the version of the template file will be bumped and
	 * the readme will list any important changes.
	 *
	 * @see     https://docs.woocommerce.com/document/template-structure/
	 * @package WooCommerce/Templates
	 * @version 3.5.0
	 */

	defined( 'ABSPATH' ) || exit;

	do_action( 'woocommerce_before_cart' ); ?>

	<form class="woocommerce-cart-form" action="<?php echo esc_url( wc_get_cart_url() ); ?>" method="post">
		<?php do_action( 'woocommerce_before_cart_table' ); ?>


	        <div class="cart">
	            <div class="wrapper">
	                <div class="cart-inside">
	                    <div class="cart-inside__scroll">
	                        <table id="cart-table">
	                            <tr class="tr">
	                                <th class="number-item">№</th>
	                                <th class="photo-item">Фото</th>
	                                <th class="name-item">Название товара</th>
	                                <th class="price-item">Цена</th>
	                                <th class="quantity-item">Количество</th>
	                                <th class="lastPrice-item">Стоимость</th>
	                                <th class="delete-item">Удалить</th>
	                            </tr>
				<?php do_action( 'woocommerce_before_cart_contents' ); ?>

				<?php
				$count = 0;
				foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
					++$count;
					$_product   = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
					$product_id = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

					if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
						$product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
						?>
						<tr class="woocommerce-cart-form__cart-item <?php echo esc_attr( apply_filters( 'woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key ) ); ?>">

							<td class="number-item"><?php echo $count; ?></td>

	                        <td class="photo-item">
	                            <div class="padding-img">
	                                <img src="<?php echo wm_get_main_img_url($_product->id); ?>" alt="">
	                            </div>
	                        </td>

	                        <td class="name-item">
		                        <?php if ( $sku = $_product->get_sku() ): ?>
			                        <p class="name-item__articul">
			                            Код товара: <span><?php echo $sku; ?></span>
			                        </p>
		                        <?php endif ?>
	                            <p class="name-item__name">
	                                <a href="<?php echo get_permalink( $_product->id ); ?>">
	                                    <?php echo $_product->name; ?>
	                                </a>
	                            </p>
	                        </td>

	                        <td class="price-item">
	                          <span><?php echo $_product->price; ?></span> грн
	                        </td>

	                        <td class="quantity-item">
	                        	<div id="wm_<?php echo $cart_item_key; ?>" class="wm-hid">
									<?php
									if ( $_product->is_sold_individually() ) {
										$product_quantity = sprintf( '1 <input type="hidden" name="cart[%s][qty]" value="1" />', $cart_item_key );
									} else {
										$product_quantity = woocommerce_quantity_input( array(
											'input_name'   => "cart[{$cart_item_key}][qty]",
											'input_value'  => $cart_item['quantity'],
											'max_value'    => $_product->get_max_purchase_quantity(),
											'min_value'    => '0',
											'product_name' => $_product->get_name(),
										), $_product, false );
									}

									echo apply_filters( 'woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item ); // PHPCS: XSS ok.
									?>
	                        	</div>
	                            <div class="quantity-block" data-wrap-for="wm_<?php echo $cart_item_key; ?>">
	                                <button class="quantity-arrow-minus">
	                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/minus.png" alt="">
	                                </button>
	                                <input 
		                                class="quantity-num" 
		                                type="number" 
		                                value="<?php echo $cart_item['quantity']; ?>" 
		                                min="1"
	                                />
	                                <button class="quantity-arrow-plus">
	                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/plus.png" alt="">
	                                </button>
	                             </div>
                                <span class="update wm-hid" data-update-btn>Обновить</span>
	                        </td>

	                        <td class="lastPrice-item">
	                            <span>
	                        	<?php
									echo apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key ); // PHPCS: XSS ok.
								?>
								</span>
	                            грн
	                        </td>
							<td class="delete-item">
								<?php
									// @codingStandardsIgnoreLine
									echo apply_filters( 'woocommerce_cart_item_remove_link', sprintf(
										'<a href="%s" class="remove" aria-label="%s" data-product_id="%s" data-product_sku="%s">&times;</a>',
										esc_url( wc_get_cart_remove_url( $cart_item_key ) ),
										__( 'Remove this item', 'woocommerce' ),
										esc_attr( $product_id ),
										esc_attr( $_product->get_sku() )
									), $cart_item_key );
								?>
							</td>

						</tr>
						<?php
					}
				}
				?>

				<?php do_action( 'woocommerce_cart_contents' ); ?>

				<?php do_action( 'woocommerce_after_cart_contents' ); ?>
			</table>
	                    </div>
	                    <div class="cart-inside__total">
	                        <p>Итого: <span><?php echo WC()->cart->cart_contents_total; ?></span>грн.</p>
	                        <button>Оформить заказ</button>
	                    </div>
	                </div>
	            </div>
	        </div>
		<?php do_action( 'woocommerce_after_cart_table' ); ?>
		<div class="wm-hid">
			<button type="submit" class="button" name="update_cart" value="<?php esc_attr_e( 'Update cart', 'woocommerce' ); ?>">
				<?php esc_html_e( 'Update cart', 'woocommerce' ); ?>
			</button>
					<?php do_action( 'woocommerce_cart_actions' ); ?>

					<?php wp_nonce_field( 'woocommerce-cart', 'woocommerce-cart-nonce' ); ?>

		</div>
	</form>
<script>
	document.querySelector('#cart-table').addEventListener('click', function(e){
		if (e.target.closest('.quantity-arrow-minus') != null) qntMinus(e);
		if (e.target.closest('.quantity-arrow-plus') != null) qntPlus(e);
		if (e.target.closest('[data-update-btn]') != null) updateTable();
	});

	function updateTable(){
		document.querySelector('button[name="update_cart"]').removeAttribute('disabled');
		document.querySelector('button[name="update_cart"]').click();
	}

	function qntMinus(e){
		e.preventDefault();
		let wrap = e.target.closest('.quantity-item');
		let inp_hid = wrap.querySelector('[type="number"]');
		let inp_showed = wrap.querySelectorAll('[type="number"]')[1];
		if (inp_showed.value > 1) {
			inp_hid.value = inp_hid.value * 1 - 1;
			inp_showed.value = inp_showed.value * 1 - 1;
			wrap.querySelector('[data-update-btn]').classList.remove('wm-hid');
		}
	}
	function qntPlus(e){
		e.preventDefault();
		let wrap = e.target.closest('.quantity-item');
		let inp_hid = wrap.querySelector('[type="number"]');
		let inp_showed = wrap.querySelectorAll('[type="number"]')[1];
		inp_hid.value = inp_hid.value * 1 + 1;
		inp_showed.value = inp_showed.value * 1 + 1;
		wrap.querySelector('[data-update-btn]').classList.remove('wm-hid');
	}

	document.querySelectorAll('[data-wrap-for] input').forEach(function(e){
		e.addEventListener('change', function(ev){
			let wrap = ev.target.closest('.quantity-item');
			let inp_showed = wrap.querySelectorAll('[type="number"]')[1];
			inp_showed.value = ev.target.value;
			wrap.querySelector('[data-update-btn]').classList.remove('wm-hid');
		})
	})


</script>
	<!-- <div class="cart-collaterals"> -->
		<?php
			/**
			 * Cart collaterals hook.
			 *
			 * @hooked woocommerce_cross_sell_display
			 * @hooked woocommerce_cart_totals - 10
			 */
			//do_action( 'woocommerce_cart_collaterals' );
		?>
	<!-- </div> -->

	<?php do_action( 'woocommerce_after_cart' ); ?>
