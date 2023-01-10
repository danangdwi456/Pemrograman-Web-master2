<script>
export default{
  data(){
    return{
      listsuhu: []
    }
  },
  methods:{
    async ambildata(){
      const response = await fetch("http://localhost:3000/getlist");
      const data = await response.json();
      this.listsuhu = data.sensor_suhu
    },
  },
};
</script>

<template>
  <table class="border-separate border border-slate-500 p-1">
    <tr>
      <th class="border border-slate-600" >Waktu</th>
      <th class="border border-slate-600" >Suhu</th>
    </tr>
    <tr v-for="item in listsuhu">
      <td class="border border-slate-700" >{{ item.waktu }}</td>
      <td class="border border-slate-700" >{{ item.Suhu }}</td>
    </tr>
  </table>
  <div>
    <button class="rounded-3xl p-3 bg-blue-500 text-white" @click="ambildata()">Ambil Data  </button>
  </div>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
