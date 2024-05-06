<template>
    <div class="card-body" style="height:40vh; overflow-y: auto">
        <table class="table table-bordered    narrow-table me-0 overflow-auto">

            <tbody>
                <tr>
                    <td>

                        <router-link to="/detailSolution" style="text-decoration: none; color: inherit;">
                            <div class="row">
                                <div class="col ">
                                    <p >Solution1</p>
                                </div>
                                <div class="col" style="text-align: end;">
                                    <p v-if="!chosed" @click="chosed = true">
                                        <font-awesome-icon :icon="['far', 'circle-check']" />
                                    </p>
                                    <p v-if="chosed" @click="chosed = false">
                                        <font-awesome-icon :icon="['fas', 'circle-check']" />
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>

                        <router-link to="/detailSolution" style="text-decoration: none; color: inherit;">
                            <div class="row">
                                <div class="col ">
                                    <p >Solution1</p>
                                </div>
                                <div class="col" style="text-align: end;">
                                    <p>
                                        <font-awesome-icon :icon="['far', 'circle-xmark']" style="color: brown;" />
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>

                        <router-link to="/detailSolution" style="text-decoration: none; color: inherit;">
                            <div class="row">
                                <div class="col ">
                                    <p >Solution1</p>
                                </div>
                                <div class="col" style="text-align: end;">
                                    <p>
                                        <font-awesome-icon :icon="['far', 'circle-check']" />
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>

                        <router-link to="/detailSolution" style="text-decoration: none; color: inherit;">
                            <div class="row">
                                <div class="col ">
                                    <p >Solution1</p>
                                </div>
                                <div class="col" style="text-align: end;">
                                    <p>
                                        <font-awesome-icon :icon="['far', 'circle-check']" />
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>

                        <router-link to="/detailSolution" style="text-decoration: none; color: inherit;">
                            <div class="row">
                                <div class="col ">
                                    <p >Solution1</p>
                                </div>
                                <div class="col" style="text-align: end;">
                                    <p>
                                        <font-awesome-icon :icon="['far', 'circle-check']" />
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <router-link to="/detailSolution" style="text-decoration: none; color: inherit;">
                            <div class="row">
                                <div class="col ">
                                    <p >Solution1</p>
                                </div>
                                <div class="col" style="text-align: end;">
                                    <p>
                                        <font-awesome-icon :icon="['far', 'circle-check']" />
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <router-link to="/detailSolution" style="text-decoration: none; color: inherit;">
                            <div class="row">
                                <div class="col ">
                                    <p >Solution1</p>
                                </div>
                                <div class="col" style="text-align: end;">
                                    <p>
                                        <font-awesome-icon :icon="['far', 'circle-check']" />
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </td>
                </tr>

            </tbody>
        </table>

    </div>
</template>

<script>
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
export default {
    data(){
        return{
            chosed:false,
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
}
.table{
    border: 1px solid var(--borderColor);
    border-radius: 10px;
}
</style>
