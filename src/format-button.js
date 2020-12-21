//For registerFormat
import { registerFormatType, toggleFormat, applyFormat, removeFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

import {PopIcon} from './pop-icon.js';

export const FormatButton = props => {
  
  const toggleSpan = () => {
    props.onChange( 
    toggleFormat(
    props.value,
    { type: 'pop-card/popcard-span' }
    ) ), 
      
      console.log( 'toggle format', props);
  }
  const toggleIsActive = () => {
     
  }
      
  return <RichTextToolbarButton
    icon={ PopIcon }
    title='Wrap with span'
    isActive={ props.isActive }
    onClick={ toggleSpan }
    />
    
};

registerFormatType(
    'pop-card/popcard-span', {
        title: 'Wrap with span',
        tagName: 'span',
        className: 'tooltip-text',
        edit: FormatButton,
    }
);
