<template>
  <section class="wk-auth">
    <div class="wk-form">
      <div>
        <div class="wk-form-welcome">Rick&Morty</div>
        <div class="wk-form-title">Iniciar Sesion</div>
      </div>
      <div>
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          class="">
          <!-- <div class="wk-form-label">Email</div>
          <div class="wk-form-item">
              <input
                type="text"
                v-model="ruleForm.email"
                class="wk-input"
                placeholder="Ingresas tú Email"
                prop="email">
          </div>
          <div class="wk-form-label">Contraseña</div>
          <div class="wk-form-item">
              <input
                type="password"
                v-model="ruleForm.password"
                class="wk-input"
                placeholder="Ingresa tú Contraseña"
                prop="password">
          </div> -->
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
              <button type="button" @click="submitForm('ruleForm')" class="wk-button wk-button--primary wk-button-custom">LOGIN</button>
          </div>
        </el-form>
      </div>
      <div>
        <span>¿Ya tienes una cuenta? </span>
        <nuxt-link to="/signup">Registrarme</nuxt-link>
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
        email: '',
        password: ''
      },
      rules: {
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
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async login () {
      const param = {
        email: this.ruleForm.email,
        password: this.ruleForm.password
      }
      await this.$api.$post('/login', param)
        .then((response) => {
          this.$cookies.set('sesionID', response.token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 3
          })
          this.$store.dispatch('DATA_USER', response.user)
          console.log(response)
          this.$router.replace('/')
        }).catch((error) => {
          console.log(error)
          this.$message.error('Error en tu email o contraseña, Intenta ingresar de nuevo. ')
        })
    }
  }
}
</script>
