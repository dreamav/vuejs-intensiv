<template>
	<div>
		<h2>Product title</h2>
		<div class="price">
			1000
		</div>
		<hr>
		<button class="btn btn-warning" @click="minus">-1</button>
		<button class="btn btn-success" @click="plus">+1</button>
	</div>
</template>

<script>
  import {mapMutations} from "vuex";

	export default {
		data(){
			return {
				cnt: 0,
			}
		},
		methods:{
			...mapMutations([
        'plus',
        'minus'
      ]),
		}
	}
</script>
