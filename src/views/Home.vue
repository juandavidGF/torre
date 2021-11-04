<template>
  <div class="home">
    <label for="search">Search </label>
    <input v-model="search" type="text" id="search">
    <button class="bg-blue-400 mx-3 " @click="searchFun">search</button>
    <button @click="other()">other</button>

    <div v-for="user in result.data" :key="user.subjectId">
      <h1 @click="goToUser(user.username)">{{ user.name }}</h1>      
      <p class="bg-red-500">{{user.professionalHeadline}}</p>
      <p>{{user.locationName}}</p>
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
    async searchFun(index) {
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

      this.$store.commit('setUsers', result.data)

      console.log(result);
    },
    other() {
      console.log('this.$store.state.users', this.$store.state.users);
    },
    goToUser(username) {
      // console.log('setUserIndex',index);
      this.$store.commit('setUsername', username)
      this.$router.push('/user')
    }
  }
}
</script>
