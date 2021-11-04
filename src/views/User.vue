<template>
<div id="user">
  <div class="max-w-6xl mx-auto visible sm:invisible flex flex-row pt-16">
    <div :class="{underline: personTab}" class="w-1/3" @click="activeTab('personTab')">Person</div>
    <div :class="{underline: skillTab}" class="w-1/3" @click="activeTab('skillTab')">People Skills</div>
    <div :class="{underline: degreeTab}" class="w-1/3" @click="activeTab('degreeTab')">Degrees</div>
  </div>
  <div v-if="loading" class="text-4xl text-yellow-400 ml-3 sm:ml-6 sm:mt-15">Loading...</div>
  <div class="grid md:grid-cols-3 max-w-6xl mx-auto pb-16">
    <div :class="{hidden: !personTab}" class=" md:block card-user mx-auto max-w-xs w-72 w-80 py-10">
      <img class="mx-auto w-56" :src="user.person.picture" alt="">
      <div class="mx-auto text-xl my-2">{{user.person.name}}</div>
      <hr class="border mt-10">
      <div class="my-3 text-xl text-left ml-5 mt-6 mb-5">Skills:</div>
      <div v-if="skills.master.length > 0 ">
        <div class="my-3 text-xl text-left ml-5 mt-4">master</div>
        <div @click="selectSkill(skill)" class="cursor-pointer flex flex-shrink my-2 ml-4" v-for="skill in skills.master" :key="skill.code">
          <div  class="skill rounded-3xl px-2" >{{ skill.name }}</div>
        </div>
      </div>
       <div v-if="skills.expert.length > 0 "> 
        <div class="my-3 text-xl text-left ml-5 mt-4">expert</div>
        <div @click="selectSkill(skill)" class="cursor-pointer flex flex-shrink my-2 ml-4" v-for="skill in skills.expert" :key="skill.code">
          <div class="skill rounded-3xl px-2" >{{ skill.name }}</div>
        </div>
      </div>
      <div v-if="skills.proeficient.length > 0 "> 
        <div class="my-3 text-xl text-left ml-5 mt-4">proeficient</div>
        <div @click="selectSkill(skill)" class="cursor-pointer flex flex-shrink my-2 ml-4" v-for="skill in skills.proeficient" :key="skill.code">
          <div class="skill rounded-3xl px-2" >{{ skill.name }}</div>
        </div>
      </div>
      <div v-if="skills.novice.length > 0"> 
        <div class="my-3 text-xl text-left ml-5 mt-4">novice</div>
        <div @click="selectSkill(skill)" class="cursor-pointer flex flex-shrink my-2 ml-4" v-for="skill in skills.novice" :key="skill.code">
          <div class="skill rounded-3xl px-2" >{{ skill.name }}</div>
        </div>
      </div>
      <div v-if="skills.noExperience.length > 0"> 
        <div class="my-3 text-xl text-left ml-5 mt-4">No experienced, but interested</div>
        <div @click="selectSkill(skill)" class="cursor-pointer flex flex-shrink my-2 ml-4" v-for="skill in skills.noExperience" :key="skill.code">
          <div class="skill rounded-3xl px-2" >{{ skill.name }}</div>
        </div>
      </div>

    </div>
    <!-- list of peolpe with some skill -->
    <div :class="{hidden: !skillTab}" class="md:block card-user mx-auto max-w-xs w-80 py-10">
      <div v-if="!skillSelected">Click in some skill to show a list of people with it</div>
      <div v-if="skillSelected">{{skillSelected}}</div>
      <div v-for="user in skillMatch" :key="user.subjectId"
      class="cardUser my-2 py-3 text-left flex flex row">
        <div class="hex min-w-16 w-1/6 ml-2 flex object-center sm:ml-3">
          <img  class="object-contain" :src="user.picture">
        </div>
        <div class="ml-3 sm:ml-6 w-5/6">
          <div class="text-yellow-400 cursor-pointer text-sm" @click="goToUser(user.username)">{{ user.name }}</div>
          <div class="text-xs sm:text-sm">{{user.professionalHeadline}}</div>
          <div class="text-xs sm:text-xs mt-1">{{user.locationName}}</div>
        </div>
      </div>
    </div>
    <!-- grade of conection -->
    <div :class="{hide: !degreeTab}" class="md:block card-user mx-auto max-w-xs w-80 py-10">
      <div>By Grades of connection</div>
      <div v-for="user in connections" :key="user.person.subjectId"
      class="cardUser my-2 py-3 text-left flex flex row">
        <div class="hex min-w-16 w-1/6 ml-2 flex object-center sm:ml-3">
          <img  class="object-contain" :src="user.person.picture">
        </div>
        <div class="ml-3 sm:ml-6 w-5/6">
          <div class="text-yellow-400 cursor-pointer text-sm" @click="goToUser(user.person.publicId)">{{ user.person.name }}</div>
          <div class="text-xs sm:text-sm">{{user.person.professionalHeadline}}</div>
          <div class="text-xs sm:text-xs mt-1">{{user.person.locationName}} </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      username: '',
      skills: {},
      skillMatch: {},
      skillSelected: '',
      connections: {},
      loading: true,
      personTab: true,
      skillTab: false,
      degreeTab: false
    }
  },
  async mounted() {
    await this.init()
  },
  methods: {
    async init() {
      this.username = this.$store.state.username

      if(this.userIndex === '') {
        alert("haven't found any user")
      } else {
        this.loading = true
        let user = await fetch(`http://localhost:3001/api/username?username=${this.username}`, {
            method: "GET",
          }).then(res => res.json())
          .catch(error => {console.error('Error:', error)})
          .then(response => response);

        this.loading = false

        this.activeTab('personTab')

        //console.log('user', user.data);
        this.user = user.data

        this.organazeSkills()
      }
      
    },
    organazeSkills() {      
      this.user.strengths.filter

      let noExperience = this.user.strengths.filter(function(element){
        return element.proficiency === "no-experience-interested";
      });

      const novice = this.user.strengths.filter(function(element){
        return element.proficiency === "novice";
      });

      const proficient = this.user.strengths.filter(function(element){
        return element.proficiency === "proficient";
      });

      const master = this.user.strengths.filter(function(element){
        return element.proficiency === "master";
      });

      const expert = this.user.strengths.filter(function(element){
        return element.proficiency === "master";
      });

      this.skills = {
        noExperience: noExperience, 
        novice: novice,
        proeficient: proficient,
        expert: expert,
        master: master
      }

      this.loading = false

      // console.log('length novice', this.strengths.novice.length);
    },
    async selectSkill(skill) {

      let data = {skill: skill.name}
      
      this.skillSelected = skill.name

      this.activeTab('skillTab')

      this.loading = true

      let result = await fetch(`http://localhost:3001/api/searchForSkill`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .catch(error => {console.error('Error:', error)})
      .then(response => response);


      this.skillMatch = result.data

      let connections = await fetch(`http://localhost:3001/api/connections?username=${this.username}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => {console.error('Error:', error)})
      .then(response => response);

      this.loading = false

      this.connections = connections.data
      //console.log('this.connections', this.connections);
      
    },
    goToUser(username) {
      // console.log('setUserIndex',index);
      this.$store.commit('setUsername', username)
      this.skillSelected = ''
      this.skillMatch = {}
      this.connections = {}
      
      this.init()
    },
    activeTab(activeTab) {
      if(activeTab ==='personTab') {
        this.personTab = true
        this.skillTab = false
        this.degreeTab = false
      } else if(activeTab ==='skillTab') {
        this.personTab = false
        this.skillTab = true
        this.degreeTab = false
      } else if(activeTab === 'degreeTab') {
        this.personTab = false
        this.skillTab = false
        this.degreeTab = true
      } 

    },
  }
}
</script>

<style>
.card-user {
  box-shadow: 0  5px 7px 2px rgb(255 255 255 / 0.2);
}
.cardUser {
  background-color: #27292d;
}
.skill {
  background-color: #383b40;
}
</style>