//My Store
import { registerGenericStore } from '@wordpress/data';
 
function createPopcardStore() {
    let storeChanged = () => {};
    let popcard = {
      
          id: 1, 
          title: 'Enter title',
          url: 'Url',
          urlText: 'url text',
        
      
    };
 
    const selectors = {
        getAll() {
          return popcard;
        },
        getPopcard( item ) {
          
          return popcard[item];
          //return newStore;
        },
    };
 
    const actions = {
        setPopcard( item, val ) {
            //const newCard = {id: item, title: item2};
            popcard[item] = val;
            
            storeChanged();
            console.log('action',popcard);
        },
        updatePopcard( item, val ) {
            
        }
        /*removePopcard(id) {
          //const newStore = popcard.filter( (item) => item.id !== id);
          //popcard = newStore;
          //storeChanged();
          //popcard.filter( (item) => item.id !== id)];
          storeChanged();
        }
        */
    };
 
    return {
        getSelectors() {
            return selectors;
        },
        getActions() {
            return actions;
        },
        subscribe( listener ) {
            storeChanged = listener;
        },
    };
}
const Popstore ='popcard/data'; 
registerGenericStore( Popstore, createPopcardStore() );

export {Popstore};
