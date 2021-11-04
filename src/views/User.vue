<template>
<div id="user">
  <div>{{user.person.name}}</div>
  <img :src="user.person.picture" alt="">
  <div v-for="skill in user.strengths" :key="skill.code">
    <div>{{ skill.name }}</div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      username: ''
    }
  },
  async mounted() {
    this.username = this.$store.state.username

    if(this.userIndex === '') {
      alert("haven't found any user")
    } else {
      let user = await fetch(`http://localhost:3000/api/username?username=${this.username}`, {
          method: "GET",
        }).then(res => res.json())
        .catch(error => {console.error('Error:', error)})
        .then(response => response);

      console.log('user', user.data);

      this.user = user.data
    }
  },

}
</script>

<style>

</style>