<template>
    <header class="header">
        <div class="logo"></div>
        <div class="menu">
            <menu-item v-for="(item, index) in paths"
                :key="index" :name="item.name"
                :text="item.meta.text">
            </menu-item>
        </div>
        <div class="sign-in"></div>
    </header>
</template>

<script>
import MenuItem from './MenuItem.vue';
import { routes } from '@/router/index.js';

export default {
    name: 'Header',
    components: {
        MenuItem,
    },
    data() {
        return {
            paths: routes.filter(
                item => {
                    return item.meta.visible ? true : false;
                }
            ),
        };
    },
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: $backgroundColor;
}

.logo {
    width: 50px;
    height: 50px;
    background-color: $backgroundColor;
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>