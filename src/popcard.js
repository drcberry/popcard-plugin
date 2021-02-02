//Component to create custom element fro popCard

class Popcard extends HTMLElement {
    
    
  connectedCallback() {
  
    //this.setAttribute('class', 'popcard-link');
    
    let isTitle = wp.data.select('popcard/data').getPopcard('title');
    //let isUrl = wp.data.select('popcard/data').getPopcard('url');
    //let isUrlText = wp.data.select('popcard/data').getPopcard('urlText');
    let startSelection = wp.data.select('core/block-editor').getSelectionStart().offset;
    let endSelection = wp.data.select('core/block-editor').getSelectionEnd().offset;
    let currentSelection = wp.data.select('core/block-editor').getSelectedBlock().attributes.content.slice(startSelection, endSelection);
    
    const spanPop = `<span class="popcard" data-span-popid="1" >Title is: ${isTitle}<br><a href="#">link</a></span>`;
      //this.insertAdjacentHTML('beforeend', spanPop);
    const popcardEl = `<a href="#">${currentSelection}</a><span class="popcard" data-span-popid="1" >Title is: ${isTitle}<br><a href="#">link</a></span>`;
    this.innerHTML = popcardEl;
    
    
  }
 
}

customElements.define('pop-card', Popcard);
