<template>
  <section class="wk-auth">
    <div class="wk-form">
      <div>
        <div class="wk-form-welcome">Rick&Morty</div>
        <div class="wk-form-title">Crear Cuenta</div>
      </div>
      <div>
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          class="">
        <el-form-item
          prop="name"
          label="Nombres:">
          <el-input
            v-model="ruleForm.name"
            placeholder="Ingrese su Nombre" />
        </el-form-item>
        <el-form-item
          prop="email"
          label="Correo:">
          <el-input
            v-model="ruleForm.email"
            placeholder="Ingrese Correo o Usuario" />
        </el-form-item>
        <el-form-item
          prop="password"
          label="Contraseña:">
          <el-input
            v-model="ruleForm.password"
            type="password"
            placeholder="Ingrese Contraseña" />
        </el-form-item>
        <div class="wk-form-item">
            <button type="button" @click="submitForm('ruleForm')" class="wk-button wk-button--primary wk-button-custom">Regitrarme</button>
        </div>
        </el-form>
      </div>
      <div>
        <span>Ya tengo una cuenta</span> <nuxt-link to="/login">Ingresar</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  layout: 'login',
  data () {
    return {
      ruleForm: {
        name: '',
        email: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: 'El campo es requerido', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'El campo es requerido', trigger: 'blur' },
          { type: 'email', message: 'El correo electronico no es valido', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'El campo es requerido', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.signup()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async signup () {
      const param = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password
      }
      await this.$api.$post('/register', param)
        .then((response) => {
          this.$router.replace('/login')
        })
        .catch((error) => {
          console.log(error)
          this.$message.error('Algo val mal, Intenta mas tarde. ')
        })
    }
  }
}
</script>
<style>

</style>
