<template>
	<div>
		<app-header :cnt="cnt"></app-header>
		<app-content 
			@minus="onMinus"
			@plus="onPlus"
			>
		</app-content>
	</div>
</template>

<script>
  import AppContent from "./components/Content"
  import AppHeader from "./components/Header"

	export default {
		data(){
			return {
				cnt:0
			}
		},
		methods:{
			onMinus(){
				if(this.cnt > 0){
					this.cnt--;
				}
			},
			onPlus(){
				this.cnt++;
			}
		},
		components:{
			AppContent,
			AppHeader
		}

	}
</script>
