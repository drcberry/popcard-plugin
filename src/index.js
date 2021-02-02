//Import package dependencies
import { __ } from "@wordpress/i18n";
import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { PanelBody, TextControl } from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";
//Imports to create custom store for input fields
import {Popstore} from './my-store.js';
//Import styles
import './popcard-style.css';
import './popcard-editor.css';
//Import FormatButton
import {FormatButton} from './format-button.js';
//import {PopcardButton} from './el-popcard-button.js';

// Look at @wordpress/compose for another higher order component solution

let PopcardInputs = (props) => {
  
  return (
    <>
      <PanelBody
        title={__("Popcard Details", "textdomain")}
        icon="admin-post"
        intialOpen={ true }
      >
        
        <TextControl
        label="Heading"
        placeholder="Enter heading/title"
        onChange={ (val) => props.onTitleChange( val) }
        />
        <TextControl
        label="Url"
        placeholder="Enter url"
        onChange={ (val) => props.onUrlChange( val) }
        />
        <TextControl
        label="Link text"
        placeholder="Enter text for url"
        onChange={ (val) => props.onUrlTextChange( val) }
        />
        
      </PanelBody>
    </>
  )
}
  
  //My popcard inputs
  PopcardInputs = withSelect(
    (select) => {
        return {
            title: select('popcard/data').getPopcard('title'),
            url: select('popcard/data').getPopcard('url'),
            urlText: select('popcard/data').getPopcard('urlText'),
        }
    }
  )(PopcardInputs);
  
  PopcardInputs = withDispatch(
    (dispatch) => {
    return {
      onTitleChange: (val) => {
        dispatch('popcard/data').setPopcard('title', val)
        },
      onUrlChange: (val) => {
      	dispatch('popcard/data').setPopcard('url', val)
      },
      onUrlTextChange: (val) => {
      	dispatch('popcard/data').setPopcard('urlText', val)
    	}
    }
  }
  )(PopcardInputs);





registerPlugin( 'popcard-sidebar', {
  icon: 'testimonial',
  render: () => {
    return (
      <>
        <PluginSidebarMoreMenuItem
          target="popcard-sidebar"
        >
          {__('popCard Options', 'textdomain')}
        </PluginSidebarMoreMenuItem>
      
        <PluginSidebar
          name="popcard-sidebar"
          title={__('Popover Options', 'textdomain')}
        >
          <PopcardInputs />
        </PluginSidebar>
        
        
      </>
    )
  }
})



