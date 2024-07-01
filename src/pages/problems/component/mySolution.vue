<template>
    <!-- not use it  -->
    <div class="card-body" style="height:100vh; overflow-y: auto">
        <div class="row mb-3 mt-2">
            <div class="col d-flex">
                <h6 style="color: var(--GreenColor);">
                    Solution 1:
                </h6>
            </div>
            <div class=" col mt-0" style="text-align: end;">

                <h6 v-if="solution.status == 'accept'" style="color: var(--GreenColor);">
                    <font-awesome-icon :icon="['fas', 'circle-check']" />
                    Accepted
                </h6>

                <h6 v-else style="color: var(--GreenColor);">
                    <font-awesome-icon :icon="['far', 'circle-xmark']" />
                    Not Accepted
                </h6>
            </div>
        </div>
        <div class="backg p-4">
            <p>
                {{ solution.solve }}
               
            </p>
           
        </div>
        <h6  style="color: var(--GreenColor);" >
            Tests :
        </h6>
        <div v-for="(testcase, index) in testcases" :key="index">
            <h6 style="color: var(--GreenColor); margin-top: 20px;">
                Test {{ index + 1 }} :
            </h6>
            <p>Input:</p>

            <p class="backg mt-0">
                {{ testcase.input }}
            </p>
            <p>Output:</p>
            <p class="backg">{{ testcase.output }}</p>
            <p>Answer</p>
            <p class="backg">{{ testcase.answer }}</p>
        </div>
    </div>


</template>

<script>
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import { BASE_URL } from "@/assets/config";
import axios from 'axios';
export default {
    data() {
        return {
            input: '3,5',
            output: '8',
            answer: '8',
            solution: {},
            testcases: [],
            n: 0,
        }
    },
    mounted() {
        const solutionId = this.$route.params.SolutionId;
        this.getSolution(solutionId);
    },
    methods: {
        getSolution(solutionId) {
            axios.get( BASE_URL +`problems/solution/${solutionId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                this.solution = response.data.data;
                this.testcases = response.data.data.testCases;
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        }
    },

};
</script>

<style scoped>
.card-body {
    border: 1px solid var(--GreenOpacity);
    height: 40%;
    max-height: 40;
}

p {
    color: var(--GreenOpacity);
    margin: 0;
}

.table {
    border: 1px solid var(--borderColor);
    border-radius: 10px;
}

.backg {
    background: var(--WhiteColor);
    padding: 5px;
    border-radius: 10px;
    border: 1px solid var(--borderColor);
    /* height: 40px; */
}
</style>
