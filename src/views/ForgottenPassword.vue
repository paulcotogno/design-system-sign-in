<template>
  <Stack space="6rem">
    <Stack space="2.3rem" class="u--align-items-center u--text-align-center">
      <img src="@/assets/logo.png" alt="Logo of the site" class="logo"/>
      <Text tag="h1" :type="'title'">You forgot your password ?</Text>
    </Stack>
    <form @submit="sendMail">
      <Stack space="6rem">
        <Stack space="3.2rem">
          <FormElement :label="'Email'" />
          <Text>You still want to sign up ?
            <Link :to="{name:'SignUp'}">Sign up here</Link>
          </Text>
        </Stack>
        <Button type="submit">Send me a reset link</Button>
      </Stack>

    </form>

  </Stack>
</template>
<script>
import Text from "@/components/Text";
import Stack from "@/components/Stack";
import Link from "@/components/Link";
import FormElement from '@/components/FormElement';
import Button from '@/components/Button';

export default {
  name: "SignUp",
  components: {Link, Stack, Text, FormElement, Button},
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