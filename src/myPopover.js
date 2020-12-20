//Popover for import

import { Popover } from '@wordpress/components';
import { withState } from '@wordpress/compose';

import { RichText, RichTextToolbarButton } from '@wordpress/block-editor';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';


let MyPopover = (props) => {
    
    const toggleSpan = () => {
        props.onChange( 
        toggleFormat(
        props.value,
        { type: 'pop-card/popover' }
        ) ), 
        
        console.log( 'toggle format', props);
    }
    
    return <RichTextToolbarButton
                icon='testimonial'
                title='Wrap with span'
                onClick={ toggleVisible, toggleSpan }
                isActive={ props.isActive }
            />
    }
    
MyPopover = withState( {
    isVisible: false
    } ) ( ( { isVisible, setState } ) => {
            const toggleVisible = () => {
            setState( ( state ) => ( { isVisible: ! state.isVisible } ) );
        };

        return(
            <MyPopover>
                
                Toggle Popover!
            { isVisible && (
                <Popover>
                Popover is toggled!
                    <RichText
                        className={`popover`}
                        tagname={`span`}
                        placeholder="here"
                      
                    />
                </Popover>
            
            ) }
            </MyPopover>
        )
    } )


registerFormatType(
    'pop-card/popover', {
        title: 'popover',
        tagName: 'span',
        className: 'tooltip',
        edit: MyPopover,
    }
);
    
export {MyPopover};	    
