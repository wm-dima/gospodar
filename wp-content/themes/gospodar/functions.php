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

    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.3.1.js', array(), null, false);
    // wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.1.1.min.js', array(), null, false);
    // wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.2.1.js', array(), null, false);

    wp_enqueue_script( 'my-swiper-min-js', get_template_directory_uri() . '/assets/js/swiper.min.js', array('jquery'), null, true );
    wp_enqueue_script( 'my-app-js', get_template_directory_uri() . '/assets/js/app.js', array('jquery'), null, true );
    wp_localize_script( 'my-app-js', 'my_custom_js', array( 
        'ajax_url' => admin_url('admin-ajax.php'), 
        'log_in' => is_user_logged_in() 
      ) 
    );


    if (get_post_type() == 'product') {
        wp_enqueue_script( 'my-single_prod.js', get_template_directory_uri() . '/assets/js/single_prod.js', [], null, true);
    } 
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

function wm_show_all_attributes($attributes){
    $attributes_dropdown = '';
    $wc_tax = wc_get_attribute_taxonomies();
    foreach ($attributes as $key => $value) {
        if ($value['name'] == 'pa_color') continue;
        if (strpos( $value['name'], 'pa_' ) === 0 ) {
            foreach ($wc_tax as $key => $tax) {
                if ($tax->attribute_id == 2) {
                    $attributes_dropdown .= '<li><span class="specification">';
                    $attributes_dropdown .= $tax->attribute_label . ": ";
                    $attributes_dropdown .= '</span>';
                }
            }
            foreach ($value['options'] as $key => $value) {
                $term = get_term(  $value );
                $attributes_dropdown .= '<span class="specification-answer"> ' . $term->name . ' </span>';
            }
        } else {
            $attributes_dropdown .= '<li><span class="specification">';
            $attributes_dropdown .= $value['name'] . ": ";
            $attributes_dropdown .= '</span>';
            $product_attributes = explode('|',$value['value']);
            foreach ( $product_attributes as $pa ) {
                $attributes_dropdown .= '<span class="specification-answer"> ' . $pa . ' </span>';
            }
        }
        $attributes_dropdown .= '</li>';
    }
    return $attributes_dropdown;
}

function get_color_variation($product){
    if ($product->get_type() !== 'variable') return;
    $colors = $product->get_variation_attributes()['pa_color'];
    if ( $colors == null ) return false;
    $html = '';
    foreach ($colors as $key => $value) {
        $html .= '
            <input type="radio" id="product-'.$value.'" name="pa_color" value="'.$value.'">
            <label for="product-'.$value.'">
                <div 
                  class="variation-circle" 
                  data-color-val="'.$value.'" 
                  style="background: '.
                  str_replace('hsh_', '#', $value)
                  .';"></div>
            </label>
        ';
    }
    return $html;
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


add_action( 'widgets_init', 'register_my_widgets' );
function register_my_widgets(){
    register_sidebar( array(
        'name'          => sprintf(__('Sidebar %d'), $i ),
        'id'            => "sidebar-0",
        'description'   => '',
        'class'         => '',
        'before_widget' => '<li id="%1$s" class="widget %2$s">',
        'after_widget'  => "</li>\n",
        'before_title'  => '<h2 class="widgettitle">',
        'after_title'   => "</h2>\n",
    ) );
}

function how_to_use_colors() {
    if (  isset( $_GET['taxonomy'] ) && $_GET['taxonomy'] == 'pa_color' ) {
    ?>
        <div class="notice notice-success is-dismissible">
            <p>Для использования цветов следует ввести в поле 'Ярлык' цветна английском.</p>
            <p>
                Если данный вариант не работает найдите в гугле требуемый цвет в формате 'HEX'.
                Например розовый будет 'FFCBDB'. В таком случае цвет требуеться вводить с префиксом 'hsh_'.
                В результате для получения розового цвет следует вводть 'hsh_FFCBDB' или 'pink'.
            </p>

        </div>
    <?php
    }
}
add_action( 'admin_notices', 'how_to_use_colors' );


function registration_validation( 
        $first_name,
        $last_name,
        $username,
        $billing_phone,
        $email,
        $password
    ){
    global $reg_errors;
    $reg_errors = new WP_Error;
    if ( empty( $first_name ) || empty( $last_name ) || empty( $username ) || empty( $billing_phone ) || empty( $email ) || empty( $password ) ) {
        $reg_errors->add('field', 'Required form field is missing');
    }
    if ( 4 > strlen( $username ) ) {
       $reg_errors->add( 'username_length', 'Username too short. At least 4 characters is required' );
    }
    if ( username_exists( $username ) ) {
        $reg_errors->add('user_name', 'Sorry, that username already exists!');
    }
    if ( ! validate_username( $username ) ) {
       $reg_errors->add( 'username_invalid', 'Sorry, the username you entered is not valid' );
    }
    if ( 5 > strlen( $password ) ) {
        $reg_errors->add( 'password', 'Password length must be greater than 5' );
    }
    if ( !is_email( $email ) ) {
        $reg_errors->add( 'email_invalid', 'Email is not valid' );
    }
    if ( email_exists( $email ) ) {
       $reg_errors->add( 'email', 'Email Already in use' );
    }
    if ( 7 > strlen( $billing_phone ) ) {
       $reg_errors->add( 'phone_length', 'Phone too short.' );
    }
    if ( is_wp_error( $reg_errors ) ) {
        foreach ( $reg_errors->get_error_messages() as $error ) {
          
            echo '<div>';
            echo '<strong>ERROR</strong>:';
            echo $error . '<br/>';
            echo '</div>';
              
        }
      
    }
}

function complete_registration(            
        $first_name, 
        $last_name, 
        $username, 
        $billing_phone, 
        $email, 
        $password
    ) {
    global $reg_errors;
    if ( 1 > count( $reg_errors->get_error_messages() ) ) {
        $userdata = array(
        'user_login'    =>   $username,
        'user_email'    =>   $email,
        'user_pass'     =>   $password,
        'user_url'      =>   '',
        'first_name'    =>   $first_name,
        'last_name'     =>   $last_name,
        'nickname'      =>   $username,
        'description'   =>   $billing_phone,
        );
        $user = wp_insert_user( $userdata );
        echo 'Registration complete. Goto <a href="' . get_site_url() . '/wp-login.php">login page</a>.';   
    }
}

function custom_registration_function() {
    if ( isset($_POST['submit'] ) ) {
        registration_validation(
            $_POST['first_name'],
            $_POST['last_name'],
            $_POST['username'],
            $_POST['billing_phone'],
            $_POST['mail'],
            $_POST['password']
        );
          
        // sanitize user form input
        // global $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio;
        $first_name =   sanitize_text_field( $_POST['fname'] );
        $last_name  =   sanitize_text_field( $_POST['lname'] );
        $username   =   sanitize_user( $_POST['username'] );
        $billing_phone      =   sanitize_text_field( $_POST['billing_phone'] );
        $email      =   sanitize_email( $_POST['mail'] );
        $password   =   esc_attr( $_POST['password'] );
        $nickname   =   $username;
  
        // call @function complete_registration to create the user
        // only when no WP_error is found
        complete_registration(
            $first_name,
            $last_name,
            $username,
            $billing_phone,
            $email,
            $password,
            $nickname
        );
    }
  
    registration_form(
        $first_name,
        $last_name,
        $username,
        $billing_phone,
        $email,
        $password,
        $nickname
    );
}


function my_registration_form(){
    custom_registration_function();
}

add_action("wp_ajax_registration_form", "my_registration_form");
add_action("wp_ajax_nopriv_registration_form", "my_registration_form");