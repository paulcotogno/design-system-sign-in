<template>
  <main class="card">
    <slot/>
  </main>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped lang="scss">
@import "../sass/abstracts/_mixins.scss";
  .card {
    width: 63rem;
    background-color: var(--color-greys-white);
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    border-radius: 2rem;
    padding: 5rem 11rem;

    @include grey-box-shadow;

  }
</style>