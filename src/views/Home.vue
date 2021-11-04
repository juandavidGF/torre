<template>
  <div class="home">

    <label for="search">Search </label>
    <input v-model="search" type="text" id="search">
    <button @click="searchFun">search</button>
    
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
      search: ''
    }
  },
  methods: {
    async searchFun() {
      
      let data = {
        search: this.search
      }

      let result = await fetch(`http://localhost:3000/api/searchJob`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .catch(error => {console.error('Error:', error)})
      .then(response => response);

      console.log(result);
    }



    








    
  }
}
</script>
