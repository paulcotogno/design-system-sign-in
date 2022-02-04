<template>
  <Card>
    <router-view/>
  </Card>
</template>
<script>
import Card from "@/components/Card";
export default {
  components : {Card}
}
</script>
<style lang="scss">
  #app {
    width: 100%;
    min-height: 100vh;
    background: var(--color-yellows-yellow-to-red-gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
</style>
