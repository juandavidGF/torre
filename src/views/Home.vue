<template>
  <div class="home">
    <label for="search">Search </label>
    <input v-model="search" type="text" id="search">
    <button @click="searchFun">search</button>
    <button @click="other()">other</button>

    <div v-for="user in result.data" :key="user.subjectId">
      <h1>{{ user.name }}</h1>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      search: '',
      result: ''
    }
  },
  methods: {
    async searchFun() {
      let data = {search: this.search}

      let result = await fetch(`http://localhost:3000/api/searchJob`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .catch(error => {console.error('Error:', error)})
      .then(response => response);

      this.result = result

      console.log(result);
    },
    other() {
      console.log(this.result != '')
      
    },  
  }
}
</script>
