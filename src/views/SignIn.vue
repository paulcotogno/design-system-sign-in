<template>
  <Stack  space="6rem">
    <Stack space="2.3rem" class="u--align-items-center">
      <img src="@/assets/logo.png"  alt="Logo of the site" class="logo"/>
      <Stack space="0.5rem" class="u--align-items-center">
        <Text tag="h1" type="title">Sign in</Text>
        <Text>Don’t you have an account yet ? <Link to="/register">Create an account</Link></Text>
        <Input placeholder="johndoe@mail.com" type="email" label="Username or email" name="email" />
        <Input placeholder="**********" type="password" label="Password" name="password" />
        <Link to="/register" style="marginTop=3rem">I forgot my password</Link>
        <Button>Sign In</Button>
      </Stack>

    </Stack>

  </Stack>
</template>

<script>
import Text from "@/components/Text";
import Stack from "@/components/Stack";
import Link from "@/components/Link";
import Button from "@/components/Button";
import Input from '@/components/Input.vue';
export default {
  name: "SignIn",
  components: {Link, Stack, Text, Button, Input,}
}
</script>

<style>
.logo {
  width: 5.7rem;
  height: 5.7rem;
}

</style>