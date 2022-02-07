<template>
    <button class="btn">
        <Text v-if="state=='default'" :color="textColor"><slot></slot></Text>
    </button>
</template>

<script>
import Text from '@/components/Text';
export default {
    components: {Text},
    name: "Button",
    props: {
        state: {
            type: String,
            default: "default"
        },textColor : {
            type: String,
            default: 'greys-white',
        }
    }
}
</script>

<style lang="scss">
    .btn{
        margin-top: 3rem;
        width: 100%;
        height: 3.5rem;
        border-radius: 10px;
        border: var(--color-yellows-yellow) 2px solid;
        cursor: pointer;
        background-color: var(--color-yellows-yellow);
        &:hover{
            background-color: var(--color-yellows-light-yellow);
        }
        &:active{
            background-color: var(--color-greys-white);
        }
    }
</style>