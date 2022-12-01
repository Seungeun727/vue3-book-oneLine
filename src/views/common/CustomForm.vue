<template>
  <div class="custorm-form-conatiner">
    <div class="form-inner">
      <slot 
        name="header" />
      <slot 
        name="main">
        <Form
          v-slot="{ meta, errors, values }"
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
                :placeholder="field.placeholder"
                :class="{ invalid: errors[field.name] !== undefined, valid: meta.touched && meta.valid }" />
              <span v-if="field.status == false">
                <input
                  v-if="(state.msg == false || values['id'] !== undefined)"
                  :disabled="(state.msg == true && values['id'] !== undefined)"
                  type="button"
                  class="btn btn--outline--blue"
                  value="중복확인"
                  @click="duplicateIdCheck(values['id'])">
                <button
                  type="button"
                  class="btn btn--outline--circle"
                  @click="resetField(values['id'] = '')">
                  <FontAwesomeIcon
                    icon="fa-solid fa-xmark" /> 
                </button>
              </span>
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
              <span
                v-if="(values['id'] !== undefined && field.name == 'id')"
                class="warn">
                <FontAwesomeIcon
                  icon="circle-exclamation" />
                {{ "중복 확인은 필수입니다." }}
              </span>
            </div>
            <slot name="footer" />
          </div>
        </Form>
      </slot> 
    </div>
  </div>
</template>

<script>
import { Form, Field } from 'vee-validate';
import { reactive, computed, onUpdated } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

export default {
  components: {
    Form,
    Field,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  emits: {'child': null},
  setup(props, context) { 
    const store = useStore();
    const state = reactive({
      msg: false,
      isCheck: computed(() => store.state.user.status),
      visible: false,
    });

    onUpdated((values) => {
      if(state.msg === true) {
        onSubmit(values);
      }
    });

    const onSubmit = (signInfo) => {
      if(state.msg == true) {
        context.emit("child", signInfo);
      } 
    };
    
    const duplicateIdCheck = (async (value) => {
      console.log(value);
      const regexId = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,20}$/;
      if((value == 'null' || value == undefined) || !regexId.test(value)) return false;
      await axios.get(`${process.env.VUE_APP_API_URL}/user/register/` + value, {
        headers: { 'Content-Type': 'application/json'}
      }).then(res => {
        console.log(res.data);
        return state.msg = res.data.status;
      }).catch(err => {
        console.log(err.response.data);
        return state.msg = err.response.data;
      });
    });

    const resetField = () => {};
    return {
      state,
      duplicateIdCheck,
      onSubmit,
      resetField,
    };
  }
}
</script>

<style lang="scss" scoped>
.custorm-form-conatiner {
  width: 600px;
  height: 900px;
  position: absolute;
  left: 40%;
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

.warn {
  display: block;
  color: #0048ff;
  font-size: $font-size-small;
  font-weight: 500;
}
.svg-inline--fa.fa-circle-check {
  position: absolute;
  bottom: 15px;
  right: 120px;
}
.btn.btn--outline--circle {
  position: relative;
  right: 130px;
  bottom: 2px;
}
</style> 