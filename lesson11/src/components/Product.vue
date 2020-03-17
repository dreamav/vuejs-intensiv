<template>
	<div>
		<h1>Product</h1>
		<hr>
		<div class="alert alert-success">

		</div>
        {{ id }}
	</div>
</template>

<script>
	export default {
        computed:{
            id(){
                return this.$route.params.id;
            },
        }
	}
</script>
