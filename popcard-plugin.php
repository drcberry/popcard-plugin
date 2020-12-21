<?php
/**
 * Plugin Name:       popCard
 * Plugin URI:        https://example.com/plugins/the-basics/
 * Description:       Add pover to links
 * Version:           1.10.3
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Colin
 * Author URI:        https://author.example.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       popCard plugin
 * Domain Path:       /languages
 */
 if( ! defined( 'ABSPATH') ) {
    exit;
}
 
 //register_activation_hook( __FILE__, 'pluginprefix_function_to_run' );
 
 //register_deactivation_hook( __FILE__, 'pluginprefix_function_to_run' );
 
 function popcard_enqueue_assets() {
  wp_enqueue_script(
    'popcard-plugin',
    plugins_url( 'build/index.js', __FILE__ ),
    array('wp-block-editor', 'wp-blocks', 'wp-components', 'wp-compose', 'wp-data', 'wp-edit-post', 'wp-element', 'wp-i18n', 'wp-plugins', 'wp-polyfill', 'wp-rich-text')
  );
  
  
}
add_action( 'enqueue_block_editor_assets', 'popcard_enqueue_assets' );


function popcard_style_assets() {
    
    wp_register_style(
        'popcard_style_assets',
		plugins_url( 'build/index.css', __FILE__ ),
		
    );
    
    wp_enqueue_style( 'popcard_style_assets' );
    
    }
add_action( 'init', 'popcard_style_assets' );

function popcard_register_meta() {
  register_meta('post', '_popcard_text_metafield', array(
    'show_in_rest' => true,
    'type' => 'string',
    'single' => true,
    'sanitize_callback' => 'sanitize_text_field',
    'auth_callback' => function() { 
      return current_user_can('edit_posts');
    }
  ));
}
add_action('init', 'popcard_register_meta');
 
 
 /*
popCard is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.
 
popCard is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with popCard. If not, see {URI to Plugin License}.
*/
