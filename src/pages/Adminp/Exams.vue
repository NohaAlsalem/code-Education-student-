<template>
    <div>
        <NavBarA></NavBarA>
        <div class=" ms-2 mt-4">
            <div class="row m-0">
                <div class="col-4 ">
                    <div class="card m-5" >                       
                      
                            <table class="table table-borderless w-100" style="width: 100%;">
                                <thead>
                                    <tr>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Exam date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="exam in exams" :key="exam.id" @click="getDetailExam(exam.id)">
                                        <td >{{ exam.subject }}
                                       </td>
                                        <td>{{ exam.exam_date }}</td>
                                    </tr>
                                </tbody>
                            </table>
                       
                    </div>
                </div>

                <div class="col-8">
<detailProblem :exam="this.exam" :problem="this.problem"  :questions="this.questions" :tests="this.tests" :tags="this.tags"></detailProblem>
                   </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBarA from './component/NavBarA.vue';
import detailProblem from '@/pages/Adminp/component/detailProblem.vue';
import axios from 'axios';
import { ADMIN_URL } from "@/assets/config";

export default {
    components: {
        NavBarA,
        detailProblem,
    },
    data() {
        return {
           exams:[],
           exam:{},
           problem:{},
           tests:[],
           tags:[],
           teacher_solve_code:'',
           questions:[],
        }
    },
    mounted(){
        this.getExams();
    },
    methods:{
        getExams() {
       
            axios.get(ADMIN_URL + 'exams', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                console.log(response.data);
                this.exams = response.data.data;
                console
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },
  
    getDetailExam(examId) {
            axios.get(ADMIN_URL + `exams/${examId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                console.log(response.data);
                this.exam = response.data.data;
                this.problem=response.data.data.problem;
                this.tests=response.data.data.tests;
                this.tags=response.data.data.tags;
                this.questions=response.data.data.questions;
                this.teacher_solve_code=response.data.data.teacher_solve_code;


                console.log(this.exam.subject+'ljhujyg')
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },
    },
    
}
</script>

<style scoped>
p {
    color: var(--GreenColor);
    margin: 0;

}

h6 {
    color: var(--GreenColor);
    font-weight: bold;
    margin: 0;
}
.inp{
    width: 100%;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
}
.card {
 height: 50vh;
    padding: 0;
    border: 1px solid var(--borderColor);
    border-radius: 5px;
    overflow-y: auto;
   
}

.table th {
    background: var(--GreenColor);
    color: white;
    font-weight: 400;
}

.btn {
    border-radius: 10px;
    background: var(--GreenColor);
    padding: 2px 10px;
    border: 0;
    color: white;
}


</style>