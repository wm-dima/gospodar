<?php 
	$viewed = get_post_meta( get_the_ID(), 'viewed' );
	empty($viewed) ? add_post_meta( get_the_ID(), 'viewed', 1 ) : update_post_meta( get_the_ID(), 'viewed', ++$viewed[0] );
?>