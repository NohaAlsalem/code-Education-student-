<template>
    <div class="card-body" style="height:100vh; overflow-y: auto">
        <div class="row mb-3 mt-2">
            <div class="col d-flex">
                <h6 style="color: var(--GreenColor);">
                    Solution 1:
                </h6>
            </div>
            <div class=" col mt-0" style="text-align: end;">

                <h6 style="color: var(--GreenColor);">
                    <font-awesome-icon :icon="['fas', 'circle-check']" />
                    Accepted
                </h6>
            </div>
        </div>
        <div class="backg p-4">
            <p>
                #include
            </p>
            <p>"
                int main(){
                cout "hello"
                }"
            </p>
        </div>
        <h6 style="color: var(--GreenColor);">
            Tests :
        </h6>
        <div>
            <h6 style="color: var(--GreenColor); margin-top: 20px;">
                Test 1:
            </h6>
            <p>Input:</p>

            <p class="backg mt-0">
                {{ input }}
            </p>
            <p>Output:</p>
            <p class="backg">{{ output }}</p>
            <p>Answer</p>
            <p class="backg">{{ answer }}</p>
        </div>
    </div>


</template>

<script>
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
export default {
    data() {
        return {
            input: '3,5',
            output: '8',
            answer: '8',
        }
    }
};
</script>

<style scoped>
.card-body {
    border: 1px solid var(--GreenOpacity);
    height: 40%;
    max-height: 40;
}

p {
    color: var(--GreenOpacity);
    margin: 0;
}

.table {
    border: 1px solid var(--borderColor);
    border-radius: 10px;
}

.backg {
    background: var(--WhiteColor);
    padding: 5px;
    border-radius: 10px;
    border: 1px solid var(--borderColor);
}
</style>
