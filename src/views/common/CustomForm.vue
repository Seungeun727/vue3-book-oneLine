<template>
  <Form
    v-slot="{ errors }"
    class="form" 
    @submit="onSubmit">
    <div class="form-inner">
      <slot 
        name="header" />
      <slot name="main">
        <div
          v-for="field in schema.fields" 
          :key="field.name"
          class="input-area">
          <label :for="field.name">
            {{ field.label }}
          </label>
          <Field 
            :as="field.as" 
            :name="field.name"
            :type="field.type"
            :rules="field.rules"
            :class="{ invalid: errors[field.name] !== undefined }" />
          <ErrorMessage
            :name="field.name"
            class="error-status" />
        </div>
      </slot> 
      <slot name="footer" />
    </div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  setup() { 
    const onSubmit = (values) => {
      console.log(values);
    };
    
    return {
      onSubmit,
    };
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 600px;
  height: 900px;
  background-color: #fff;
  margin: 0 auto;
  padding-top: 50px;
  .form-inner {
    padding: 20px;
    align-items: center;
  }
}

.input-area {
  padding-top: 7px;
}
.error-status {
  display: block;
  color: $dark-pink;
  font-size: $font-size-small;
  font-weight: 500;
} 
.invalid {
  border-color: red;
  font-size: $font-size-small;
  font-weight: 500;
} 
</style>