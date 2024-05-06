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
                    <div class="backg me-5">
                        <div class="row">
                            <div class="col me-5">{{ NumberOfTest }}</div>
                            <div class="col ms-5">{{ SubjectName }}</div>
                            <div class="w-100"></div>
                            <div class="col mt-1 me-5">{{ NumberOfClass }}</div>
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
                    <h6>My test</h6>


                    <div class="backg mt-5">
                        <!-- this -->
                        <div class="row mb-4">
                            <div class="col me-5">{{ MySubjectName }}</div>
                            <div class="col ms-5">{{ MyNumberOfClass }}</div>
                        </div>
                        <!-- end this -->
                        <div>

                        </div>
                    </div>
                    <div class="backg mt-2">
                        <p>if you want to change your class you can send a request to the admin to change the class by
                            entering the subject and number of the class </p>
                        <!-- <button type="button" class="btn btn-success ms-5 mt-0 fw-b">
                            change class
                        </button> -->
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-success ms-5 mt-0 fw-b" data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter">
                            Change Class
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Change The Class</h5>
                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <P>Enter the reason you are changing the class</P>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
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
export default {
    components: {
        NavBar
    },
    data() {
        return {
            NumberOfTest: 'first test',
            NumberOfClass: 'class2',
            TecherName: 'noha',
            SubjectName: 'programming',
            MySubjectName: 'programming',
            MyNumberOfClass: 'class22',
        }
    }
}
</script>

<style scoped>
p {
    color: var(--GreenOpacity);
}

h6 {
    color: var(--GreenColor);
}

.backg {
    background: var(--WhiteColor);
    padding: 10px;
    border-radius: 10px;
}

.btn {
    background: var(--GreenColor);
}
</style>