<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <Header />
    <Nav /> -->

    <div class="nastenka">
      <h1 style="color: green;text-align: left;margin-left: 30px;">Nadcházející události</h1>
      <table>
    <tr>
      <th>Téma</th>
      <th>Vytvořeno</th>
      <th>Uskutečnění</th>
    </tr>
    <tr>
      <td>Nátěr střechy</td>
      <td>29.06.2019</td>
      <td>30.08.2019</td>
    </tr>

  </table>
    </div>
  </div>

</template>

<script>
// import Header from './Header.vue'
// import Nav from './Nav.vue'

export default {
  name: 'Nastenka',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nastenka {
  width: 80%;
  height: 500px;
  /* border: 1px solid black; */
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;

}

.nastenka table {
  width: 100%;
  margin-left: 30px;
  border-collapse: collapse;
}
.nastenka td, .nastenka th {
  border-bottom: 1px solid #ddd;
  padding: 8px;
}

.nastenka tr:nth-child(even){background-color: #f2f2f2;}

.nastenka tr:hover {background-color: #ddd;}

.nastenka th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
