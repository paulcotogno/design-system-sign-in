<template>
  <Stack space="6rem">
    <Stack space="2.3rem" class="u--align-items-center u--text-align-center">
      <img src="@/assets/logo.png" alt="Logo of the site" class="logo"/>
      <Text tag="h1" type="title">You forgot your password ?</Text>
    </Stack>
    <form @submit="sendMail">
      <Stack space="6rem">
        <Stack space="3.2rem">
          <Text>Email</Text>
          <input type="email" v-model="email" required>
          <Text>You still want to sign up ?
            <Link :to="{name:'SignUp'}">Sign up here</Link>
          </Text>
        </Stack>
        <button type="submit">Send me a reset link</button>
      </Stack>

    </form>

  </Stack>
</template>
<script>
import Text from "@/components/Text";
import Stack from "@/components/Stack";
import Link from "@/components/Link";

export default {
  name: "SignUp",
  components: {Link, Stack, Text},
  data() {
    return {
      email: ""
    }
  },
  methods: {
    sendMail() {
      console.log("Sign In")
      this.$router.push({name : "ConfirmSendMail"})
    }
  },
}
</script>

<style>


</style>