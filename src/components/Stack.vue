<template>
  <div class="stack" :class="{'stack--recursive' : recursive}">
    <slot ></slot>
  </div>
</template>

<script>
export default {
  name: "Stack",
  props: {
    space: {
      type: String,
      default: "1.5rem"
    },
    recursive : {
      type : Boolean,
      default: false
    }
  },
  mounted() {
    for (const c of this.$el.children) {
      c.style.setProperty("--space", this.space)
    }
  }
}
</script>

<style>
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stack > * {
  margin-block: 0;
}

.stack > * + * {
  margin-block-start: var(--space, 1.5rem);
}

.stack--recursive *  {
  margin-block: 0;
}

.stack--recursive * + * {
  margin-block-start: var(--space, 1.5rem);
}
</style>