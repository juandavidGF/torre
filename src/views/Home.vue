<template>
  <div id="home">
    <div class="max-w-3xl mx-auto">
      <div class="mx-3 sm:mx-5 md:mx-0">
        <div class="w-full flex flex-row mb-12">
          <input class="searchInput rounded-3xl flex-grow py-2 border mt-14 pl-6 border-white focus:border-yellow-400"
          placeholder="name"
          v-model="search" type="text" id="search"
          >
          <button class="button-search mt-14 -ml-16 px-1 text-yellow-400"  @click="searchFun" v-on:keyup.enter="searchFun">search</button>
        </div>
        <div v-if="loading" class="text-4xl text-yellow-400 ml-3 sm:ml-6 sm:mt-15">Loading...</div>
        <div v-for="user in result.data" :key="user.subjectId"
        class="cardUser my-2 py-3 text-left flex flex row">

          <div class="hex w-16 ml-2 flex object-center sm:ml-3">
            <img  class="object-contain" :src="user.picture">
          </div>

          
          <div class="ml-3 sm:ml-6">
            <div class="text-yellow-400 cursor-pointer text-sm" @click="goToUser(user.username)">{{ user.name }}</div>
            <div class="text-xs sm:text-sm">{{user.professionalHeadline}}</div>
            <div class="text-xs sm:text-xs mt-1">{{user.locationName}}</div>
          </div>
        </div>
      </div>
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
      result: '',
      loading: false
    }
  },
  methods: {
    async searchFun(index) {
      let data = {search: this.search}

      this.loading = true

      let result = await fetch(`http://localhost:3001/api/searchJob`, {
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

      this.loading= false


      //console.log(result);
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


<style>

.cardUser {
  background-color: #27292d;
}

.searchInput {
  background-color: #010102;
  font-size: 16px;
}

</style>