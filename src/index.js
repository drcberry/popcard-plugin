//Import package dependencies
import { __ } from "@wordpress/i18n";
import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { PanelBody, TextControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";

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
          value={wp.data.select('core/editor').getEditedPostAttribute('meta')['_popcard_text_metafield']}
          label={__("Link Text", "textdomain")}
        />
      </PanelBody>
    </>
  )
}



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




