<template>
<button>{{text}}</button>
</template>

<script>
	export default {
		props: {
			text: {
				default: "click here"
			}
		},
		setup () {
			return {}
		}
	}
</script>
