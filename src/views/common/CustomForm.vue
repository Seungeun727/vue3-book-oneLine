<template>
  <Form 
    @submit="onSubmit">
    <div
      v-for="field in schema.fields" 
      :key="field.name">
      <label :for="field.name">
        {{ field.label }}
      </label>
      <Field 
        :as="field.as" 
        :name="field.name"
        :type="field.type"
        :rules="field.rules" />
      <ErrorMessage :name="field.name" />
    </div>
    <button>제출</button>
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
    }
  },
  setup() {
    function onSubmit(values) {
      console.log(values);
    }
    return {
      onSubmit
    }
  }

}
</script>