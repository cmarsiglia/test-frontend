<template>
  <section class="wrapper">
    <div class="wk-box">
      <div
        v-for="(item, index) in character.results"
        :key="index"
        class="wk-item">
        <img :src="item.image" alt="">
        <div class="wk-item-caption">
          <p class="wk-item-title"><nuxt-link :to="{ path: 'detail', query: { id: item.id }}">{{ item.name }}</nuxt-link></p>
          <small>Especie: {{ item.species}} - Estado: {{ item.status }}</small>
          <p>{{ item.type ? `Tipo: ${item.type}`: ''}} </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'isAuth',
  data () {
    return {
    }
  },
  async asyncData ({ $api, $config }) {
    const character = await $api.$get('/character')
    return { character }
  }
}
</script>

<style>
.wk-box{
  width: 80vw;
  margin:40px auto;
}
.wk-box{
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
.wk-item{
  height: 260px;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.wk-item> img {
  width: 100%;
  vertical-align: middle;
  cursor: pointer;
}
.wk-item:hover{
  transform: scale(1.1); /* (110% zoom */
}
.wk-item-caption{
  width: 100%;
  height: 130px;
  color: white;
  padding: 30px 10px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
  rgba(44, 62, 80, 0),
  rgba(44, 62, 80, .9),
  rgba(44, 62, 80, 1),
  rgba(44, 62, 80, 1));
}
.wk-item-caption>:nth-child(1){
  font-weight: bold;
  font-size: 20px;
}
.wk-item-caption>:nth-child(2){
  color: #AEB6BF;
}
.wk-item> .wk-item-caption{
  visibility: hidden;
}
.wk-item:hover> .wk-item-caption{
  visibility: visible;
}
.wk-item-title
a:link,
a:visited,
a:active,
a:hover {
  color:#2ECC71; text-decoration: none;
}
</style>
