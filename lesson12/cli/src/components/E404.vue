<template>
	<div>
		<h1>Page not found</h1>
		<hr>
        <router-link :to="{name: 'products'}">Start from start page</router-link>
        <hr>
        <p class="some">Some Text</p>
        <p class="other">Other Text</p>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>

    .some{
        color: red;
    }
    .other{
        color: green;
    }

</style>
