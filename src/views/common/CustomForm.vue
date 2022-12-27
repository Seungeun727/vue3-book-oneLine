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
                :class="{ invalid: errors[field.name] !== undefined, valid: meta.valid && state.msg == true}" 
                @input="checkId(values['id'])" />
              <span v-if="(field.status == false && state.msg == false)">
                <input
                  :disabled="state.msg == true"
                  type="button"
                  class="btn btn--outline--blue"
                  value="중복확인"
                  @click="duplicateIdCheck(values['id'])">
                <button
                  type="button"
                  class="btn btn--outline--circle"
                  @click="resetField(values['id'] = '')">
                  <FontAwesomeIcon
                    :icon="['fas', 'xmark']" /> 
                </button>
              </span>
              <span
                v-if="errors[field.name] !== undefined"
                class="error-status">
                <FontAwesomeIcon 
                  :icon="['fas', 'circle-exclamation']" />
                {{ errors[field.name] }}
              </span>
              <span
                v-if="(values['id'] === undefined && field.name == 'id')"
                class="warn">
                <FontAwesomeIcon
                  :icon="['fas', 'circle-exclamation']" />
                {{ field.fail[1] }}
              </span>
              <span
                v-if="(values['id'] !== '' && state.msg === false && field.fail)"
                class="error-status">
                <FontAwesomeIcon
                  :icon="['fas', 'circle-exclamation']" />
                {{ field.fail[0] }}
              </span>
              <span
                v-if="(values['id'] !== '' && state.msg === true && field.fail)"
                class="success-status">
                <FontAwesomeIcon
                  :icon="['fas', 'circle-check']" />
                {{ field.fail[2] }}
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
import { reactive, watch } from 'vue';
import userInfo from '../../utils/maskUserInfo';
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
    const state = reactive({
      id: '',
      msg: '',
    });
    
    const onSubmit = (signInfo) => {
      console.log("customForm signInfo", signInfo);
      let { name, email } = signInfo;
      const maskData = userInfo(name, email);
      const { maskName, maskEmail } = maskData;
      signInfo.name = maskName;
      signInfo.email = maskEmail;
      if(state.msg == true) {
        context.emit("child", signInfo);
      } 
    };
    
    const resetField = () => {
      state.msg = '';
    };

    const checkId = (id) => {
      state.id = id;
    };
    watch(
      ()=> state.id,
      (prevId, currentId) => {
        if(prevId !== currentId) {
          state.msg = '';
        }
      },
    );
    const duplicateIdCheck = (async (userId) => {
      const regexId = /^(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,20}$/;
      if((userId == 'null' || userId == undefined) || !regexId.test(userId)) return false;
      await axios.get(`${process.env.VUE_APP_API_URL}/user/register/` + userId, {
        headers: { 'Content-Type': 'application/json'}
      }).then(res => {
        console.log(res.data);
        state.msg = res.data.status;
      }).catch(err => {
        console.log(err.response);
        state.msg = err.response.data.status;
      });
    });

    return {
      state,
      resetField,
      checkId,
      duplicateIdCheck,
      onSubmit,
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

.btn.btn--outline--circle {
  position: relative;
  right: 130px;
  bottom: 2px;
}
</style> 