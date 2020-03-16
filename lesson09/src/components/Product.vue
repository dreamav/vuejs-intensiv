<template>
	<div>
		<h2>Product title</h2>
		<div class="price">
			1000
		</div>
		<hr>
		<button class="btn btn-warning" @click="onMinus">-1</button>
		<button class="btn btn-success" @click="onPlus">+1</button>
	</div>
</template>

<script>

	export default {
		data(){
			return {
				cnt: 0,
			}
		},
		methods:{
			onMinus(){
				if(this.$store.state.cnt > 0){
					this.$store.state.cnt--;
				}
			},
			onPlus(){
				this.$store.state.cnt++;
			}
		}
	}
</script>