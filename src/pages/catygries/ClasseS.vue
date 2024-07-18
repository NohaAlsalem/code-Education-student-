<template>
    <div>
        <NavBar></NavBar>
        <div class="container ms-4 mt-4">
            <div class="row">
                <div class="col-8">
                    <h6>My test</h6>
                    <div class="d-flex">
                        <p>show today's tests: </p>
                        <div class="form-check ms-4">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <h6>Yes</h6>

                        </div>
                        <div class="form-check ms-4">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                checked>
                            <h6>No</h6>

                        </div>
                    </div>


                    <div class="backg me-5 mb-2" v-for="asse in assessments" :key="asse.id" v-if="assessments.length >=1">
                        <router-link 
                        :to="{
            name: 'detailAssesment',
            params: { Problemid: asse.id },
         
          }" style="text-decoration: none; outline: none;">
                   
                        <div class="row">

                            <div class="col me-5"> 

                                <div class="d-flex mt-1">
                                    <h6 class="mt-1 me-2">test:</h6>
                                    {{ asse.id }}
                                </div>
                            </div>
                            <div class="col ms-5">
                            <div class="d-flex mt-1">
                                    <h6 class="mt-1 me-2">Material:</h6>
                                 
                                
                            {{ asse.name }}</div>
                        </div>
                            <div class="w-100"></div>
                            <div class="col mt-1 me-5"><div class="d-flex mt-1">
                                    <h6 class="mt-1 me-2">class:</h6>
                                    {{ asse.category_id }}
                                </div></div>
                            <!-- <div class="col mt-1 me-5">class: {{ asse.category_id }}</div> -->
                            <div class="col ms-5">
                                <div class="d-flex mt-1">
                                    <h6 class="mt-1 me-2">Techer:</h6>
                                    {{ TecherName }}
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div v-else style="text-align: center;margin-top: 50px;">
                        <h6>
                        choose class to show your assessments</h6>
                    </div>
                </div>





                <div class="col-4">
                    <h6>My Classes</h6>
                    <div class="mt-5">
                        <div class="backg mb-2" v-for="clas in myclasses" :key="clas.id">
                            <!-- this -->
                            <div class="row mb-4" @click="getMyTests(clas.id)">
                                <div class="col me-5">
                                    <h6>{{ clas.name }}</h6></div>
                                <div class="col ms-5">
                                    <h6>{{ clas.class }}</h6></div>
                            </div>
                            <!-- end this -->
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="backg mt-2">
                        <p>if you want to change your class you can send a request to the admin to change the class by
                            entering the subject and number of the class </p>
                        <button type="button" class="btn btn-success ms-5 mt-0 fw-b" data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter">
                            Change Class
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                               
                                    <div class="modal-body">
                                        <h6 class="modal-title" id="exampleModalLongTitle">Change The Class</h6>
                                        <P>Enter the reason you are changing the class</P>
                                        <input v-model="formData.reason" type="text"
                                            style="width: 100%;border: none;" />
                                        <div class="d-flex mt-2">
                                            <p>Choose the old class :</p>
                                            <select class="drop ms-2" id="lnag" name="lang"
                                                v-model="formData.old_category" placeholder="Lnguage"
                                                autocomplete="country-name">
                                                <option class="opt " v-for="clas in allclasses" :key="clas.id" :value="clas.id">{{ clas.category_name }}</option>
                                                <!-- <option class="opt ">2</option> -->
                                            </select>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <p>Choose the destination class number :</p>
                                            <select class="drop ms-2" id="lnag" name="lang" 
                                                v-model="formData.new_category" placeholder="Lnguage"
                                                autocomplete="country-name">
                                                <option class="opt " v-for="clas in allclasses" :key="clas.id" :value="clas.id">{{ clas.category_name }}</option>
                                                <!-- <option class="opt ">2</option> -->
                                            </select>
                                        </div>
                                        <div style="justify-content: center; justify-items: center;">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                                @click="changeClass">Change</button>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Alert from '@/components/Alert.vue';
import { BASE_URL } from "@/assets/config";
import axios from 'axios';
export default {
    components: {
        NavBar,
        Alert,
    },
    data() {
        return {

            TecherName: '',
            SubjectName: '',
            idtodetail: 0,
            numberc: 1,
            myclasses: [],
            assessments: [],
            allclasses:[],
            formData: {
                new_category: 1,
                old_category: 1,
                reason: '',
            },
            successMessage: "",
      errorMessage: "",
      alertType: "",
      alertMessage: "",
        }
    },
    mounted() {
        this.getMyClasses();
        // this.getMyTests(1);
        this.getAllClasses();
    },
    methods: {
        getMyClasses() {
            axios.get(BASE_URL + 'categories/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                console.log(response.data.categories);
                this.myclasses = response.data.categories;
                console
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },
        getAllClasses() {
            axios.get(BASE_URL + 'categories/all', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                console.log(response.data.categories);
                this.allclasses = response.data.data;
                console
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },
        getMyTests(idtodetail) {
            axios.get(BASE_URL + `categories/${idtodetail}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {

                this.TecherName = response.data.teacher_name;
                this.SubjectName = response.data.subject;
                this.assessments = response.data.assessments;
                console.log(this.assessments);
                console
            }).catch((error) => {
                
                console.log(error)
                this.errMessage = 'error retrieving data';
                
            })
        },
        changeClass() {
            
            axios.post(BASE_URL + 'categories/change', this.formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then((response) => {
                    console.log(response);
                    this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
     
          setTimeout(() => {
            this.clearAlert();
          }, 1000);
                    // <router-link to="/home"></router-link>
                })
                .catch((error) => {
                    console.log(error);
                    this.error = error;
                    this.errorMessage = "Error change request: " + error.message;
          this.alertType = "error";
          this.alertMessage = "Error change request: " + error.message;
          this.error = error;
          setTimeout(() => {
            this.clearAlert();
          }, 1000);
                });
        },
        clearAlert() {
      this.alertType = "";
      this.alertMessage = "";
    },
    },
}
</script>

<style scoped>
p {
    color: var(--GreenOpacity);
}

h6 {
    color: var(--GreenColor);
    font-weight: bold;
}

.modal .modal-dialog .modal-content {
    background: #e7dff9;
    /* background: var(--WhiteColor); */
    border: 1px solid var(--borderColor);
}

.backg {
    background: #e7dff9;
    /* background: var(--WhiteColor); */
    padding: 10px;
    border-radius: 10px;
}

.drop {
    background: var(--GreenColor);
    border: none;
    color:#e7dff9;
    border-radius: 5px;

}

.opt {
    background:  var(--GreenColor);
    /* background: var(--WhiteColor); */
}

.modal-body p {
    color: var(--GreenColor);
}

.btn {
    background: var(--GreenColor);
}
</style>