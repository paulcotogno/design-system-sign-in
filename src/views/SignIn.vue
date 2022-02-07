<template>
  <Stack space="6rem">
    <Stack space="2.3rem" class="u--align-items-center"> 
      <img src="@/assets/logo.png" alt="Logo of the site" class="logo"/>
      <Stack space="0.2rem" class="u--align-items-center">
        <Text tag="h1" type="title">Sign in</Text>
        <Text>Do you already have an account ?
          <Link :to="{name:'SignUp'}">Sign up here</Link>
        </Text>
        <Input placeholder="johndoe@mail.com" type="email" label="Username or email" name="email" />
        <Input placeholder="**********" type="password" label="Password" name="password" />
        <Link to="/register" style="marginTop=3rem">I forgot my password</Link>
        <Button>Sign In</Button>
      </Stack>
    </Stack>
    <form @submit="signUp">
      <Stack space="6rem">
        <Stack space="3.2rem">
          <Text>Username</Text>
          <input type="text" v-model="userName" required>
          <Text>Password</Text>
          <input type="text" v-model="password" required>
          <Stack space="2.4rem">
            <Text>Password Again</Text>
            <input type="password" v-model="passwordAgain" required>
            <Link :to="{name : 'ForgottenPassword'}">I forgot my password</Link>
            <Text>Stay logged in</Text>
          </Stack>
        </Stack>
        <button type="submit">Sign Up</button>
      </Stack>
    </form>

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
  components: {Link, Stack, Text, Button, Input,},
  data() {
    return {
      userName: "",
      password : "",
      passwordAgain : "",

    }
  },
  methods: {
    signUp(e) {
      e.preventDefault()
      console.log("Sign Up")

      this.$router.push({name : "SignUp"})
    }
  },
}
</script>

<style>


</style>