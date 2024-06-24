<template>
    <div>
        <NavBarA></NavBarA>
        <div class="container ms-2 mt-4">
            <div class="row">
                <div class="col-8 ">
                    <div class="card m-4 mt-0
                    " style="height:100vh;" v-for="subject in Subjects">
                        <div class="card-header">
                            <div class="row">
                                <div class="col">
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">number of class:</h6>
                                        <p>{{ subject.class }}</p>
                                    </div>
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">Subject:</h6>
                                        <p>{{ subject.subject }}</p>
                                    </div>

                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">Student in class:</h6>
                                        <!-- <p>{{ NumberStudent }}</p> -->
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">Teacher Name:</h6>
                                        <p>{{ subject.teacher_name }}</p>
                                    </div>
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">Number of students:</h6>
                                        <p>{{ subject.number_of_students }}</p>
                                    </div>
                                    <!-- <div class="card-title d-flex m-0">
                                        <h6 class="me-2">final exam degree:</h6>
                                        <p>{{ FinalDegre }}</p>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0 m-0">
                            <table class="table table-borderless m-0">
                                <thead>
                                    <tr>
                                        <th scope="col">student_id</th>
                                        <th scope="col">student_name</th>
                                        <th scope="col">student_email</th>
                                        <th scope="col">phone_number</th>
                                        <th scope="col">Rate</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr v-for="student in subject.students" :key="student.student_id">
                                        <td scope="row">{{ student.student_id }}</td>


                                        <td>
                                            <p>{{ student.student_name }}</p>
                                        </td>
                                        <td>{{ student.student_email }}</td>

                                        <td>{{ student.phone_number }}</td>
                                        <td>{{ student.rate }}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div class="col-4">

                    <div class="card p-4">
                        <p>add exel file</p>
                            <input @change="handleFile1Upload()" type="file" ref="file1" class="form-control-file">
                            <button @click="importStudents($event)" class="btn">Add</button>
                    </div>
                    <div class="card p-4">
                        <p class="mb-4">
                            you can add subjects and classes and select the degree of tests and final exam and student
                            attendance.
                        </p>
                        <form>
                            <p>Subject Name:</p>
                            <input class="inp" v-model="SubjectName" />
                            <p>Number Of Classes:</p>
                            <input class="inp" v-model="NumberClasses" />
                            <p>Year:</p>
                            <input class="inp" v-model="year">
                            <p>add exel file</p>
                            <input @change="handleFileUpload()" type="file" ref="file" class="form-control-file">
                            <button @click="AddStudents($event)" class="btn">Add</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBarA from './component/NavBarA.vue';
import axios from 'axios';
import { ADMIN_URL } from "@/assets/config";
export default {
    components: {
        NavBarA
    },
    data() {
        return {
            Subjects: [],
            SubjectName: '',
            year: 0,
            NumberClasses: 0,
            file: '',

        }
    },

    mounted() {
        this.getSubjects();
    },

    methods: {
        handleFile1Upload() {
            this.file = this.$refs.file1.files[0];
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },
        AddStudents(event) {
        event.preventDefault();  // منع إعادة تحميل الصفحة
        let formData = new FormData();
        formData.append('classes', this.NumberClasses);
        formData.append('year', this.year);
        formData.append('file', this.file);
    
        axios.post(ADMIN_URL +'students/distribute', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((response) => {

            })
            .catch((error) => {
                console.log(error);
                this.error = error;
            });
    },

    importStudents(event) {
        event.preventDefault();  // منع إعادة تحميل الصفحة
        let formData = new FormData();
       
        formData.append('file', this.file);
    
        axios.post(ADMIN_URL +'students/import', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((response) => {

            })
            .catch((error) => {
                console.log(error);
                this.error = error;
            });
    },
        getSubjects() {
            axios.get(ADMIN_URL + 'categories-with-subjects', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                // console.log(response.data);
                this.Subjects = response.data.data;


            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },
      


    }
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

.inp {
    width: 100%;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
}

.card {
    background: var(--WhiteColor);
    padding: 0;
    border: 1px solid var(--borderColor);
    border-radius: 5px;
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