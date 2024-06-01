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


                    <div class="backg me-5 mb-2" v-for="asse in assessments" :key="asse.id">
                        <div class="row">

                            <div class="col me-5"> test: {{ asse.id }}</div>
                            <div class="col ms-5">
                            <div class="d-flex mt-1">
                                    <h6 class="mt-1 me-2">Material:</h6>
                                 
                                
                            {{ asse.name }}</div>
                        </div>
                            <div class="w-100"></div>
                            <div class="col mt-1 me-5">class: {{ asse.category_id }}</div>
                            <div class="col ms-5">
                                <div class="d-flex mt-1">
                                    <h6 class="mt-1 me-2">Techer:</h6>
                                    {{ TecherName }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div class="col-4">
                    <h6>My Classes</h6>
                    <div class="mt-5">
                        <div class="backg mb-2" v-for="clas in myclasses" :key="clas.id">
                            <!-- this -->
                            <div class="row mb-4" @click="getMyTests(clas.id)">
                                <div class="col me-5">{{ clas.name }}</div>
                                <div class="col ms-5">{{ clas.class }}</div>
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
                                                <option class="opt ">1</option>
                                                <option class="opt ">2</option>
                                            </select>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <p>Choose the destination class number :</p>
                                            <select class="drop ms-2" id="lnag" name="lang"
                                                v-model="formData.new_category" placeholder="Lnguage"
                                                autocomplete="country-name">
                                                <option class="opt ">1</option>
                                                <option class="opt ">2</option>
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
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
export default {
    components: {
        NavBar
    },
    data() {
        return {

            TecherName: '',
            SubjectName: '',
            idtodetail: 0,
            numberc: 1,
            myclasses: [],
            assessments: [],
            formData: {
                new_category: 1,
                old_category: 1,
                reason: '',
            }
        }
    },
    mounted() {
        this.getMyClasses();
        this.getMyTests(1);
    },
    methods: {
        getMyClasses() {
            axios.get('http://127.0.0.1:8000/api/student/categories/', {
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

        getMyTests(idtodetail) {
            axios.get(`http://127.0.0.1:8000/api/student/categories/${idtodetail}`, {
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
                this.errMessage = 'error retrieving data'
            })
        },
        changeClass() {
            axios.post('http://127.0.0.1:8000/api/student/categories/change', this.formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then((response) => {
                    console.log(response)
                    // <router-link to="/home"></router-link>
                })
                .catch((error) => {
                    console.log(error);
                    this.error = error;
                });
        }
    },
}
</script>

<style scoped>
p {
    color: var(--GreenOpacity);
}

h6 {
    color: var(--GreenColor);
}

.modal .modal-dialog .modal-content {
    background: var(--WhiteColor);
    border: 1px solid var(--borderColor);
}

.backg {
    background: var(--WhiteColor);
    padding: 10px;
    border-radius: 10px;
}

.drop {
    background: var(--darkwhite);
    border: none;
    color: var(--GreenColor);
    border-radius: 5px;

}

.opt {
    background: var(--WhiteColor);
}

.modal-body p {
    color: var(--GreenColor);
}

.btn {
    background: var(--GreenColor);
}
</style>