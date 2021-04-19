<template>
  <section class="wrapper">
    <div v-if="character" class="wk-box">
      <div
        v-for="(item, index) in character.results"
        :key="index"
        class="wk-item">
        <img :src="item.image">
        <div class="wk-item-caption">
          <p class="wk-item-title">
            <nuxt-link :to="{ path: 'detail', query: { id: item.id }}">
              {{ item.name }}
            </nuxt-link>
          </p>
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 20px;
}
.wk-item{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  -webkit-transition: all .3s;
  transition: all .3s;
  border-radius: 5px;
}
.wk-item> img {
  width: 100%;
  vertical-align: middle;
  border-radius: 5px 5px 0 0;
}

.wk-item-caption{
  height: 130px;
  color: white;
  padding: 20px 10px;
  bottom: 0;
  background: linear-gradient(
  rgba(44, 62, 80, .9),
  rgba(44, 62, 80, .5),
  rgba(44, 62, 80, .3));
}
.wk-item-caption>:nth-child(1){
  font-weight: bold;
  font-size: 20px;
}
.wk-item-caption>:nth-child(2){
  color: #AEB6BF;
}
.wk-item-title
a:link,
a:visited,
a:active,
a:hover {
  color:#2ECC71; text-decoration: none;
}
</style>
