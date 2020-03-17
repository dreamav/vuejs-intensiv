import Vue from 'vue';
import Vuex from 'vuex';

// import 'core-js/features/promise';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		cnt: 0,
		price: 1000,
        orderState: null,
	},
	getters:{
		cnt(state){
			return state.cnt;
		},
		price(state){
			return state.price;
		},
		total(state){
			return state.cnt * state.price;
		},
        orderState(state){
          return state.orderState;
        },
	},
	mutations:{
		minus(state){
			if(state.cnt > 0){
				state.cnt--;
			}
		},
		plus(state){
			state.cnt++;
		},
        orderSend(state){
            state.orderState = 'pending';
        },
        orderDone(state){
		    state.orderState = 'done';
        }
	},
    actions:{
        sendOrder(store, payLoad){
            store.commit('orderSend');

            console.log(payLoad);

            setTimeout(()=>{
                store.commit('orderDone')
            }, 1000);
        }
    }
});
