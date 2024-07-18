<template>

   <div>
  
   <div v-for="contest in Contests" :key="contest.id">
    <itemallContest :contest="contest"></itemallContest>
    <!-- <itemContest :contest="contest"></itemContest> -->
    <!-- <div class="Divider"></div> -->
</div>


    </div>
</template>

<script>
import itemallContest from '../../../components/itemallContest.vue';
import { BASE_URL } from "@/assets/config";
import axios from 'axios';
export default{
    
components:{
    itemallContest
},
mounted(){
    this.getMycontests();
},

data(){
return{
    NameContest:'Cntests1 ',
    EndOfContest:'end',
    Contests:[],
    token: localStorage.getItem('token'),
    
}
},
methods:{

getMycontests() {
   axios.get( BASE_URL +'contests/all',{ headers: {
                 Authorization: `Bearer ${localStorage.getItem('token')}`,
             }}).then((response) => {
                console.log(response.data);
     this.Contests = response.data;

     console
   }).catch((error) => {
     console.log(error)
     this.errMessage = 'error retrieving data'
   })
},
}
}
</script>

<style  scoped>
.card {
border: none;
height: 100%;
    border: 1px solid var(--GreenColor);
    border-radius: 5px;
    background: white;
    padding: 20px;
}

.card .img-fluid {
height: 5rem;
width: 10rem;

}
.Divider {
border-top: 1px solid var(--LightGreen) !important;
/* border-bottom: 1px solid  var(--LightGreen)!important; */
/* height: 0.5px; */
/* margin: 0 100px; */
margin-left: 100px;
margin-right: 300px;
}
.text-muted{
color: var(--LightGreen);
}
.font-c{
color: var(--GreenColor);
}
</style>