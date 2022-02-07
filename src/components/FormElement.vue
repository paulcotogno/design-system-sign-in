<template>
    <div class="input-container">
        <Text class="label" :type="'small'" >{{ label }}</Text>
        <input :type="inputType" :placeholder="placeholder">
    </div>
</template>

<script>
import Text from '@/components/Text';
export default {
    name: "FormElement",
    components: {
        Text
    },
    props: {
        label :{
            type: String,
            default: 'label',
        },
        inputType: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: 'Type something ...'
        },
        error: {
            type: String,
            default: undefined,
        }
    }
}
</script>

<style lang="scss">
    @import "src/sass/abstracts/mixins-text";

    .input-container{
        width: 100%;
        input{
            width: 100%;
            border-radius: 10px;
            height: 3.5rem;
            padding-left: 1rem;
            &:focus{
                box-shadow: 0 5px 5px var(--color-yellows-yellow);
            }
            ::placeholder{
                @include text-default;
            }
        }
    }

    .label{
        margin-left: 1.3rem;
    }
</style>