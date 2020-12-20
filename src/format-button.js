//For registerFormat
import { registerFormatType, toggleFormat, applyFormat, removeFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

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
    icon='testimonial'
    title='Wrap with span'
    onClick={ toggleSpan }
    isActive={ props.isActive } 
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