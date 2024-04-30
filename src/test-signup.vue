<template>
    <div class="screen">
  <TopBar></TopBar>
    <form @submit.prevent="handelSubmit">
      <label>Email:</label>
      <input type="email" required v-model="email">
  
  
      <label>password:</label>
      <input type="password" required v-model="password">
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
  
  
      <label>Role:</label>
      <select v-model="Role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>
      <label>Skills:</label>
      <input type="text" v-model="termSkill" @keyup="addSkill">
  <div v-for="skill in skills" :key="skill" class="pill">
    <span  @click="deletScill(skill)">{{ skill }}</span></div>
  
  
  
      <div class="terms">
        <input type="checkbox" required v-model="terms" >
        <label>accept terms and condtions</label>
      </div>
  
      <div class="submit">
        <button>
  create an account
        </button>
      </div> 
  
      <!-- <div>
        <input type="checkbox" value="shaun" v-model="names">
        <label>shaun</label>
      </div>
      <div>
        <input type="checkbox" value="yoshi" v-model="names">
        <label>yoshi</label>
      </div>
      <div>
        <input type="checkbox" value="mario" v-model="names">
        <label>mario</label>
      </div> -->
  
  <!-- 
      <p>{{ Role }}</p>
      <p>{{ terms }}</p>
      <p>{{ names }}</p> 
      <p>{{ termSkill }}</p>-->  
    </form>
    </div>
  </template>
  
  <script>
  import TopBar from'@/components/TopBar.vue';
  export default {
    components:{
      TopBar
    },
    data() {
      return {
        email: '',
        password: '',
        passwordError:'',
        Role:'designer',
        terms:false,
        termSkill:'',
        names:[],
        skills:[]
      }
    },
    methods:{
      addSkill(e){
    if(e.key===','&&this.termSkill){
      if(!this.skills.includes(this.termSkill)){
        this.skills.push(this.termSkill)
      }
       
       this.termSkill=''
    }
      },
      deletScill(skill){
  this.skills=this.skills.filter((item)=>{
    return skill !== item
  })
      },
      handelSubmit(){
        console.log('form submitted')
        //validate password
        this.passwordError=this.password.length > 5 ?''
        :'password must be at least 6 charts long'
        if(!this.passwordError){
          console.log('email :',this.email)
          console.log('password :',this.password)
          console.log('role :',this.Role)
          console.log('skills :',this.skills)
          console.log('term accepted :',this.terms)
        }
       
      }
    
    }
  }
  </script>
  
  <style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background:white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  .screen{
    background: #FAF3DD;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  
  input ,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px; 
  }
  button{
  background: #8FC0A9;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  }
  .submit{
    text-align: center;
  }
  .pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  .error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
  </style>