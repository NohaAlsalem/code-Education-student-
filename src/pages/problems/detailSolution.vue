<template>
    <div class="screen w-100 h-100">
        <div class="row">
            <div class="col-md-6">
                <div class="container  col-md-12" style="margin-top: 10px; margin-bottom: 10px">
                    <div class="card text-start ">
                        <div class="card-header">
                            <button type="button" class="btn" :class="{ 'custom-button': selectedButton === 1 }"
                                @click="selectButton(1)">
                                Description
                            </button>
                            <button class="btn">
                                |
                            </button>
                            <button type="button" class="btn" :class="{ 'custom-button': selectedButton === 2 }"
                                @click="selectButton(2)">
                                Solution
                            </button>
                        </div>
                        <Description v-if="description"> </Description>
                        <mySolution v-else></mySolution>
                    </div>
                    <div v-if="description" class="choose mt-4">
                        <h6>2.Choose the correct answer</h6>
                        <p>1-What is the correct way to declare a variable in java?</p>
                        <div class="radios ">
                            <div class="form-check mt-0">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1">
                                <!-- <label class="form-check-label" for="flexRadioDefault1">
   privet
  </label> -->
                                <p>int x=10</p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked>
                                <p>x=10</p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked>
                                <p>x=10</p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked>
                                <p>x=10</p>
                            </div>
                        </div>
                        <p>2-What will be the output of the following code snippet</p>
                        <div class="ps-2 p-1" style="background: black; color: white; width: 50%; height: auto;">
                            <p>java</p>
                            <p>int x=4</p>
                        </div>
                        <div class="radios mt-2">
                            <div class="form-check mt-0">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                    id="flexRadioDefault1">
                                <!-- <label class="form-check-label" for="flexRadioDefault1">
   privet
  </label> -->
                                <p>int x=10</p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                    id="flexRadioDefault2" checked>
                                <p>x=10</p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                    id="flexRadioDefault2" checked>
                                <p>x=10</p>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                    id="flexRadioDefault2" checked>
                                <p>x=10</p>
                            </div>
                        </div>
                        <div class="d-flex">
                            <p style="color: brown;margin-right: 2px;">Note:</p>
                            <p>if you click on finish exam, you cannot go back and complete the exam and correct your mistakes.</p>
                        </div>
                        <button class="bttn" style="color: aliceblue">Finish Exam</button>
                        <p></p>
                    </div>
                </div>
            </div>


            <div class="col-md-6">
                <inputcode></inputcode>
            </div>
        </div>
    </div>
</template>

<script>
import Description from "./component/Description.vue";
import mySolution from "./component/mySolution.vue";
import inputcode from "./component/inputcode.vue";

export default {
    components: {
        Description,
        mySolution,
        inputcode
    },
    data() {
        return {
            selectedButton: 2,
            description: false,
            solution: true,
        };
    },
    methods: {
        selectButton(buttonNumber) {
            this.selectedButton = buttonNumber;
            if (this.selectedButton === 1) {
                this.description = true;
                this.solution = false;
            } else {
                this.solution = true;
                this.description = false;
            }
        },
    },
};
</script>

<style scoped>
h6 {
    color: var(--GreenColor);
    font-weight: bold;
}
.bttn {
    background: var(--GreenColor);
    color: white;
    padding: 0 20px;
    border-radius: 10px;
    border: none;
}
p {
    color: var(--GreenColor);
}

.screen {
    padding: 20px 40px;
    background: var(--WhiteColor);
    height: 100vh;
    /* height: calc(100vh-72px); */
}

.btn {
    border: none;
    color: var(--GreenOpacity);
}

.card {
    border: 1px solid var(--GreenOpacity);
}

.custom-button,
.btn:hover,
.bttn:hover {
    color: var(--GreenColor);
    font-weight: bold;
}

.card-body .form-control {
    margin: 0;
    height: 100vh;
}
</style>