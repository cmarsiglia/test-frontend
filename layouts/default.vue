<template>
  <div>
    <div class="wk-navbar">
      <div class="wk-navbar-logo">Rick&Morty</div>
      <ul>
        <li>{{ userName }}</li>
        <li>GitHub</li>
      </ul>
    </div>
    <div>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: ''
    }
  },
  mounted () {
    this.userName = this.$store.getters.userName
  }
}
</script>

<style>
.wk-navbar{
  display: grid;
  grid-template-columns: 150px 1fr;
  width: 100%;
  height: 80px;
  grid-gap: 20px;
  padding: 10px 20px;
  align-content: center;
  background-color: var(--color-body-secondary);
  color: var(--color-text-primary);
}

.wk-navbar .wk-navbar-logo{
  display: grid;
  grid-template-rows: 1fr;
  -webkit-box-pack: start;
  justify-content: start;
  -webkit-box-align: center;
  align-items: center;
  font-size: 25px;
  font-weight: 400;
  padding: 10px;
}

.wk-navbar ul{
  display: grid;
  grid-auto-flow: column;
  list-style-type: none;
  grid-gap: 5px;
  padding: 10px;
  -webkit-box-pack: end;
  justify-content: end;
  -webkit-box-align: center;
  align-items: center;
}
/* html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */
</style>
