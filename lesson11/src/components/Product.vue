<template>
	<div>
		<h1>{{ product.title }}</h1>
		<hr>
		<div class="alert alert-success">
            {{ product.price }}
		</div>

	</div>
</template>

<script>
	export default {
        computed:{
            id(){
                return this.$route.params.id;
            },
            product(){
                return this.$store.getters['products/item'](this.id);
            }
        }
	}
</script>
