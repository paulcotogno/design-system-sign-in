<template>
  <Stack space="5rem" class="u--text-align-center">
    <Stack space="2.3rem" class="u--align-items-center ">
      <img src="@/assets/sign-in-logo.svg" alt="Logo of the site" class="logo"/>
      <Text tag="h1" type="title">A mail has been sent to reset your password !</Text>
    </Stack>
    <Link :to="{name:'SignIn'}">Try to sign in again</Link>
  </Stack>
</template>
<script>
import Text from "@/components/Text";
import Stack from "@/components/Stack";
import Link from "@/components/Link";

export default {
  name: "SignUp",
  components: {Stack, Text, Link},
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