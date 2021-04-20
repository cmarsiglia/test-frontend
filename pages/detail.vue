<template>
  <section class="">
    <div class="wk-detail">
        <div class="wk-detail-header">
            <img :src="characterDetail.image" style="witdh: 100%;">
            <div class="wk-detail-caption">
                <h1>{{ characterDetail.name }}</h1>
                <h2>Episodios ({{ episodeCount }})</h2>
                <p><b>Especie</b> {{ characterDetail.species }} | Estado {{ characterDetail.status }}</p>
                <p><b>Tipo</b> {{ characterDetail.type }}</p>
                <p><b>Genero</b> {{ characterDetail.gender }}</p>
                <p><b>Origen</b> {{ characterDetail.origin.name }}</p>
                <p><b>Última ubicación conocida</b> {{ characterDetail.location.name }}</p>
            </div>
        </div>
        <div></div>
        <div
          v-for="(item, index) in characterDetail.episode"
          :key="index"
          class="wk-detail-item">
          <div>{{ item ? `Episodio-${index+1}`:''}}</div>
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
  computed: {
    episodeCount () {
      return this.characterDetail.episode.length
    }
  },
  async asyncData ({ $api, $config, route }) {
    const characterDetail = await $api.$get(`/character/${route.query.id}`)
    return { characterDetail }
  }
}
</script>
<style>
.wk-detail{
    width: 80vw;
    margin:40px auto;
}
.wk-detail-header{
    display:grid;
    grid-template: 1fr/repeat(4,1fr);
}
.wk-detail-header > img{
    grid-area: 1/1/2/2;
}
.wk-detail-caption{
    grid-area: 1/2/2/5;
    color: white;
    padding:10px 20px;
    display: grid;
    grid-gap: 10px;
}
.wk-detail-caption h1{
    font-size: 2.5rem;
}
.wk-detail-caption>:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.wk-detail-caption p{
    color: #AEB6BF;
}
.wk-detail-item{
    height: 50px;
    color: white;
    background-color:#2E4053;
    margin: 5px 0px;
    padding:10px;
}
.wk-detail-item:hover{
    background-color:#34495E;
}

</style>
