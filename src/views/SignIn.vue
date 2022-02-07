<template>
  <Stack space="6rem">
    <Stack space="2.3rem" class="u--align-items-center">
      <img src="@/assets/logo.png" alt="Logo of the site" class="logo"/>
      <Stack space="0.2rem" class="u--align-items-center">
        <Text tag="h1" type="title">Sign in</Text>
        <Text>Don’t you have an account yet ?
          <Link to="/register">Create an account</Link>
        </Text>
      </Stack>
    </Stack>
    <Stack space="3.2rem">
      <Text>Username</Text>
      <Text>Password</Text>
      <Link to="/password-reset">I forgot my password</Link>
      <Text>Stay logged in</Text>
    </Stack>
    <button>Sign Up</button>
  </Stack>
</template>

<script>
import Text from "@/components/Text";
import Stack from "@/components/Stack";
import Link from "@/components/Link";

export default {
  name: "SignIn",
  components: {Link, Stack, Text}
}
</script>

<style>
.logo {
  width: 5.7rem;
  height: 5.7rem;
}

</style>