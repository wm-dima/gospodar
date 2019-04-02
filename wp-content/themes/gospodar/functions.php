<?php 

add_action( 'after_setup_theme', 'woocommerce_support' );

function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}

add_action( 'wp_enqueue_scripts', 'my_them_load_css_and_js' );

function my_them_load_css_and_js() {
    wp_enqueue_style( 'main-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style( 'assets-css-app-style', get_template_directory_uri() . '/assets/css/app.css');

    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.2.1.slim.min.js', array(), null, true);
 
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
    /*SOCIAL Viber*/
    $wp_customize->add_setting(
        'Viber',
        array('default' => 'https://www.viber.com/ru/')
    );
    $wp_customize->add_control(
      'Viber',
      array(
          'label' => 'Viber',
          'section' => 'main_option',
          'type' => 'text',
      )
    );
    /*SOCIAL whatsapp*/
    $wp_customize->add_setting(
        'WhatsApp',
        array('default' => 'https://www.whatsapp.com/?lang=ru')
    );
    $wp_customize->add_control(
      'WhatsApp',
      array(
          'label' => 'WhatsApp',
          'section' => 'main_option',
          'type' => 'text',
      )
    );
    /*SOCIAL Telegram*/
    $wp_customize->add_setting(
        'Telegram',
        array('default' => 'https://telegram.org/')
    );
    $wp_customize->add_control(
      'Telegram',
      array(
          'label' => 'Telegram',
          'section' => 'main_option',
          'type' => 'text',
      )
    );
    /*SOCIAL VK*/
    $wp_customize->add_setting(
        'VK',
        array('default' => 'https://vk.com')
    );
    $wp_customize->add_control(
      'VK',
      array(
          'label' => 'VK',
          'section' => 'main_option',
          'type' => 'text',
      )
    );
    /*SOCIAL FaceBook*/
    $wp_customize->add_setting(
        'FaceBook',
        array('default' => 'https://ru-ru.facebook.com/')
    );
    $wp_customize->add_control(
      'FaceBook',
      array(
          'label' => 'FaceBook',
          'section' => 'main_option',
          'type' => 'text',
      )
    );
    /*SOCIAL Instagram*/
    $wp_customize->add_setting(
        'Instagram',
        array('default' => 'https://www.instagram.com/?hl=ru')
    );
    $wp_customize->add_control(
      'Instagram',
      array(
          'label' => 'Instagram',
          'section' => 'main_option',
          'type' => 'text',
      )
    );
}

function get_call_phobe($phone){
	return str_replace([' ', '-', '(', ')', '-', '+'], '', $phone);
}