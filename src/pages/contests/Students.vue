<template>
    <div>
        <TopBar></TopBar>
        <div class="screen">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <div class="row">
                        <div class="col">
                            <div class="container mt-4">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search..."
                                        v-model="searchQuery">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="fas fa-search"></i>
                                            <!-- <font-awesome-icon :icon="['fat', 'magnifying-glass']" /> -->
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <router-link
                                :to="{ path: '/createContests', query: { students: JSON.stringify(selectedStudents) } }"
                                style="text-decoration: none; color: inherit;">
                                <button type="button" class="btn m-2 fw-b">
                                    Add
                                </button>
                            </router-link>
                        </div>
                    </div>
                    <table class="table  table-bordered mt-4">
                        <thead>
                            <tr>
                                <th style="width: 10%;">
                                    <h6>
                                        id
                                    </h6>
                                </th>
                                <th>
                                    <h6>
                                        Name
                                    </h6>
                                </th>
                                <th style="width: 10%;">
                                    <h6>
                                        Selected
                                    </h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in students" :key="student.id">
                                <td style="max-width: 10%;">{{ student.id }}</td>

                                <td>{{ student.first_name }} {{ student.last_name }}</td>

                                <td v-if="!isSelected(student.id)" style="width: 10%;" @click="selectStudent(student)">
                                    <font-awesome-icon :icon="['far', 'square-check']" />
                                    <!-- <font-awesome-icon :icon="['fas', 'square-check']" /> -->
                                </td>
                                <td v-if="isSelected(student.id)" style="width: 10%;" @click="deselectStudent(student)">
                                    <font-awesome-icon :icon="['fas', 'square-check']" />
                                    <!-- <font-awesome-icon :icon="['fas', 'square-check']" /> -->
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import { BASE_URL } from "@/assets/config";
import axios from 'axios';
export default {
    components: {
        TopBar,

    },
    data() {
        return {
            chosed: false,
            students: [],
            selectedStudents: []

        }

    },
    mounted() {
        this.getStudents();
        this.loadFormData();
    },

   
  watch: {
    selectedStudents: {
      handler(newFormData) {
        localStorage.setItem("students", JSON.stringify(newFormData));
      },
      deep: true,
    },
  },
    methods: {
        loadFormData() {
      const savedFormData = localStorage.getItem("students");
      if (savedFormData) {
        this.formData = JSON.parse(savedFormData);
      }
    },


        selectStudent(student) {

            if (!this.isSelected(student.id)) {
                this.selectedStudents.push(student);
            }
            console.log('dwqahiukgjyfhtgwe' + this.selectedStudents[1].id);
        },
        deselectStudent(student) {
            this.selectedStudents = this.selectedStudents.filter(s => s.id !== student.id);
        },
        isSelected(studentId) {
            return this.selectedStudents.some(student => student.id === studentId);
        },

        getStudents() {
            axios.get( BASE_URL + 'contests/allStudents', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                console.log(this.token);
                this.students = response.data.data;
                console.log(response.data);
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },

    }
}
</script>

<style scoped>
.btn {
    background: var(--GreenColor);
    color: white;
}

.screen {
    padding: 40px 80px;
    background: var(--WhiteColor);
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* height: calc(100vh-72px); */
}

p {
    color: var(--GreenOpacity);
}

/* h6 {
    color: var(--GreenColor);
} */

.table th {
    background: var(--GreenColor);
    color: white;
}

.table td {
    color: var(--GreenOpacity)
}

.table {
    border-radius: 5px;
}

.input-group {
    border-radius: 5px;
    border: 1px solid #ced4da;
}

.input-group-text {
    background-color: transparent;
    border: none;
}
</style>