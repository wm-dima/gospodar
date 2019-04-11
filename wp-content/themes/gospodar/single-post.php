<?php get_header(); ?>

<?php 

    $viewed = get_post_meta( get_the_ID(), 'viewed' );

    empty($viewed) ? add_post_meta( get_the_ID(), 'viewed', 1 ) : update_post_meta( get_the_ID(), 'viewed', ++$viewed[0] );

?>

<?php woocommerce_breadcrumb(); ?>

<?php 

    $_monthsList = [

        ".01." => "января",

        ".02." => "февраля",

        ".03." => "марта",

        ".04." => "апреля",

        ".05." => "мая",

        ".06." => "июня",

        ".07." => "июля",

        ".08." => "августа",

        ".09." => "сентября",

        ".10." => "октября",

        ".11." => "ноября",

        ".12." => "декабря"

    ];

?>

<div class="article">

    <div class="wrapper">

        <div class="inside-article">

            <div class="inside-article__left">

                <div class="inside-article__left-date">  

                <?php 

                    $now =  date( 'j  .m., Y', strtotime( $post->post_date ) );

                    $month = date( '.m.', strtotime( $post->post_date ) );

                    echo str_replace( $month , $_monthsList[$month], $now);

                ?>

                </div>
                <div class="news-inside__article-stat">
						<div class="news-inside__article-stat__comments">
							<div class="news-inside__article-stat__comments-img"></div>
							<span class="comments-quantity">0</span>
						</div>
						<div class="news-inside__article-stat__seens">
							<div class="news-inside__article-stat__seens-img"></div>
							<span class="seens-quantity"></span>
						</div>  
				</div>
                <div class="inside-article__left-name">

                    <h4><?php the_title(); ?></h4>

                </div>

                <?php if ($img = get_the_post_thumbnail_url( $post, 'medium' )): ?>

                    <div class="inside-article__left-img">

                        <img src="<?php echo $img; ?>" alt="">

                    </div>

                <?php endif ?>

                <div class="inside-article__left-text1">

                    <?php 

                        $left_t = get_field('text_left');

                        if ($left_t) {

                            echo $left_t;

                        } else {

                            if ($img):

                                $res = splitInHalf($post->post_content, true);

                                echo $res[0];

                            else: 

                                $res = splitInHalf($post->post_content, false);

                                echo $res[0];

                            endif;

                        };

                    ?>

                </div>

            </div>   

            <div class="inside-article__right">

                <div class="inside-article__text2">

                    <?php

                        $right_t = get_field('text_right');

                        if ($right_t) {

                            echo $right_t;

                        } else{

                            echo $res[1];

                        }

                    ?>

                </div>

            </div>

            </div> 

        </div>

    </div>

<?php get_template_part('template-parts/last', 'news'); ?>

<?php get_footer(); ?>

