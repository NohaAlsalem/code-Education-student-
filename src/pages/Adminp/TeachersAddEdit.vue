<template>
    <div>
        <NavBar></NavBar>
        <div class="m-5 mt-3">
            <div class="card" style="height:90vh; overflow-y: auto">
               
                <div class="card-body p-0 ">
                    <table class="table table-borderless m-0">
                        <thead>
                            <tr>
                                <th scope="col">Class</th>
                                <th scope="col">Subjects</th>
                                <th scope="col">Number of sets</th>
                                <th scope="col">Number of student</th>
                                <th scope="col">Teacher</th>
                                <th scope="col">Teacher name</th>

                            </tr>

                        </thead>

                        <tbody>
                            <tr>
                                <td >gjnk</td>
                                <td>
                                    <p>not Solved</p>
                                </td>
                                <td>dd</td>
                                <td>dd</td>
                                <td>
                                    <button v-if="add" class="btn">
                                        Add
                                    </button>
                                    <button v-else class="btn" style="background: brown;">
                                        Edit
                                    </button>
                                </td>
                                <td>gokd</td>
                            </tr>

                        </tbody>
                    </table>
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
           
            add:true,


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


.card {
    /* background: var(--WhiteColor); */
    padding: 0;
    border: 1px solid var(--borderColor);
    border-radius: 5px;
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