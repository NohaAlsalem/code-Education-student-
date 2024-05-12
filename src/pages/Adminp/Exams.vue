<template>
    <div>
        <NavBar></NavBar>
        <div class="container ms-2 mt-4">
            <div class="row">
                <div class="col-4 ">
                    <div class="card m-5" >                       
                      
                            <table class="table table-borderless w-100" style="width: 100%;">
                                <thead>
                                    <tr>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Exam date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>dd</td>
                                        <td>gokd</td>
                                    </tr>
                                    <tr>
                                        <td>dd</td>
                                        <td>gokd</td>
                                    </tr>
                                    <tr>
                                        <td>dd</td>
                                        <td>gokd</td>
                                    </tr>
                                    <tr>
                                        <td>dd</td>
                                        <td>gokd</td>
                                    </tr>
                                    <tr>
                                        <td>dd</td>
                                        <td>gokd</td>
                                    </tr>

                                </tbody>
                            </table>
                       
                    </div>
                </div>

                <div class="col-8">
<detailProblem></detailProblem>
                   </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import detailProblem from '@/pages/Adminp/component/detailProblem.vue';

export default {
    components: {
        NavBar,
        detailProblem,
    },
    data() {
        return {
           
        }
    }
}
</script>

<style scoped>
p {
    color: var(--GreenColor);
    margin: 0;

}

h6 {
    color: var(--GreenColor);
    font-weight: bold;
    margin: 0;
}
.inp{
    width: 100%;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
}
.card {
 height: 50vh;
    padding: 0;
    border: 1px solid var(--borderColor);
    border-radius: 5px;
    overflow-y: auto;
   
}

.table th {
    background: var(--GreenColor);
    color: white;
    font-weight: 400;
}

.btn {
    border-radius: 10px;
    background: var(--GreenColor);
    padding: 2px 10px;
    border: 0;
    color: white;
}


</style>