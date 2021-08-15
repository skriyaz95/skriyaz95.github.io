<template>
  <div class="paragraph">
    <h3>{{content.metadata.pres_title}}</h3>
    <p class="begin">{{content.metadata.pres_first}}</p>
    <p>{{content.metadata.pres_second}}</p>
  </div>
</template>

<script>
export default {
    name: 'Description',
    props: ['content']
}
</script>

<style scoped lang="scss">
    @import '@/styles/constants.scss';

    .paragraph {
        color: map-get($colors, primary);
        margin-bottom: 1.2rem;
    }
</style>
