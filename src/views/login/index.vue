<template>
  <a-form
    :model="formState"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    :labelCol="{ style: { width: '100px' } }">
    <a-form-item label="员工账号" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item label="密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-form-item name="remember" noStyle class="checkClass" :labelCol="{ style: { width: '100px' } }">
        <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
      </a-form-item>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
  <span class="test">测试</span>
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { login } from "@/api/user";
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: "huansi",
  password: "huansi.net",
  remember: true
});
const onFinish = async (values: any) => {
  const res = await login(values);
  console.log(res, "99999");
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<style scoped>
#components-form-demo-normal-login .checkClass {
  display: flex;
  justify-content: flex-start;
}
</style>
