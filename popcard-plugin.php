<?php
/**
 * Plugin Name:       popCard
 * Plugin URI:        https://github.com/drcberry/popcard-plugin
 * Description:       Create links with a popover which contains a custom heading and url
 * Version:           1.10.3
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Colin
 * Author URI:        https://drcberry.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       popCard plugin
 * Domain Path:       /languages
 */
 if( ! defined( 'ABSPATH') ) {
    exit;
}
 
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

function popcard_js_snippets() {
	wp_register_script(
			'popcard_snippets',
			plugins_url( '/js/popcard-snippets.js', __FILE__ ),
	);
	
	wp_enqueue_script('popcard_snippets');
}
add_action('wp_footer', 'popcard_js_snippets');

/*
//Moved to separate file and enqueued
function add_my_js() {
	?>
        <script>
            console.log('Popcard snippets are loaded');
            const popcardLinks = document.querySelectorAll('.popcard-link');
            
						let titleCard, popspan;
				
						if(popcardLinks) {
							popcardLinks.forEach(item=> item.addEventListener('mouseenter',showSpan));
							
							const addBreakToSpan = document.querySelectorAll('.popcard');
							
							addBreakToSpan.forEach(el => el.lastElementChild.insertAdjacentHTML('beforebegin', '<br>') );
						}
						
						function showSpan(e) {
						  const popspanId = e.target.getAttribute('data-popid');
						  
						  console.log(popspanId, e);
						  
						  popspan = document.querySelector(`[data-span-popid='${popspanId}']`);
						  popspan.classList.add('show-card');
						  
						  console.log('popspan',popspan);
						  let allPopspan = document.querySelectorAll('[data-span-popid]');
						  console.log(allPopspan[0]);
						  allPopspan
						  .forEach(item => {if(item.dataset.spanPopid !== popspanId) {
						    item.classList.remove('show-card') } 
						    } );
						    
						  function handleOpenSpan(evt) {
						    						    
						    let clickInside = popspan.contains(evt.target);
						    if(!clickInside) {
						    popspan.classList.remove('show-card');
						    
						    console.log('outside',evt.target)
						    document.removeEventListener('click', handleOpenSpan);
						    }
						  }
						  
						  document.addEventListener('click', handleOpenSpan);
						  popspan.addEventListener('mouseleave', () => popspan.classList.remove('show-card'));
						}//end showSpan
						
        </script>
    <?php
}

add_action('wp_footer', 'add_my_js');
 */
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
