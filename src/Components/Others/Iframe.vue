<template>
<iframe ref="frame" sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-forms" :scrolling="scrolling" frameborder="0" :width="width" :height="height"/>
</template>
<script>
export default {
	name: 'TyIframe',
	props: ['src', 'width', 'height', 'scrollable', 'headers'],
	data() {
		return {
			html: null,
			scrolling: false
		}
	},
	async mounted() {
		if (typeof this.scrollable== 'boolean') this.scrolling = this.scrollable;
		let options = {...(typeof this.headers == 'object'?{headers: this.headers}:{})}
		const res = await (await fetch(this.src, options)).json();
		this.$refs.frame.contentDocument.write(res.data);
		this.$refs.frame.style.height = this.$refs.frame.contentWindow.document.documentElement.scrollHeight + 'px';
	}
}
</script>
<style scoped>
html, body {
    pointer-events: none;
}
</style>