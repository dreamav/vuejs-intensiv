export default {
    namespaced: true,
    state:{
        products:[]
    },
    getters:{
        products(state){
            return state.products
        }
    },
    mutations:{
        add(state, id_product){
            if( state.products.indexOf(id_product) === -1 ){
                state.products.push(id_product)
            }
        }
    },
    actions:{
        add(store, id_product){
            store.commit('add', id_product)
        }
    }
};
