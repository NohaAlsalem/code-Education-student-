<template>
    <div>
        <div class="container pt-4">
            <p>You can join a Contest using the contest identification number that the originator if the contest will
                give you</p>
            <p>Enter the contest identification number</p>


            <div class="row ">
                <div class="col-sm">
                    <div class="input-group">
                        <input type="text" class="form-control" data-bs-toggle="modal" data-bs-target="#cardModal">
                        <!-- <div class="absolute inset-y-0 right-0 pr-3 pt-2">icon</div> -->
                    </div>
                </div>
                <div class="col-sm">
                </div>
                <div class="col-sm">
                </div>
            </div>
            <!-- start i need it -->
            <div class="container mt-4">
                <div class="row">
                    <div class="col-8"> <!-- start Card -->
                        <div class="container d-flex mt-4 p-4">
                            <div class="card">
                                <!-- <div class="card mb-3" style="max-width:540px;">  -->
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                                            class="img-fluid rounded" alt="...">
                                    </div>
                                    <div class="col-md-8 ps-4">
                                        <h5>
                                            {{ NameContest }}
                                        </h5>
                                        <p class="pt-2">
                                            <small class="text-muted">
                                                {{ EndOfContest }}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class=" container d-flex mt-4 p-2 pt-4">
                            <p class="font-c">Contest Writer :</p>
                            <p class="text-black"> Noha</p>
                        </div>

                        <button type="button" class="btn btn-success ms-5 mt-0">
                            join
                        </button>
                    </div>
                </div>
                <div class="Divider"></div>
            </div>
            <!-- end i need it -->



            <div class="modal fade" id="cardModal" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container">
                                    <p class="card-text pb-2">
                                        Enter your password
                                    </p>
                                    <div class="input-group">
                                        <input type="text" class="form-control" data-bs-toggle="modal"
                                            data-bs-target="#cardModal">
                                    </div>
                            </div>

                        </div>

                        <div class="modal-footer d-flex">
                            <button type="button" class="btn bg-white" data-bs-dismiss="modal">
                                <p> cancel</p>
                            </button>
                            <button type="button" class="btn bg-white" data-bs-dismiss="modal">
                                <p>Ok</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            NameContest: 'Cntests Programing 1',
            EndOfContest: 'end',
        }
    },

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