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
  <table class="border-separate border border-slate-500 p-1 ">
    <tr>
      <th class="border border-slate-600 p-1 bg-blue-500 text-white" >Waktu</th>
      <th class="border border-slate-600 p-1 bg-blue-500 text-white" >Suhu</th>
    </tr>
    <tr v-for="item in listsuhu">
      <td class="border border-slate-700" >{{ item.waktu }}</td>
      <td class="border border-slate-700" >{{ item.Suhu }}</td>
    </tr>
  </table>
  <div>
    <button class="rounded-3xl p-3 bg-green-500 text-white" @click="ambildata()">Ambil Data  </button>
  </div>

  <main>
    <TheWelcome />
  </main>
</template>
