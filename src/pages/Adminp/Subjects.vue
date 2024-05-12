<template>
    <div>
        <NavBar></NavBar>
        <div class="container ms-2 mt-4">
            <div class="row">
                <div class="col-8 ">
                    <div class="card m-4 mt-0
                    " style="height:100vh;">
                        <div class="card-header">
                            <div class="row">
                                <div class="col">
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">Subject:</h6>
                                        <p>{{ Subject }}</p>
                                    </div>
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">number of classes:</h6>
                                        <p>{{ NumberClass }}</p>
                                    </div>
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">number of student in class:</h6>
                                        <p>{{ NumberStudent }}</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">test degree:</h6>
                                        <p>{{ TestDegre }}</p>
                                    </div>
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">student attendance degree:</h6>
                                        <p>{{ AttendDegree }}</p>
                                    </div>
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">final exam degree:</h6>
                                        <p>{{ FinalDegre }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0 m-0">
                            <table class="table table-borderless m-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Class</th>
                                        <th scope="col">Number of sets</th>
                                        <th scope="col">Number of student</th>
                                        <th scope="col">Teacher name</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>
                                        <td scope="row">gjnk</td>


                                        <td>
                                            <p>not Solved</p>
                                        </td>
                                        <td>dd</td>

                                        <td>gokd</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="card p-4" >
                       <p class="mb-4">
                        you can add subjects and classes and select the degree of tests and final exam and student attendance.
                       </p>
                       <form>
                        <p >Subject Name:</p>
                        <input class="inp" v-model="SubjectName"/>
                        <p >Number Of Classes:</p>
                        <input class="inp" v-model="NumberClasses"/>
                        <p >Number Of Sets:</p>
                        <input class="inp" v-model="NumberSets">
                        <p >Test Degree:</p>
                        <input class="inp" v-model="TestDegree">
                        <p >Student Attendance Degree:</p>
                        <input class="inp" v-model="AttendanceDegree">
                        <p >Final Exam Degree:</p>
                        <input class="inp" v-model="FinalDegree">
                        <div>
                        <button class="btn">Add</button>
                    </div>
                       </form>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    components: {
        NavBar
    },
    data() {
        return {
            SubjectName:'',
            NumberClasses:0,
            NumberSets:0,
            TestDegree:0,
            AttendanceDegree:0,
            FinalDegree:0,






            //////////////////////
            Subject: 'programming',
            NumberClass: '20',
            NumberStudent: 20,

            TestDegre: '15',
            AttendDegree: '5',
            FinalDegre: '10',
         



        }
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
.inp{
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