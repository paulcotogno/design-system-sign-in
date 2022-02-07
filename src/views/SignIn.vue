<template>
  <Stack space="4rem">
    <Stack space="2.3rem" class="u--align-items-center"> 
      <img src="@/assets/logo.png" alt="Logo of the site" class="logo"/>
      <Stack space="0.2rem" class="u--align-items-center">
        <Text tag="h1" type="title">Sign in</Text>
        <Text>Do you already have an account ?
          <Link :to="{name:'SignUp'}">Sign up here</Link>
        </Text>
      </Stack>
    </Stack>
    <form @submit="signUp">
      <Stack space="6rem">
        <Stack space="3.2rem">
          <FormElement :label="'Username'" v-model="userName" :inputType="'text'" />
          <FormElement :label="'Password'" v-model="password" :inputType="'password'" />
          <Stack space="2.4rem">
            <FormElement :label="'Password again'" v-model="passwordAgain" :inputType="'password'" />
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
import Button from '@/components/Button';
import FormElement from '@/components/FormElement';

export default {
  name: "SignIn",
  components: {Link, Stack, Text,Button,FormElement},
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