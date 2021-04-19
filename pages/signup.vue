<template>
  <section class="wk-auth">
    <div class="wk-form">
      <div>
        <div class="wk-form-welcome">Rick&Morty</div>
        <div class="wk-form-title">Crear Cuenta</div>
      </div>
      <div>
        <div class="wk-form-label">Nombre</div>
        <div class="wk-form-item">
            <input type="text" v-model="form.name" class="wk-input" placeholder="Ingresas tú Nombre">
        </div>
        <div class="wk-form-label">Email</div>
        <div class="wk-form-item">
            <input type="text" v-model="form.email" class="wk-input" placeholder="Ingresas tú Email">
        </div>
        <div class="wk-form-label">Contraseña</div>
        <div class="wk-form-item">
            <input type="password" v-model="form.password" class="wk-input" placeholder="Ingresa tú Contraseña">
        </div>
        <div class="wk-form-item">
            <button type="button" @click="signup()" class="wk-button wk-button--primary wk-button-custom">Regitrarme</button>
        </div>
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
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signup () {
      const param = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password
      }
      const response = await this.$api.$post('/register', param)
      if (response) {
        alert('Usuario creado correctamente')
        this.$router.replace('/login')
      } else {
        alert('Problemas para crear el usuario')
      }
    }
  }
}
</script>
<style>

</style>
