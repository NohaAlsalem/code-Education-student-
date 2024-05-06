<template>
    <div>
        <NavBar></NavBar>
        <div class="screen w-100">

            <div class="prof ms-0">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="d-flex">
                                    <div>
                                        <font-awesome-icon :icon="['fas', 'id-card']" :size="['6x']" />
                                     
                                    </div>
                                    <div>
                                        <h5 class="my-3 mx-3">John Smith</h5>
                                        <div class="mb-1 my-3 mx-3 d-flex" style="color: var(--GreenColor);">
                                            <p>Rank:~</p>
                                            <p>{{ Rank }}</p>
                                        </div>
                                    </div>
                                </div>

                                <button type="button" class="btn"
                                    style="width: 100%;background: var(--darkwhite); color: var(--GreenColor); font-weight: bold">Edit
                                    Profile</button>
                                <div class="Divider mb-1"></div>
                                <h6 style="color: var(--GreenColor);font-weight: 700;">Community Stats</h6>
                                <div class="d-flex">
                                    <font-awesome-icon :icon="['fas', 'eye']" class="m-1"
                                        style="color: var(--GreenOpacity);" />
                                    <div>
                                        <h6 class="ms-2 me-2 mb-0" style="color: var(--GreenColor);">Views :</h6>
                                        <div class="d-flex ms-2">
                                            <p
                                                style="color: var(--GreenOpacity); font-size: smaller;margin-right: 5px;">
                                                this week :</p>
                                            <p style="color: var(--GreenOpacity); font-size: smaller;">{{ thisweek }}
                                            </p>
                                        </div>
                                    </div>
                                    <h6 class="me-2" style="color: var(--GreenColor);">{{ views }}</h6>
                                </div>
                                <div class="d-flex mt-3 mb-5">
                                    <font-awesome-icon :icon="['fas', 'square-check']" class="m-1"
                                        style="color: var(--GreenOpacity);" />
                                    <div>
                                        <h6 class="ms-2 me-2 mb-0" style="color: var(--GreenColor);">Solution :</h6>
                                        <div class="d-flex ms-2">
                                            <p
                                                style="color: var(--GreenOpacity); font-size: smaller; margin-right: 5px;">
                                                this week :</p>
                                            <p style="color: var(--GreenOpacity); font-size: smaller;">{{ thisweek }}
                                            </p>
                                        </div>
                                    </div>
                                    <h6 class=" me-2" style="color: var(--GreenColor);">{{ solution }}</h6>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="col-lg-9">


                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="card mb-3">
                                    <div class="card-body">

                                    </div>
                                </div>

                                <div class="card mb-4 mb-md-0">
                                    <div class="card-body">
                                        <div style="justify-content: end; text-align: end;">
                                            <div class="row m-0 p-0" style="justify-items: end;">
                                                <div class="col-8"></div>
                                                <p class="col-2">
                                                    Only me
                                                </p>
                                                <div class="col-2">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="flexSwitchCheckDefault" >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <table class="table  table-bordered mt-4">
                        <thead>
                            <tr>
                                <th style="width: 40%;">
                                    <h5>
                                       Material
                                    </h5>
                                </th>
                                <th>
                                    <h5>
                                       Degree
                                    </h5>
                                </th>
                                <th style="width: 40%;">
                                    <h5>
                                       date
                                    </h5>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="max-width: 40%;">{{ material }}</td>

                                <td>{{ degree }}</td>
                                <td  style="max-width: 40%;" >
                                    {{ date }}
                                </td>
                               

                            </tr>
                            <tr>
                                <td style="max-width: 40%;">{{ material }}</td>

                                <td>{{ degree }}</td>
                                <td  style="max-width: 40%;" >
                                    {{ date }}
                                </td>
                               

                            </tr>
                            <tr>
                                <td style="max-width: 40%;">{{ material }}</td>

                                <td>{{ degree }}</td>
                                <td  style="max-width: 40%;" >
                                    {{ date }}
                                </td>
                               

                            </tr>
                           
                       
                        </tbody>
                    </table>





                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import PieChart from './PieChart.vue';
export default {
    components: {
        NavBar,
        PieChart
    },
    data() {
        return {
            Rank: '200.000',
            views: 0,
            solution: 0,
            thisweek: 0,
            material:'Programming1',
            degree:30,
            date:'10/10/2024'
        }
    }
}
</script>

<style scoped>
.screen {
    padding: 40px 40px;
    background: var(--WhiteColor);
    height: 100vh;
    /* height: calc(100vh-72px); */
}
/* .form-check .form-check-input []{
    color: var(--GreenColor);
} */

h5 {
    color: var(--GreenColor);
    font-weight: bold;
}

p {
    color: var(--GreenColor);
    margin: 0;
    padding: 0;
}

.card {
    border: 1px solid var(--borderColor);
    border-radius: 10px;
}

.Divider {
    border-top: 1px solid var(--LightGreen) !important;

    margin: 30px 50px;
}
.table th {
   color: var(--GreenColor);
   font-weight: bold;
   text-align: center;
}

.table td {
    color: var(--GreenColor)
}

.table {
    border-radius: 5px;
    border: 1px solid var(--borderColor);
}
</style>