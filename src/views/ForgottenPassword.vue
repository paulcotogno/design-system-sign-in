<template>
  <Stack space="6rem">
    <Stack space="2.3rem" class="u--align-items-center u--text-align-center">
      <img src="@/assets/logo.png" alt="Logo of the site" class="logo"/>
      <Text tag="h1" type="title">You forgot your password ?</Text>
    </Stack>
    <Stack space="3.2rem">
      <Text>Email</Text>
      <Text>You still want to sign up ?
        <Link :to="{name:'SignUp'}">Sign up here</Link>
      </Text>
    </Stack>
    <button @click="signIn">Send me a reset link</button>
  </Stack>
</template>

<script>
import Text from "@/components/Text";
import Stack from "@/components/Stack";
import Link from "@/components/Link";

export default {
  name: "SignUp",
  components: {Link, Stack, Text},
  methods: {
    signIn() {
      console.log("Sign In")

    }
  },
}
</script>

<style>


</style>