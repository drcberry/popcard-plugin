//Custom element Button
import { registerFormatType, toggleFormat, applyFormat, removeFormat, insert, remove } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

import {PopIcon} from './pop-icon.js';
import {Popcard} from './popcard.js';

export const PopcardButton = props => {
   
  function togglePopcard() {
  
    let isTitle = wp.data.select('popcard/data').getPopcard('title');
    let isUrl = wp.data.select('popcard/data').getPopcard('url');
    let isUrlText = wp.data.select('popcard/data').getPopcard('urlText');
    let popId, allPopCard;
    
    function makePopId() {
    
    	let isNew;
      popId = Math.floor(Math.random() * 10);
      allPopCard = document.querySelectorAll('.popcard-link');
      console.log('new Id',popId);
      
      if(allPopCard.length === 1) {
      	isNew = (allPopCard[0].dataset.popid != popId);
      	} else if(allPopCard.length > 1) {
      		
      		isNew = [...allPopCard].every(e => e.dataset.popid != popId);;
      		
    			}
    				else { return popId }
      
      console.log('isNew', isNew );
      
      if(isNew) {return popId} else{
      	console.log('false',popId);
      	makePopId()
      	}
    }
    
    let startSelection = wp.data.select('core/block-editor').getSelectionStart().offset;
    let endSelection = wp.data.select('core/block-editor').getSelectionEnd().offset;
    let currentSelection = wp.data.select('core/block-editor').getSelectedBlock().attributes.content.slice(startSelection, endSelection);
    //console.log('data', startSelection, currentSelection);
     /*   
    function addSpan() {
        
    	const child = `<span class="popcard" data-span-popid=${popId} >${isTitle}<br></br>
      <a href=${isUrl} rel="noreferrer noopener" target="_blank" >${isUrlText}</a></span>`;
    
    	const thisPopCard = document.querySelector(`[data-popid='${popId}']`);
    
    	thisPopCard.insertAdjacentHTML('afterend',child);
    
    	console.log('add span', props);
    	
var thisblock = wp.data.select('core/block-editor').getSelectedBlock();

var selst =wp.data.select('core/block-editor').getSelectionStart();

var selend =wp.data.select('core/block-editor').getSelectionEnd();

    
    }
    
    function removeSpan() {
      let thisPopSpan, thisBox;
      console.log('rm span', props);
      
      if(props.value.activeFormats[0].unregisteredAttributes) {
        const thisSpanId = props.value.activeFormats[0].unregisteredAttributes['data-popid'];    
        
      
        thisPopSpan = document.querySelector(`[data-span-popid='${thisSpanId}']`);
               
        console.log('thisSpan',thisPopSpan);
        
        if(thisPopSpan){
          thisPopSpan.remove();
        }
      }
      return
    }
    */
    const child = `<span class="popcard" data-span-popid=${popId} >${isTitle}<br></br>
      <a href=${isUrl} rel="noreferrer noopener" target="_blank" >${isUrlText}</a></span>`
      
    if(!props.isActive){
      makePopId();
      
      props.onChange( 
    /*		applyFormat(
    			props.value,
    			  { type:
    			   'pop-card/custom-popcard',
    		  	
    		  	attributes: {
    		  	
    		    datapopId: `${popId}`,
    		    href: `${isUrl}`,
    		    rel: 'noreferrer noopener',
    		    target: '_blank'
  		  		},
    		  
  		  	}
		  	),
		  	*/
		  	insert(
		  	props.value,
		  	  {text: child,
		  	  }
		  	),
  		  console.log('apply', props)
		  );
    		
  		  //addSpan();
        
    		}else {
          
          props.onChange( 
          	    			  
  					removeFormat(
    				props.value,
    				'pop-card/custom-popcard'
    				) 
    			);
    			//removeSpan();
    			console.log('rm format', props);
     			}
  }
  
  return <RichTextToolbarButton
    icon={ PopIcon }
    title='Add my custom popcard'
    isActive={ props.isActive }
    onClick={ togglePopcard }
    />
    
}; //end togglePopcard

registerFormatType(
    'pop-card/custom-popcard', {
        title: 'Add my custom popcard',
        tagName: 'pop-card',
        className: 'popcard-link',
        attributes: {
          
          datapopId: 'data-popId',
          href: 'href',
          rel: 'rel',
          target: 'target'
          },
        edit: PopcardButton,
        
    }
);



