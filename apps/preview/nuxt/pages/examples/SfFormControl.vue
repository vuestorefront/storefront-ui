<template>
  <div class="w-full max-w-md mx-auto p-4">
    <form @submit.prevent="submit">
      <SfFormControl :invalid="!!errors.email && meta.email.touched" disabled>
        <SfFormLabel>Email</SfFormLabel>
        <SfInput v-model="email" />
        <SfFormError>{{ errors.email?.message }}</SfFormError>
      </SfFormControl>

      <SfFormControl :invalid="!!errors.password && meta.password.touched">
        <SfFormLabel>Password</SfFormLabel>
        <SfInput v-model="password" />
        <SfFormError>{{ errors.password?.message }}</SfFormError>
      </SfFormControl>

      <!-- Uncontrolled input -->
      <SfInput v-model="uncontrolled" />

      <SfButton type="submit" class="mt-3">Submit</SfButton>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { SfInput, SfFormControl, SfFormError, SfFormLabel, SfButton } from '@storefront-ui/vue';

interface Fields {
  email: string;
  password: string;
}

interface FieldError {
  message: string;
}

interface FieldMeta {
  touched: boolean;
}

const email = ref('');
const password = ref('');
const uncontrolled = ref('');

const errors = ref<Record<keyof Fields, FieldError | null>>({
  email: null,
  password: null,
});
const meta = ref<Record<keyof Fields, FieldMeta>>({
  email: { touched: false },
  password: { touched: false },
});

const validate = (values: Fields) => {
  const err: Record<keyof Fields, FieldError | null> = {
    email: null,
    password: null,
  };

  if (!values.email.includes('@')) {
    err.email = {
      message: 'Provide a valid email',
    };
  }
  if (!values.email) {
    err.email = {
      message: 'Email is required',
    };
  }
  if (values.password.length < 10) {
    err.password = {
      message: 'Password must be at least 10 characters',
    };
  }
  if (!values.password) {
    err.password = {
      message: 'Provide strong password',
    };
  }

  errors.value = err;
};

watch(email, () => {
  meta.value = { ...meta.value, email: { touched: true } };
});
watch(password, () => {
  meta.value = { ...meta.value, password: { touched: true } };
});

const submit = () => {
  const values = { email: email.value, password: password.value };
  meta.value = { email: { touched: true }, password: { touched: true } };
  validate(values);
};
</script>
