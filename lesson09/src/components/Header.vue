<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col col-sm-12">
					<h1>Site</h1>
					<app-cart :cnt="cnt"></app-cart>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import AppCart from "./Cart"

	export default {
		props: ['cnt'],
		components:{
			AppCart
		}
	}
</script>