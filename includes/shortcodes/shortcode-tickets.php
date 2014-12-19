<?php
add_shortcode( 'tickets', 'wpas_sc_client_account' );
/**
 * Registration page shortcode.
 */
function wpas_sc_client_account() {

	global $wpas_tickets, $current_user;

	/**
	 * For some reason when the user ID is set to 0
	 * the query returns posts whose author has ID 1.
	 * In order to avoid that (for non logged users)
	 * we set the user ID to -1 if it is 0.
	 * 
	 * @var integer
	 */
	$author = ( 0 !== $current_user->ID ) ? $current_user->ID : -1;

	$args = array(
		'author'                 => $author,
		'post_type'              => 'ticket',
		'post_status'            => 'any',
		'order'                  => 'DESC',
		'orderby'                => 'date',
		'posts_per_page'         => -1,
		'no_found_rows'          => false,
		'cache_results'          => false,
		'update_post_term_cache' => false,
		'update_post_meta_cache' => false,
		
	);

	$wpas_tickets = new WP_Query( $args );		

	/* Get the ticket content */
	ob_start();

	/**
	 * wpas_frontend_plugin_page_top is executed at the top
	 * of every plugin page on the front end.
	 */
	do_action( 'wpas_frontend_plugin_page_top', $post->ID, $post );

	/**
	 * wpas_before_tickets_list hook
	 */
	do_action( 'wpas_before_tickets_list' );

	/**
	 * Display possible messages to the visitor.
	 */
	if ( isset( $_GET['message'] ) ) {

		if ( is_numeric( $_GET['message'] ) ) {
			wpas_notification( false, $_GET['message'] );
		} else {
			wpas_notification( 'decode', $_GET['message'] );
		}
	}

	/* If user is not logged in we display the register form */
	if ( !is_user_logged_in() ):

		$registration = wpas_get_option( 'login_page', false );

		if ( false !== $registration && !empty( $registration ) && !is_null( get_post( intval( $registration ) ) ) ) {
			/* As the headers are already sent we can't use wp_redirect. */
			echo '<meta http-equiv="refresh" content="0; url=' . get_permalink( $registration ) . '" />';
			wpas_notification( false, __( 'You are being redirected...', 'wpas' ) );
			exit;
		}

		wpas_get_template( 'registration' );

	else:

		/**
		 * Get the custom template.
		 */
		wpas_get_template( 'list' );

	endif;

	/**
	 * wpas_after_tickets_list hook
	 */
	do_action( 'wpas_after_tickets_list' );

	/**
	 * Finally get the buffer content and return.
	 * 
	 * @var string
	 */
	$content = ob_get_clean();

	return $content;

}