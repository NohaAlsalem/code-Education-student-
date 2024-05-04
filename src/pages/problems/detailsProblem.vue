<template>
         <div class="screen w-100 h-100">
    <div class="row">
        <div class="col-md-6">
            <div class="container text-center col-md-12" style="margin-top: 10px; margin-bottom: 10px">
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
                    <Solution v-else></Solution>
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
import Solution from "./component/Solution.vue";
import inputcode from "./component/inputcode.vue";

export default {
    components: {
        Description,
        Solution,
        inputcode
    },
    data() {
        return {
            selectedButton: 1,
            description: true,
            solution: false,
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
.screen {
    padding:20px 40px;
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
.btn:hover {
    color: var(--GreenColor);
    font-weight: bold;
}

.card-body .form-control {
    margin: 0;
    height: 100vh;
}
</style>