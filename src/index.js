//Import package dependencies
import { __ } from "@wordpress/i18n";
import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { PanelBody, TextControl } from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";

// Look at @wordpress/compose for another higher order component solution

let PopcardInputs = (props) => {
  
  let link = 'link';
  //document.querySelector('code').textContent;
  return (
    <>
      <PanelBody
        title={__("Popcard Info", "textdomain")}
        icon="admin-post"
        intialOpen={ true }
      >
        <TextControl
          label={__("Link Text", "textdomain")} 
          value={props.text_metafield}
          onChange={(value) => props.onMetaFieldChange(value)}
        />
      </PanelBody>
    </>
  )
}
  PopcardInputs = withSelect(
    (select) => {
        return {
            text_metafield: select('core/editor').getEditedPostAttribute('meta')['_popcard_text_metafield']
        }
    }
  )(PopcardInputs);
  
  PopcardInputs = withDispatch(
    (dispatch) => {
    return {
      onMetaFieldChange: (value) => {
        dispatch('core/editor').editPost({meta: {_popcard_text_metafield: value}})
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




