<template>
  <div class="custorm-form-conatiner">
    <slot 
      name="header" />
    <slot 
      name="main">
      <ConfirmForm />
      <Form
        v-slot="{ meta, errors }"
        @submit="onSubmit">
        <div class="form-inner">
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
              :class="{ invalid: errors[field.name] !== undefined, valid: meta.touched && meta.valid }" />         
            <span 
              v-if="errors[field.name] !== undefined"
              class="error-status">
              <FontAwesomeIcon icon="circle-exclamation" />
              {{ errors[field.name] }}
            </span>
            <span
              v-if="meta.touched && meta.valid"
              class="success-status">
              <FontAwesomeIcon
                icon="circle-check" />
            </span>
          </div>
          <slot name="footer" />
        </div>
      </Form>
    </slot> 
  </div>
</template>

<script>
import { Form, Field } from 'vee-validate';
import ConfirmForm from '../user/ConfirmForm.vue';

export default {
  components: {
    Form,
    Field,
    ConfirmForm
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  emits: {'child': null},
  setup(props, context) { 
    const onSubmit = (signInfo) => {
      context.emit("child", signInfo);
    };

    return {
      onSubmit,
    };
  }
}
</script>

<style lang="scss" scoped>
.custorm-form-conatiner {
  width: 600px;
  height: 900px;
  margin: 10px auto;
  background-color: #fff;
}

.input-area {
  position: relative;
  padding-top: 7px;
}
.invalid {
  border-color: $dark-pink;
  font-size: $font-size-small;
  font-weight: 500;
}
.error-status {
  display: block;
  color: $dark-pink;
  font-size: $font-size-small;
  font-weight: 500;
}

.success-status {
  color: green;
  display: block;
  font-size: $font-size-small;
  font-weight: 500;
}
.valid {
  border-color: green;
  font-size: $font-size-small;
  font-weight: 500;
}
.svg-inline--fa.fa-circle-check {
  position: absolute;
  bottom: 15px;
  right: 120px;
}
</style>