<template>
	<div>
		<h1>Page not found</h1>
		<hr>
        <router-link :to="{name: 'products'}">Start from start page</router-link>
        <hr>
        <p :class="colors.red">Some Text</p>
        <p :class="colors.green">Other Text</p>
	</div>
</template>

<script>
	export default {

	}
</script>

<style module="colors">

    .red{
        color: red;
    }
    .green{
        color: green;
    }

</style>
