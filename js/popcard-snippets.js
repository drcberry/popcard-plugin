//JS for popcard
console.log('Popcard snippets are loaded');
            const popcardLinks = document.querySelectorAll('.popcard-link');
            
						let popspan;
				
						if(popcardLinks) {
							popcardLinks.forEach(item=> item.addEventListener('mouseenter',showSpan));
							
							const addBreakToSpan = document.querySelectorAll('.popcard');
							
							addBreakToSpan.forEach(el => el.lastElementChild.insertAdjacentHTML('beforebegin', '<br>') );
						}
						
						function showSpan(e) {
						  const popspanId = e.target.getAttribute('data-popid');
						  
						  popspan = document.querySelector(`[data-span-popid='${popspanId}']`);
						  popspan.classList.add('show-card');
						  
						  let allPopspan = document.querySelectorAll('[data-span-popid]');
						  
						  allPopspan
						  .forEach(item => {if(item.dataset.spanPopid !== popspanId) {
						    item.classList.remove('show-card') } 
						    } );
						    
						  function handleOpenSpan(evt) {
						    						    
						    let clickInside = popspan.contains(evt.target);
						    if(!clickInside) {
						    popspan.classList.remove('show-card');
						    
						    document.removeEventListener('click', handleOpenSpan);
						    }
						  }
						  
						  document.addEventListener('click', handleOpenSpan);
						  popspan.addEventListener('mouseleave', () => popspan.classList.remove('show-card'));
						}//end showSpan
