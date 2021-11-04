<template>
<div id="user">
  <div class="max-w-3xl mx-auto py-16">
    <div class="card-user mx-auto max-w-xs py-10">
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

      this.organazeSkills()
    }
  },
  methods: {
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

      // console.log('length novice', this.strengths.novice.length);
    },
    async selectSkill(skill) {

      let data = {skill: skill.name}

      let result = await fetch(`http://localhost:3000/api/searchForSkill`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .catch(error => {console.error('Error:', error)})
      .then(response => response);

      console.log('skills', result)

      this.skillMatch = result

      
    }
  },

}
</script>

<style>
.card-user {
  box-shadow: 0  5px 7px 2px rgb(255 255 255 / 0.2);
}
.skill {
  background-color: #383b40;
}
</style>