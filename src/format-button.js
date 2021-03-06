//For registerFormat
import { registerFormatType, toggleFormat, applyFormat, removeFormat, insert, remove } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import {PopIcon} from './pop-icon.js';

export const FormatButton = props => {
   
  function toggleBox() {
  
    let isTitle = wp.data.select('popcard/data').getPopcard('title');
    let isUrl = wp.data.select('popcard/data').getPopcard('url');
    let isUrlText = wp.data.select('popcard/data').getPopcard('urlText');
    let popId, allPopCard;
    
    function makePopId() {
    
    	let isNew;
      popId = Math.floor(Math.random() * 1000);
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
        
    function addSpan() {
        
    	const child = `<span class="popcard" data-span-popid=${popId} >${isTitle}<br></br>
      <a href=${isUrl} rel="noreferrer noopener" target="_blank" >${isUrlText}</a></span>`;
    
    	const thisPopCard = document.querySelector(`[data-popid='${popId}']`);
    
    	thisPopCard.insertAdjacentHTML('afterend',child);
    
    	console.log('add span', props);
    
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
    
    let startSelection = wp.data.select('core/block-editor').getSelectionStart().offset;
    let endSelection = wp.data.select('core/block-editor').getSelectionEnd().offset;
    let currentSelection = wp.data.select('core/block-editor').getSelectedBlock().attributes.content.slice(startSelection, endSelection);
    
    if(!props.isActive){
      makePopId();
      
      props.onChange( 
    		applyFormat(
    			props.value, {
    		  	type: 'pop-card/popcard-link',
    		  	attributes: {
    		    datapopId: `${popId}`,
    		    href: `${isUrl}`,
    		    rel: 'no referrer noopener',
    		    target: '_blank'
  		  		},
  		  		startSelection, endSelection
    		  
  		  	}
		    ),
		  	
  		  console.log('apply', props)
		  );
    		
  		  addSpan();
        
    		}else {
          
          props.onChange( 
          	removeFormat(
    				  props.value,
    				  'pop-card/popcard-link'
    				) 
    			);
    			removeSpan();
    			console.log('rm format', props);
     			}
  }
  
  return <RichTextToolbarButton
    icon={ PopIcon }
    title='Add my popcard'
    isActive={ props.isActive }
    onClick={ toggleBox }
    />
    
};

registerFormatType(
    'pop-card/popcard-link', {
        title: 'Add my popcard',
        tagName: 'a',
        className: 'popcard-link',
        attributes: { datapopId: 'data-popId',
          href: 'href',
          rel: 'rel',
          target: 'target'
          },
        edit: FormatButton,
        
    }
);
