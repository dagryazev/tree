import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    blocks:[
      {
        id: 1,
        value: 1,
        parent: null
      },
      {
        id: 2,
        value: 2,
        parent: 1
      },
      {
        id: 3,
        value: 3,
        parent: 1
      },
      {
        id: 4,
        value: 4,
        parent: 2
      },
      {
        id: 5,
        value: 5,
        parent: 1
      }
    ],
    stringSearch: ''
  },
  getters: {
    blocks(state){
      return state.blocks.map( item => item )
    },
    stringSearch(state){
      return state.stringSearch
    },
    renderTree: state => value => {
      let result = [],
          bool = false,
          arr = JSON.parse( JSON.stringify( state.blocks ) );
      for( let item of arr ){
        if (item.parent == null) {
          result.push(item);
        } else {
          let parent = arr[item.parent - 1];
          if (!parent.children) parent.children = [];
          parent.children.push(item);
        }
        delete item.parent;

        if(item.value == state.stringSearch){
          bool = false;
          break;
        }else{
          if(state.stringSearch != '')bool = true
        }
      }

      if(bool === false)
        return(result[0]);
      else return {id: 1, value: "Нету соответсвий"};
    }
  },
  mutations: {
    postBlock(state, value){
      let blocksArray = Object.keys( state.blocks ),
          parent = parseInt( blocksArray[ Math.floor( ( blocksArray.length - 1 ) * Math.random() ) ] ) + 1,
          lastId = blocksArray.length + 1;
      state.blocks.push( { id: lastId, parent, value } )
    },
    update_stringSearch(state, value){
      state.stringSearch = value
    }
  }
})

export default store
