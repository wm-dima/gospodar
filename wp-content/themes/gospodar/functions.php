<?php 

add_action( 'after_setup_theme', 'woocommerce_support' );

function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}

add_action( 'wp_enqueue_scripts', 'my_them_load_css_and_js' );

function my_them_load_css_and_js() {
    wp_enqueue_style( 'main-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style( 'assets-css-app-style', get_template_directory_uri() . '/assets/css/app.css');

    // wp_deregister_script('jquery');
    // wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.2.1.slim.min.js', array(), null, false);

    wp_enqueue_script( 'my-swiper-min-js', get_template_directory_uri() . '/assets/js/swiper.min.js', array('jquery'), null, true );
    wp_enqueue_script( 'my-app-js', get_template_directory_uri() . '/assets/js/app.js', array('jquery'), null, true );
    wp_localize_script( 'my-app-js', 'my_custom_js', array( 
        'ajax_url' => admin_url('admin-ajax.php'), 
        'log_in' => is_user_logged_in() 
      ) 
    );
}

add_action('customize_register', 'mytheme_customize_register');

function mytheme_customize_register( $wp_customize ) {
    $wp_customize->add_section(
        'main_option',
        array(
            'title' => 'Настройки информации',
            'description' => 'телефоны, соц. сети, адресс',
            'priority' => 11,
        )
    );


    /*PHONE*/
    $wp_customize->add_setting(
        'phone',
        array('default' => '0000000000')
    );
    $wp_customize->add_control(
    	'phone',
    	array(
    	    'label' => 'Телефон',
    	    'section' => 'main_option',
    	    'type' => 'text',
    	)
    );
    // /*SOCIAL Viber*/
    // $wp_customize->add_setting(
    //     'Viber',
    //     array('default' => 'https://www.viber.com/ru/')
    // );
    // $wp_customize->add_control(
    //   'Viber',
    //   array(
    //       'label' => 'Viber',
    //       'section' => 'main_option',
    //       'type' => 'text',
    //   )
    // );
    // /*SOCIAL whatsapp*/
    // $wp_customize->add_setting(
    //     'WhatsApp',
    //     array('default' => 'https://www.whatsapp.com/?lang=ru')
    // );
    // $wp_customize->add_control(
    //   'WhatsApp',
    //   array(
    //       'label' => 'WhatsApp',
    //       'section' => 'main_option',
    //       'type' => 'text',
    //   )
    // );
    // /*SOCIAL Telegram*/
    // $wp_customize->add_setting(
    //     'Telegram',
    //     array('default' => 'https://telegram.org/')
    // );
    // $wp_customize->add_control(
    //   'Telegram',
    //   array(
    //       'label' => 'Telegram',
    //       'section' => 'main_option',
    //       'type' => 'text',
    //   )
    // );
    // /*SOCIAL VK*/
    // $wp_customize->add_setting(
    //     'VK',
    //     array('default' => 'https://vk.com')
    // );
    // $wp_customize->add_control(
    //   'VK',
    //   array(
    //       'label' => 'VK',
    //       'section' => 'main_option',
    //       'type' => 'text',
    //   )
    // );
    // /*SOCIAL FaceBook*/
    // $wp_customize->add_setting(
    //     'FaceBook',
    //     array('default' => 'https://ru-ru.facebook.com/')
    // );
    // $wp_customize->add_control(
    //   'FaceBook',
    //   array(
    //       'label' => 'FaceBook',
    //       'section' => 'main_option',
    //       'type' => 'text',
    //   )
    // );
    // /*SOCIAL Instagram*/
    // $wp_customize->add_setting(
    //     'Instagram',
    //     array('default' => 'https://www.instagram.com/?hl=ru')
    // );
    // $wp_customize->add_control(
    //   'Instagram',
    //   array(
    //       'label' => 'Instagram',
    //       'section' => 'main_option',
    //       'type' => 'text',
    //   )
    // );

    /*Address*/
    $wp_customize->add_setting(
        'address',
        array('default' => 'Африка о. Мадагаскар')
    );
    $wp_customize->add_control(
      'address',
      array(
          'label' => 'адресс',
          'section' => 'main_option',
          'type' => 'text',
      )
    );

    /*Копирайт*/
    $wp_customize->add_setting(
        'copyright',
        array('default' => '2019 все права защищены (с)')
    );
    $wp_customize->add_control(
      'copyright',
      array(
          'label' => 'Копирайт',
          'section' => 'main_option',
          'type' => 'text',
      )
    );

    // Section - Логотипы
    $wp_customize->add_section('slideshow', array(
        'title'             => 'Логотипы', 
        'priority'          => 70,
    ));    

    // 2 поля логотипов
    $wp_customize->add_setting('header_logo', array(
        'transport'         => 'refresh',
        'height'         => 325,
    ));
    $wp_customize->add_setting('footer_logo', array(
        'transport'         => 'refresh',
        'height'         => 325,
    ));

    // 2 поля логотипов
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'customizer_setting_one_control', array(
        'label'             => 'Лого в шапке сайта',
        'section'           => 'slideshow',
        'settings'          => 'header_logo',    
    )));
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'customizer_setting_two_control', array(
        'label'             => 'Лого в шапке подвале',
        'section'           => 'slideshow',
        'settings'          => 'footer_logo',
    )));
}






function get_call_phobe($phone){
	return str_replace([' ', '-', '(', ')', '-', '+'], '', $phone);
}

function themename_custom_logo_setup() {
    $defaults = array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array( 'site-title', 'site-description' ),
    );
    add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'themename_custom_logo_setup' );


function only_search_for_full_phrase( $query ) {
    if ( $query->is_search() && $query->is_main_query() ) {
        $query->set( 'sentence', true );
	    if (!$query->query['product_cat']) {
	    	unset($query->query['product_cat']);
	    	unset($_GET['product_cat']);
	    }
    }
}
add_action( 'pre_get_posts', 'only_search_for_full_phrase' );


function get_main_page_prod_ids(){
	global $wpdb;
	$sql = "SELECT ID FROM `{$wpdb->prefix}posts` WHERE post_type = 'product' ORDER BY ID DESC LIMIT 12";
	return $wpdb->get_results($sql);
}

function get_percent_sale($product = false, $regular_price = false, $sale_price = false){
	if ($product) {
		$regular_price = $product->get_regular_price();
		$sale_price = $product->get_sale_price();
	}
	return floor( 100 - 100 / ($regular_price/$sale_price) );
}


function wm_get_main_img_url($id){
    if (has_post_thumbnail( $id )) 
        return get_the_post_thumbnail_url($id);
    else 
        return get_template_directory_uri() . '/assets/images/no_image.png';
}

function is_new_product($created_date){
	if (! $created_date == null ) {
		return $created_date->getTimestamp() > strtotime("-1 week");
	}
}


/*woo start shop*/

remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
// remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );

add_filter( 'loop_shop_per_page', create_function( 
    '$cols',
    'return '. ( isset( $_GET['per_page'] ) ? $_GET['per_page'] : 24 ) .';' ),
    20
);

/*woo end shop*/

/*woo start single prod*/

remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );

/*woo end single prod*/
