import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		cnt: 1,
	},
	mutations:{
		minus(state){
			if(state.cnt > 0){
				state.cnt--;
			}
		},
		plus(state){
			state.cnt++;
		}		
	}
});
