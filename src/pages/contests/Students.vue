<template>
    <div>
        <TopBar></TopBar>
        <div class="screen">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-6">
                            <div class="container mt-4">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search..."
                                        v-model="searchQuery">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="fas fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4"></div>
                        <div class="col-2 mt-4">
                            <router-link
                                :to="{ path: '/createContests', query: { students: JSON.stringify(selectedStudents) } }"
                                style="text-decoration: none; color: inherit;">
                                <button type="button" class="btn m-2 fw-b">
                                    Add
                                </button>
                            </router-link>
                        </div>
                    </div>
                    <table class="table table-bordered mt-2">
                        <thead>
                            <tr>
                                <th style="width: 10%;">
                                    <h6>id</h6>
                                </th>
                                <th>
                                    <h6>Name</h6>
                                </th>
                                <th style="width: 10%;">
                                    <h6>Selected</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in students" :key="student.id">
                                <td style="max-width: 10%;">{{ student.id }}</td>
                                <td>{{ student.first_name }} {{ student.last_name }}</td>
                                <td v-if="!isSelected(student.id)" style="width: 10%;" @click="selectStudent(student)">
                                    <font-awesome-icon :icon="['far', 'square-check']" />
                                </td>
                                <td v-if="isSelected(student.id)" style="width: 10%;" @click="deselectStudent(student)">
                                    <font-awesome-icon :icon="['fas', 'square-check']" />
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
            searchQuery: '',
            students: [],
            selectedStudents: []
        }
    },
    mounted() {
        this.getStudents();
        this.loadFormData();
    },
    computed: {
        formData: {
            get() {
                const savedFormData = localStorage.getItem("students");
                return savedFormData ? JSON.parse(savedFormData) : [];
            },
            set(newFormData) {
                localStorage.setItem("students", JSON.stringify(newFormData));
            }
        }
    },
    watch: {
        selectedStudents: {
            handler(newFormData) {
                this.formData = newFormData;
            },
            deep: true,
        },
    },
    methods: {
        loadFormData() {
            this.selectedStudents = this.formData;
        },
        selectStudent(student) {
            if (!this.isSelected(student.id)) {
                this.selectedStudents.push(student);
            }
            if (this.selectedStudents.length > 1) {
                console.log('Selected student ID:', this.selectedStudents[1]?.id);
            }
        },
        deselectStudent(student) {
            this.selectedStudents = this.selectedStudents.filter(s => s.id !== student.id);
        },
        isSelected(studentId) {
            return this.selectedStudents.some(student => student.id === studentId);
        },
        getStudents() {
            axios.get(BASE_URL + 'contests/allStudents', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
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
    background: #e7dff9;
    height: 100%;
    max-height: fit-content;
    justify-content: center;
    align-items: center;
    text-align: center;
}

p {
    color: var(--GreenOpacity);
}

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
