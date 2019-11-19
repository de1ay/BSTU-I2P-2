<template>
    <div>
        <blog-header>
        </blog-header>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import BlogHeader from './Header.vue';

export default {
    name: 'Layout',
    components: {
        BlogHeader
    },
};
</script>

<style>

</style>