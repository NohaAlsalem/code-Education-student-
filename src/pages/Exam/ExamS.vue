<template>

    <div>
        <NavBar></NavBar>
        <div class="screen">
            <div class="sub_screen overflow-auto">
                <div v-for="exam in exams" :key="exam.id">
                <itemExam :exam="exam"></itemExam>
            </div>

            </div>
            <!-- <myDialog></myDialog> -->
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import itemContest from '@/components/itemContest.vue';
import myDialog from '@/components/myDialog.vue';
import itemExam from './itemExam.vue';
import axios from 'axios';
import { ADMIN_URL, BASE_URL } from "@/assets/config";
export default {
    components: {
        NavBar,
        itemContest,
        myDialog,
        itemExam,
    },
    data(){
return{
    exams:[],
}
    },
    mounted(){
        this.getMyExams();
    },
    methods:{
        getMyExams() {
   axios.get( BASE_URL +'exams',{ headers: {
                 Authorization: `Bearer ${localStorage.getItem('token')}`,
             }}).then((response) => {
                console.log(response.data);
     this.exams = response.data.data;

     console
   }).catch((error) => {
     console.log(error)
     this.errMessage = 'error retrieving data'
   })
},
joinExam(examId){
            axios.post(ADMIN_URL+`exams/${examId}/join`,this.password,{ headers: {
                     Authorization: `Bearer ${localStorage.getItem('token')}`,
                 }})
        .then((response) => {
         console.log(response)
          // <router-link to="/home"></router-link>
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },

    }
}
</script>

<style scoped>
.screen {
    padding: 40px 80px;
    background: #e7dff9;
    height: 100vh;
    /* height: calc(100vh-72px); */
}

.sub_screen {
    height: 100%;
    border: 1px solid var(--GreenColor);
    border-radius: 5px;
    background: white;
    padding: 20px;
}
/* .overflow {
      property: overflow,
      values: auto hidden visible scroll,
} */
</style>