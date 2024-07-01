<template>
    <div class="screen w-100 h-100">
        <div class="row" >
            <div class="col-md-6">
                <div class="container  col-md-12" style="margin-top: 10px; margin-bottom: 10px">
                    <div class="card text-start ">
                        <div class="card-header">
                            <button type="button" class="btn" :class="{ 'custom-button': selectedButton === 1 }"
                                @click="selectButton(1)">
                                Description
                            </button>
                            <button class="btn">
                                |
                            </button>
                            <button type="button" class="btn" :class="{ 'custom-button': selectedButton === 2 }"
                                @click="selectButton(2)">
                                Solution
                            </button>
                        </div>
                        <Description  v-if="description" :problem="this.problem" :test_case="this.testCase"> </Description>
                        <Solution v-else :problemId="this.problem.id"></Solution>
                    </div>
                  

                </div>
            </div>


            <div class="col-md-6">
                <solveContest :problemId="this.problem.id" :contestId="this.contestID"></solveContest>
            </div>
        </div>
    </div>
</template>

<script>
import Description from "../problems/component/Description.vue";
import Solution from "../problems/component/Solution.vue";
// import inputcode from "./component/inputcode.vue";
import solveContest from "./solveContest.vue";
import { BASE_URL } from "@/assets/config";
import axios from 'axios';

export default {
    components: {
        Description,
        Solution,
        // inputcode,
        solveContest
    },
    mounted(){
        const ProblemId = this.$route.params.ProblemId;
        const contestId=this.$route.query.ContestId;
        this.contestID=contestId;
        console.log(ProblemId);
        this.getProblem(ProblemId);
    },
    data() {
        return {
         
            selectedButton: 1,
            description: true,
            solution: false,
            problem:{},
            testCase:{},
            contestID:null,
            
        };
    },
    methods: {
        selectButton(buttonNumber) {
            this.selectedButton = buttonNumber;
            if (this.selectedButton === 1) {
                this.description = true;
                this.solution = false;
            } else {
                this.solution = true;
                this.description = false;
            }
        },
        getProblem(ProblemId) {
       axios.get(BASE_URL + `problems/${ProblemId}`,{ headers: {
                     Authorization: `Bearer ${ localStorage.getItem('token')}`,
                 }}).then((response) => {
         this.problem = response.data;
         this.testCase=response.data.test_case;
         console.log(response.name)
       }).catch((error) => {
         console.log(error)
         this.errMessage = 'error retrieving data'
       })
     },
 
    },
};
</script>

<style scoped>
h6 {
    color: var(--GreenColor);
    font-weight: bold;
}
.bttn {
    background: var(--GreenColor);
    color: white;
    padding: 0 20px;
    border-radius: 10px;
    border: none;
}
p {
    color: var(--GreenColor);
}

.screen {
    padding: 20px 40px;
    background: #e7dff9;
    /* background: var(--WhiteColor); */
    height: 100vh;
    /* height: calc(100vh-72px); */
}

.btn {
    border: none;
    color: var(--GreenOpacity);
}

.card {
    border: 1px solid var(--GreenOpacity);
}

.custom-button,
.btn:hover,
.bttn:hover {
    color: var(--GreenColor);
    font-weight: bold;
}

.card-body .form-control {
    margin: 0;
    height: 100vh;
}
</style>