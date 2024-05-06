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
                                    <!-- <div class="modal-header">
                                        <h6 class="modal-title" id="exampleModalLongTitle">Change The Class</h6>
                                      
                                    </div> -->
                                    <div class="modal-body">
                                        <h6 class="modal-title" id="exampleModalLongTitle">Change The Class</h6>
                                        <P>Enter the reason you are changing the class</P>
                                        <input type="text" style="width: 100%;border: none;" />
                                        <div class="d-flex mt-2">
                                            <p>Choose the subject name :</p>
                                            <select class="drop ms-2" id="lnag" name="lang" v-model="material"
                                                placeholder="Lnguage" autocomplete="country-name">
                                                <option class="opt ">programming1</option>
                                                <option class="opt ">programming2</option>
                                            </select>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <p>Choose the class number :</p>
                                            <select class="drop ms-2" id="lnag" name="lang" v-model="numberc"
                                                placeholder="Lnguage" autocomplete="country-name">
                                                <option class="opt ">1</option>
                                                <option class="opt ">2</option>
                                            </select>
                                        </div>
                                        <div style="justify-content: center; justify-items: center;">
                                            <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Change</button>
                                        </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
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
            material: 'programming1',
            numberc:1,
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