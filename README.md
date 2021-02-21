# popcard-plugin
---
Small Wordpress plugin to create links with a popover. Able to input a "title", url, and text for url link in popover.

### Directions
---
Requires nodejs to run.
I used wp-env for Wordpress environment. Install with npm install -g @wordpress/env

1. Clone repository
2. Change to directory popcard-plugin
3. npm run start for dev mode. npm run build for poduction files.
4. popCard plugin should automatically activate.

### Install
---
1. I have uploaded the build as a zip file in build-zip folder
2. Open popcard-plugin.zip and download
3. In Wordpress Admin: Plugins >> Add New >> Upload popcard-plugin.zip
4. After installed, activate

### How to use
---
In the gutenberg editor, click testimonial icon in the top right bar. Popover Options sidebar will open. In Popcard Details there are 3 inputs. Heading, Url, and Link text.

1. FIRST enter a title, url(https://example.com), and text to display for link.
2. Highlight text in the page/post.
3. Select the drop-down for richtext controls > Add my popcard
4. ***DO NOT CLICK into link. First click Update.
5. ***DO NOT CLICK into/around link. Click on blank area of page to close Toolbar, then click next to link. MUST CLICK UPDATE AGAIN.
6. When you view the page, hover the link to see a popover containing the title and link.

CSS contains 4 color variables for popover background, border, text(title), and link. You can modify these to customize colors. These can be edited in the plugin editor in build>index.css


