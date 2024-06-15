<template>
  <div>
    <NavBarA></NavBarA>
    <div class="container ms-2 mt-4">
      <div class="row">
        <div class="col-8" style="height:100vh; overflow-y: auto">
          <!-- <h6 class="ms-3">My test</h6> -->

          <div class="card ms-0" style="border: none;">
            <div class="card-body pb-0">
              <!-- <h5 class="card-title">Top Selling <span>| Today</span></h5> -->

              <table class="table table-borderless ">
                <thead>
                  <tr>
                    <th scope="col">#id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">password</th>
                  </tr>

                </thead>

                <tbody>

                  <tr v-for="student in students" :key="student.id">
                    <td scope="row">gjnk</td>
                    <td>
                      <p>not Solved</p>
                    </td>
                    <td>dd</td>
                    <td class="fw-bold">kcj</td>
                    <td>gokd</td>
                    <td> <button type="button" class="btn" @click="generatePassword(student.id)">Generate</button>
                    </td>
                  </tr>

                </tbody>
              </table>


            </div>
          </div>
          <!-- modal generate -->
          <div class="modal fade p-5" id="generateModal" aria-hidden="true" style="background: var(--whiteColor);">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content m-5">
                <div class="modal-header d-flex">

                  <h6 class="modal-title me-2">Student name :</h6>
                  <h6 class="modal-title ">name</h6>
                </div>
                <div class="modal-body" style="justify-content: center;">
                  <p>Enter password</p>
                  <input class="w-100 mb-2">
                  <button class="btn" data-bs-dismiss="modal">Generate</button>
                </div>

              </div>
            </div>
          </div>



        </div>
        <div class="col-4">

          <!-- <div class="mb-4">
            <h6>Forget password request</h6>
            <div class="card" style="border-radius: 0;">
              <table class="table table-borderless w-100">
                <thead>
                  <tr>
                    <th class="col-8">name</th>

                    <th class="col-4">operation</th>
                  </tr>
                
                </thead>

                <tbody>

                  <tr class="mb-3">
                    <td class="col-8">name</td>

                    <td class="col-4">
                      <button class="btn">Generate</button>
                  
                    </td>
                  </tr>
                  <tr class="mb-3">
                    <td class="col-8">name</td>

                    <td class="col-4">
                      <button type="button" class="btn" data-bs-toggle="modal"
                        data-bs-target="#generateModal">Generate</button>
                  
                    </td>
                  </tr>
                </tbody>
              </table>




            </div>
          </div> -->

          <div>
            <h6>Change class requests</h6>
            <div class="card " style="border-radius: 0;">
              <table class="table table-borderless w-100">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <!-- <th scope="col">Subject</th> -->
                    <th scope="col">Old Class</th>
                    <th scope="col">New Class</th>
                    <th>accept</th>
                  </tr>

                </thead>

                <tbody>
                  <tr v-for="student in change_class_requests" :key="student.id" class="trow"
                    @click="toggleCollapse(student.id)">
                    <!-- <tr v-for="student in change_class_requests" class="trow" data-bs-toggle="modal" data-bs-target="#classModal"> -->

                    <td scope="row" aria-expanded="false" :aria-controls="'modal' + student.id"
                      :data-bs-toggle="'modal'" :data-bs-target="'#cardModal' + student.id">{{ student.student_name }}
                    </td>
                    <td>{{ student.old_class }}</td>
                    <td>{{ student.new_class }}</td>

                    <td>
                      <div class="pt-0 d-flex" @click="toggleCollapse(student.id)">

                        <button type="button" class="btn btn-success ms-5 mt-0" aria-expanded="false"
                          :aria-controls="'modal' + student.id" :data-bs-toggle="'modal'"
                          :data-bs-target="'#cardModal' + student.id" @click="passcontestid(teacher.id)">
                          Change
                        </button>
                      </div>

                      <div class="modal fade" :class="['cardModal', { show: isActive(student.id) }]"
                        :id="'cardModal' + student.id" tabindex="-1" aria-labelledby="cardModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="">
                              <div class="m-0" style="text-align: center">
                                <p class=" pb-1 m-0">{{ student.id }}</p>

                                <div class="modal-body" style="justify-content: center;">
                                  <div class=" d-flex">
                                    <h6 class=" me-2 mt-1">name :</h6>
                                    <h7>name</h7>
                                  </div>

                                  <div class=" d-flex ">
                                    <div class="d-flex me-5">
                                      <h6 class=" me-2 mt-1">old class :</h6>
                                      <h7>old</h7>
                                    </div>
                                    <div class="d-flex ms-5">
                                      <h6 class=" me-2 mt-1">new class :</h6>
                                      <h7>new</h7>
                                    </div>
                                  </div>
                                  <h6 class=" mt-1">the reason :</h6>
                                  <input class="w-100 mb-2">
                                  <button class="btn" data-bs-dismiss="modal">Agree</button>
                                </div>

                              </div>

                            </div>

                          </div>
                        </div>
                      </div>


                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
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
      students: [],
      change_class_requests: [],
      confirmId: null,
      activeSolutionId: null,
      newStudentPassword: '',
    }
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    toggleCollapse(solutionId) {
      this.activeSolutionId = this.activeSolutionId === solutionId ? null : solutionId;
    },
    isActive(solutionId) {
      return this.activeSolutionId === solutionId;
    },
    passcontestid(id) {
      this.confirmId = id;
    },


    getStudents() {
      axios.get(ADMIN_URL + 'students', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }).then((response) => {
        console.log(response.data);
        this.students = response.data.students;
        this.change_class_requests = response.data.change_class_request;

      }).catch((error) => {
        console.log(error)
        this.errMessage = 'error retrieving data'
      })
    },
    generatePassword(studentId) {
      axios.post(ADMIN_URL + `students/${studentId}/change-password`, '', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then((response) => {
          this.newStudentPassword = response.new_password;
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
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
}

.table th {
  background: var(--GreenColor);
  color: white;
}

.table .trow td {
  /* background: var(--WhiteColor); */
  padding: 5px;

}

.btn {
  border-radius: 10px;
  background: var(--GreenColor);
  padding: 2px 10px;
  border: 0;
  color: white;
}

.backg {
  background: var(--WhiteColor);
  padding: 10px;
  border-radius: 10px;
}

.cardModal {
  display: none;
}

.cardModal.show {
  display: block;
}
</style>