<template>
    <div class="container">
        <div class="row mt-0">
            <div class="col-8">
                <div class="container mt-4 p-0">
                    <p>Contest Name</p>
                </div>
            </div>
            <div class="col-4 container  mt-4 p-0  pt-0">
                <button type="button" class="btn btn-success ms-5 mt-0">
                    Create
                </button>
            </div>
        </div>
        <!-- input to contest name -->
        <div class="input-group">
            <input type="text" class="form-control">
            <!-- <div class="absolute inset-y-0 right-0 pr-3 pt-2">icon</div> -->
        </div>

        <div class="container mt-4 p-0">
            <p>Contest Discription:</p>
        </div>
        <!-- input to contest desicription -->
        <div class="input-group ">
            <textarea class="form-control" rows="10"></textarea>
            <!-- <div class="absolute inset-y-0 right-0 pr-3 pt-2">icon</div> -->
        </div>


        <div class="row mt-4">
            <div class="col-4">
                <p>Contest date</p>
            </div>
            <div class="col-4">
                <p>Contest Time</p>
            </div>
            <div class="col-4   ">
                <div class="d-flex">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <p>privet</p>
                        <!-- <label class="form-check-label" for="flexRadioDefault1">
   privet
  </label> -->
                    </div>
                    <div class="form-check ms-4">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                            checked>
                        <p>public</p>
                        <!-- <label class="form-check-label" for="flexRadioDefault2">
    public
  </label> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-0">
            <div class="col-4">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="dd/mm/yy">
                    <!-- <div class="absolute inset-y-0 right-0 pr-3 pt-2">icon</div> -->
                </div>
            </div>
            <div class="col-4">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="6:15">
                    <!-- <div class="absolute inset-y-0 right-0 pr-3 pt-2">icon</div> -->
                </div>
            </div>
            <div class="col-4 ">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter password">
                    <!-- <div class="absolute inset-y-0 right-0 pr-3 pt-2">icon</div> -->
                </div>
            </div>
        </div>

        <table class="table  table-bordered mt-4">
            <thead>
                <tr>
                    <th scope="col">
                        <h6>
                            Problem list
                        </h6>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>

                        <router-link to="/problems" style="text-decoration: none; color: inherit;">
                            <p>
                                Matrix Similarity After Cyclic Shifts
                            </p>
                        </router-link>
                    </td>
                    <!-- <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td> -->
                </tr>
                <tr>
                    <td>

                        <router-link to="/problems" style="text-decoration: none; color: inherit;">
                            <p>
                                Count Beautiful Substring |
                            </p>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>

                        <router-link to="/contests" style="text-decoration: none; color: inherit;">
                            <p>
                                Make Lexicographically Smallest Array by Swapping Elements
                            </p>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>

                        <router-link to="/contests" style="text-decoration: none; color: inherit;">
                            <p> Count Beautiful Substring ||
                            </p>
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>
                            Make Lexicographically Smallest Array by Swapping Elements
                        </p>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">
                        <p>
                            + Add More
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="container mt-5 p-0">
            <p>you can add student to contest</p>
        </div>

        <table class="table  table-bordered mt-4">
            <thead>
                <tr>
                    <th scope="col">
                        <h6>
                            Student
                        </h6>
                    </th>
                    <th scope="col">
                        <!-- <h6>
                            Student
                        </h6> -->
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>

                    <td>mohamad</td>
                    <td> <router-link to="/students" style="text-decoration: none; color: inherit;">
                            <p> + Add
                            </p>
                        </router-link></td>

                </tr>
                <tr>
                    <td>mohamad</td>
                    <td>+ Add</td>
                </tr>
                <tr>
                    <td>mohamad</td>
                    <td>+ Add</td>
                </tr>
                <tr>
                    <td>mohamad</td>
                    <td>+ Add</td>
                </tr>
                <tr>
                    <td>mohamad</td>
                    <td>+ Add</td>
                </tr>
                <tr>
                    <td>mohamad</td>
                    <td>+ Add</td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        NavBar
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

.table th {
    background: var(--WhiteColor);
}

.table td {
    color: var(--GreenOpacity)
}

.table {
    border-radius: 5px;
}

.btn {
    background: var(--GreenColor);
}

.input-group .form-control {
    background: var(--WhiteColor);
    border: 1px solid var(--LightGreen);
    padding: 10px;
    margin-right: 20px;
}

.form-group .form-control ::placeholder {
    display: block;
    margin-bottom: 6px;
    /* color:#fff; */
    color: var(--LightGreen);
}
</style>
