<template>
  <div class="masonry" :style="masonryLayoutStyles">
    <div class="title">{{ $props.title }}</div>
    <div class="subtitle">{{ $props.subtitle }}</div>
      <slot/>
  </div>
</template>

<script>
export default {
  name: 'Masonry',
  props: {
    title: {
        required: true,
        type: String,
    },
    subtitle: {
        required: true,
        type: String,
    },
    columnWidth: {
      type: Number,
      default: 550,
    },
    columnGap: {
      type: Number,
      default: 30,
    },
    margin: {
      type: Number,
      default: 60,
    },
  },
  computed: {
    columnCount() {
      const initialWidth = window.innerWidth - this.$props.margin * 2;
      const columnWidth = this.$props.columnWidth + this.$props.columnGap;
      let columnCount = 0;
      let masonryWidth = 0;
      while (masonryWidth <= initialWidth) {
          columnCount++;
          if (this.masonryWidth
              + columnWidth
              + this.$props.columnWidth > initialWidth) {
            masonryWidth += this.$props.columnWidth;
            break  
          }
          masonryWidth += this.$props.columnWidth + this.$props.columnGap;
      }
      return columnCount;
    },
    masonryLayoutStyles() {
      const gapsWidth = (this.columnCount - 1) * this.$props.columnGap;
      const columnsWidth = this.columnCount * this.$props.columnWidth;
      const masonryWidth = columnsWidth + gapsWidth;
      return {
        margin: `${this.$props.margin}px ${this.$props.margin}px 0 ${this.$props.margin}px`,
        width: `${masonryWidth}px`,
        'column-count': this.columnCount,
        'column-gap': `${this.$props.columnGap}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.masonry {
  column-fill: balance;
}

.title {
  column-span: all;
  color: #000;
  font-size: 36px;
  font-family: $montserratAlternates;
  text-transform: capitalize;
  font-weight: bold;
}

.subtitle {
  column-span: all;
  margin-top: 20px;
  font-family: $sourceSansPro;
  color: $neutralDarker;
  font-size: 18px;
}
</style>