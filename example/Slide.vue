<template>
<ty-card>
    <h4>Slide</h4>
    <div>
        <ty-slide :speed="500" :time="5000" type="ease" :data="slide"/>
    </div>
</ty-card>
</template>
<script>

export default {
    data() {
        return {
            slide: ['https://play.min.io/just-playing/76d17b15-03bf-48e4-a05b-00969c73c159.jpg', 'https://play.min.io/just-playing/59f05bbf-a901-4e9b-bccd-60271356f486.jpg']
        }
    }
}
</script>
