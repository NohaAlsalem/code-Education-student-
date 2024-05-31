<template>
    <div>

        <!-- start i need it -->
        <div class="container">

            <div class="row mt-0">
                <div class="col-8"> <!-- start Card -->

                    <router-link :to="{ name: 'detaileContest', params: { ContestId: contest.id } }"
                        style="text-decoration: none; outline: none;">
                        <div class="container d-flex mt-4 p-4 pb-1 pt-0">
                            <div class="card">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                                            class="img-fluid rounded" style="max-width: 100%;" alt="...">
                                    </div>
                                    <div class="col-md-8 ps-3">
                                        <h5>{{ contest.name }}</h5>
                                        <div class="pt-2 d-flex">
                                            <p>date exam:</p>
                                            <h6 class="text-black pt-1 ps-1">{{ contest.start_at }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>

                </div>



                <div class="col-4 container  mt-4 p-4 pt-0">
                    <div class="d-flex">
                        <h6 class="font-c">Create by :</h6>
                        <p class="text-black"> {{ contest.owner }}</p>
                    </div>
                    <div class="pt-0 d-flex">

                        <button type="button" class="btn btn-success ms-5 mt-0" data-bs-toggle="modal"
                            data-bs-target="#cardModal">
                            join
                        </button>
                    </div>
                </div>


                <div class="modal fade" id="cardModal" tabindex="-1" aria-labelledby="cardModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="container">
                                    <p class="card-text pb-2">You can join a Contest using the contest identification
                                        number that the originator if the contest will
                                        give you</p>
                                    <p>Enter the contest identification number</p>
                                    <div class="input-group">
                                        <input v-model="password" type="text" class="form-control">
                                    </div>
                                </div>

                            </div>

                            <div class="modal-footer d-flex">
                                <button type="button" class="btn bg-white" data-bs-dismiss="modal">
                                    <p> Cancel</p>
                                </button>
                                <button type="button" class="btn bg-white" data-bs-dismiss="modal"
                                    @click="joinContest(contest.id)">
                                    <p>{{ contest.id }}</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="Divider"></div>


            <!-- end i need it -->
        </div>

    </div>
</template>

<script>
import itemContest from '@/components/itemContest.vue';
import axios from 'axios';
export default {
    props: {
        contest: {
            type: Object,
            required: true,
        }
    },
    components: {
        itemContest,
    },
    data() {
        return {
            NameContest: 'Cntests Programing 1',
            EndOfContest: 'end',
            password: '',
        }
    },
    methods: {
        joinContest(contestId) {
            axios.post(`http://127.0.0.1:8000/api/student/contests/join/${contestId}`, this.password, {
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
        },


    }

}
</script>

<style scoped>
p,
small {
    color: var(--GreenColor);
}

.btn {
    background: var(--GreenColor);
}

.card .img-fluid {
    height: 5rem;
    width: 10rem;
    max-width: 100%;

}

.input-group .form-control {
    background: var(--WhiteColor);
    border: 1px solid var(--LightGreen);
}

.card {
    border: none;
}

.card .img-fluid {
    height: 5rem;
    width: 10rem;

}

.Divider {
    border-top: 1px solid var(--LightGreen) !important;
    /* border-bottom: 1px solid  var(--LightGreen)!important; */
    /* height: 0.5px; */
    margin: 0px 100px;
}

.card .text-muted {
    color: var(--LightGreen);
}

.font-c {
    color: var(--GreenColor);
}

.modal-footer {
    border: none;

}
</style>