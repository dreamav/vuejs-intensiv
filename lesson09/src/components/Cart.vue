<template>
	<div>
		{{ cnt }}
	</div>
</template>

<script>
	export default {
		computed:{
			cnt(){
				return this.$store.state.cnt;
			}
		}
	}
</script>