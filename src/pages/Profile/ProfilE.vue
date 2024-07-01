<template>
    <div>
        <NavBar></NavBar>
        <div class="screen w-100">

            <div class="prof ms-0">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <font-awesome-icon :icon="['fas', 'id-card']" :size="['6x']" />
                                     
                                    </div>
                                    <div>
                                        <h5 class="my-3 mx-3">{{ student.name }}</h5>
                                        <div class="mb-1 my-3 mx-3 d-flex" style="color: var(--GreenColor);">
                                            <p>Rank:~</p>
                                            <p>{{ info.rate }}</p>
                                        </div>
                                    </div>
                                </div>

                                <button type="button" class="btn"
                                    style="width: 100%;background: var(--darkwhite); color: var(--GreenColor); font-weight: bold">{{ student.email }}</button>
                                <div class="Divider mb-1"></div>
                                <h6 style="color: var(--GreenColor);font-weight: 700;">Community Stats</h6>
                                <div class="d-flex">
                                    <font-awesome-icon :icon="['fas', 'eye']" class="m-1"
                                        style="color: var(--GreenOpacity);" />
                                    <div>
                                        <h6 class="ms-2 me-2 mb-0" style="color: var(--GreenColor);">Points :</h6>
                                        <div class="d-flex ms-2">
                                            <p
                                                style="color: var(--GreenOpacity); font-size: smaller;margin-right: 5px;">
                                                this week :</p>
                                            <p style="color: var(--GreenOpacity); font-size: smaller;">{{ thisweek }}
                                            </p>
                                        </div>
                                    </div>
                                    <h6 class="me-2" style="color: var(--GreenColor);">{{ info.points }}</h6>
                                </div>

                                <div class="d-flex mt-3 mb-5">
                                    <font-awesome-icon :icon="['fas', 'square-check']" class="m-1"
                                        style="color: var(--GreenOpacity);" />
                                    <div>
                                        <h6 class="ms-2 me-2 mb-0" style="color: var(--GreenColor);">Solution :</h6>
                                        <!-- <div class="d-flex ms-2">
                                            <p
                                                style="color: var(--GreenOpacity); font-size: smaller; margin-right: 5px;">
                                                this week :</p>
                                            <p style="color: var(--GreenOpacity); font-size: smaller;">{{ thisweek }}
                                            </p>
                                        </div> -->
                                    </div>
                                    <h6 class=" me-2" style="color: var(--GreenColor);">{{ info.solutions }}</h6>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="col-lg-9">


                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <font-awesome-icon :icon="['far', 'face-surprise']" class="m-1"
                                        style="color: var(--GreenOpacity);"/>
                                    <div>
                                        <h6 class="ms-2 me-2 mb-0" style="color: var(--GreenColor);">Hard :</h6>
                                       
                                    </div>
                                    <h6 class="me-2" style="color: var(--GreenColor);">{{ info.hard }}</h6>
                                </div>
                                <div class="d-flex">
                                    <font-awesome-icon :icon="['far', 'face-smile']" class="m-1"
                                        style="color: var(--GreenOpacity);"/>
                                    <div>
                                        <h6 class="ms-2 me-2 mb-0" style="color: var(--GreenColor);">Medium :</h6>
                                       
                                    </div>
                                    <h6 class="me-2" style="color: var(--GreenColor);">{{ info.medium }}</h6>
                                </div>
                                <div class="d-flex">
                                    <font-awesome-icon :icon="['far', 'face-smile-wink']" class="m-1"
                                        style="color: var(--GreenOpacity);"/>
                                    <div>
                                        <h6 class="ms-2 me-2 mb-0" style="color: var(--GreenColor);">Easy :</h6>
                                       
                                    </div>
                                    <h6 class="me-2" style="color: var(--GreenColor);">{{ info.easy }}</h6>
                                </div>
                                    </div>
                                </div>

                                <div class="card mb-4 mb-md-0">
                                    <div class="card-body">
                                        <!-- <div style="justify-content: end; text-align: end;">
                                            <div class="row m-0 p-0" style="justify-items: end;">
                                                <div class="col-8"></div>
                                                <p class="col-2">
                                                    Only me
                                                </p>
                                                <div class="col-2">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="flexSwitchCheckDefault" >
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->

                                        <table class="table  table-bordered mt-4">
                        <thead>
                            <tr>
                                <th style="width: 40%;">
                                    <h5>
                                       Material
                                    </h5>
                                </th>
                                <th>
                                    <h5>
                                       Degree
                                    </h5>
                                </th>
                                <th style="width: 40%;">
                                    <h5>
                                       date
                                    </h5>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="material in materials" :key="material.id">
                                <td style="max-width: 40%;">{{ material.subject_name }}</td>

                                <td>{{ material.degree }}</td>
                                <td  style="max-width: 40%;" >
                                    {{ material.date }}
                                </td>
                          </tr>
                       
                        </tbody>
                    </table>





                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import PieChart from './PieChart.vue';
import { BASE_URL } from "@/assets/config";
import axios from 'axios';
export default {
    components: {
        NavBar,
        PieChart
    },
    data() {
        return {
            // Rank: '',
            // views: '',
            // solution: '',
            // thisweek: '',
           
            // degree:'',
            // date:'',
            
            info:{},
            student:{},
            materials:[],

        }
    },
    mounted(){
        this.getProfile();
    },
    methods: {
        getProfile() {
       axios.get(BASE_URL + 'profile',{ headers: {
                     Authorization: `Bearer ${localStorage.getItem('token')}`,
                 }}).then((response) => {
                    this.info=response.data;
                    this.student=response.data.detail;
                    this.materials = response.data.materials;
                    console.log(response.data.id);
                    console.log(response.data.detail.role);
                    console.log(response.data.materials);
                           
         console
       }).catch((error) => {
         console.log(error)
         this.errMessage = 'error retrieving data'
       })
     },
 
    }
}
</script>

<style scoped>
.screen {
    padding: 40px 40px;
    background: var(--WhiteColor);
    height: 100vh;
    /* height: calc(100vh-72px); */
}
/* .form-check .form-check-input []{
    color: var(--GreenColor);
} */

h5 {
    color: var(--GreenColor);
    font-weight: bold;
}

p {
    color: var(--GreenColor);
    margin: 0;
    padding: 0;
}

.card {
    border: 1px solid var(--borderColor);
    border-radius: 10px;
}

.Divider {
    border-top: 1px solid var(--LightGreen) !important;

    margin: 30px 50px;
}
.table th {
   color: var(--GreenColor);
   font-weight: bold;
   text-align: center;
}

.table td {
    color: var(--GreenColor)
}

.table {
    border-radius: 5px;
    border: 1px solid var(--borderColor);
}
</style>