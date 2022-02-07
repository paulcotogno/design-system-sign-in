<template>
  <router-link :to="to" class="link"><Text color="yellows-yellow" tag="span"><slot/></Text></router-link>
</template>
<script>
import Text from "@/components/Text"
export default {
  name: "Link",
  props: {
    to: {
      type: Object
    },
  },
  components : {
    Text
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
  transition: text-decoration;
}
.link:hover {
  text-decoration: underline;
  text-decoration-color: var(--color-yellows-yellow);
}
</style>