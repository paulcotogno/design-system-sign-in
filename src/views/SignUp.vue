<template>
  <Stack space="6rem">
    <Stack space="2.3rem" class="u--align-items-center">
      <img src="@/assets/logo.png" alt="Logo of the site" class="logo"/>
      <Stack space="0.2rem" class="u--align-items-center">
        <Text tag="h1" type="title">Sign up</Text>
        <Text>Don’t you have an account yet ?
          <Link :to="{name:'SignIn'}">Create an account</Link>
        </Text>
      </Stack>
    </Stack>
    <form @submit="signIn">
      <Stack space="6rem">
        <Stack space="3.2rem">
          <Input placeholder="johndoe@mail.com" v-model="username" type="email" label="Username or email" name="email" />
          <Input placeholder="**********" v-model="password" type="password" label="Password" name="password" />
          <Stack space="2.4rem">
            <input type="checkbox" v-model="stayLogged">
            <Text>Stay logged in</Text>
          </Stack>
        </Stack>
        <Button type="submit">Sign Up</Button>
      </Stack>
    </form>
  </Stack>
</template>

<script>
import Text from "@/components/Text";
import Stack from "@/components/Stack";
import Link from "@/components/Link";
import Input from '@/components/Input';
import Button from '@/components/Button';

export default {
  name: "SignUp",
  components: {Link, Stack, Text, Input, Button},
  data() {
    return {
      username: "",
      password: "",
      stayLogged: false,
    }
  },
  methods: {
    signIn(e) {
      e.preventDefault()
      console.log("Sign In")
      this.$store.commit("setUsername", this.username)
      this.$store.commit("setPassword", this.password)

      this.$router.push({name : "ConfirmConnected"})
    }
  },
}
</script>

<style>


</style>