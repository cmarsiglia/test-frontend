<template>
  <section class="wk-auth">
    <div class="wk-form">
      <div>
        <div class="wk-form-welcome">Rick&Morty</div>
        <div class="wk-form-title">Iniciar Sesion</div>
      </div>
      <div>
        <div class="wk-form-label">Email</div>
        <div class="wk-form-item">
            <input
              type="text"
              v-model="form.email"
              class="wk-input"
              placeholder="Ingresas tú Email"
              required="required">
            <span v-if="msg.email">{{ msg.email }}</span>
        </div>
        <div class="wk-form-label">Contraseña</div>
        <div class="wk-form-item">
            <input
              type="password"
              v-model="form.password"
              class="wk-input"
              placeholder="Ingresa tú Contraseña"
              required="required">
              <span v-if="msg.password">{{msg.password}}</span>
        </div>
        <div class="wk-form-item">
            <button type="button" @click="login()" class="wk-button wk-button--primary wk-button-custom">LOGIN</button>
        </div>
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
      msg: [],
      form: {
        email: '',
        password: ''
      }
    }
  },
  watch: {
    email (value) {
      this.form.email = value
      this.validateEmail(value)
    },
    password (value) {
      this.form.password = value
      this.validatePassword(value)
    }
  },
  methods: {
    submit () {
      if (this.form.email.length & this.form.password.length) {
        console.log(this.form.email.length)
        // this.login()
      } else {
        alert('Problemas de usuario / constrasela')
      }
    },
    async login () {
      const param = {
        email: this.form.email,
        password: this.form.password
      }
      const response = await this.$api.$post('/login', param)

      this.$cookies.set('sesionID', response.token, {
        path: '/',
        maxAge: 60 * 60 * 24 * 3
      })
      this.$store.dispatch('DATA_USER', response.user)
      console.log(response)
      this.$router.replace('/')
    }
  }
}
</script>
