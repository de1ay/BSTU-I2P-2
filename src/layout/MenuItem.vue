<template>
  <router-link class="menu-item"
    active-class="menu-item--active"
    :to="to">
      {{ displayName }}
      <slot/>
  </router-link>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        name: {
            required: true,
            type: String,
        },
        text: {
            type: String,
            default: '',
        },
    },
    computed: {
        to: function() {
            return {
                name: this.$props.name,
            };
        },
        displayName: function() {
            return this.$props.text ? this.$props.text : this.$props.name;
        },
    },
}
</script>

<style lang="scss" scoped>
.menu-item {
    margin-right: 30px;
    color: rgba(0, 0, 0, 0.5);
    font-family: $sourceSansPro;
    text-transform: uppercase;
    text-decoration: none;
    transition: color ease-in-out 0.3s;

    &:hover {
        color: rgba(0, 0, 0, 1);
    }

    &:visited {
        color: rgba(0, 0, 0, 0.5);
    }

    &:focus {
        outline: none;
    }

    &--active {
        color: rgba(0, 0, 0, 1);
    }

}
</style>