<template>
  <Stack space="5rem">
    <Stack space="2.3rem" class="u--align-items-center u--text-align-center">
      <img src="@/assets/sign-in-logo.svg" alt="Logo of the site" class="logo"/>
      <Text tag="h1" :type="'title'">Cool to see you {{ userName }} !</Text>
    </Stack>
    <Button @click="personalSpace" type="button">Go to my personal space</Button>
  </Stack>
</template>
<script>
import Text from "@/components/Text";
import Stack from "@/components/Stack";
import Button from '@/components/Button';
import {mapState} from "vuex";

export default {
  name: "SignUp",
  components: {Stack, Text, Button},
  computed: mapState(["userName"]),
  methods: {
    personalSpace() {
      console.log("Sign In")

      this.$router.push({name: "SignUp"})
    }
  },
}
</script>
<style>
</style>