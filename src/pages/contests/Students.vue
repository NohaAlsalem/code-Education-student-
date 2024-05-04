<template>
    <div>
        <TopBar></TopBar>
        <div class="screen">
           <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
            <table class="table  table-bordered mt-4">
            <thead>
                <tr>
                    <th style="width: 10%;">
                        <h6>
                            id
                        </h6>
                    </th>
                    <th >
                        <h6>
                            Name
                        </h6>
                    </th>
                    <th style="width: 10%;">
                        <h6>
                            Selected
                        </h6>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="max-width: 10%;">1nhdcgv35</td>
                    
                    <td >mohamad</td>
                    <td v-if="!chosed" style="width: 10%;" @click="chosed=true"  >
                        <font-awesome-icon :icon="['far', 'square-check']" />
                        <!-- <font-awesome-icon :icon="['fas', 'square-check']" /> -->
                        </td>
                        <td style="width: 10%;" @click="chosed=false" v-if="chosed" >
                         <font-awesome-icon :icon="['fas', 'square-check']" />
                        <!-- <font-awesome-icon :icon="['fas', 'square-check']" /> -->
                        </td>

                </tr>
                <tr>
                    <td>155</td>
                    
                    <td>mohamad</td>
                    <td> 
                        <p> check</p>
                        </td>

                </tr>
                <tr>
                    <td>155</td>
                    
                    <td>mohamad</td>
                    <td> 
                        <p> check</p>
                        </td>

                </tr>
                <tr>
                    <td>155</td>
                    
                    <td>mohamad</td>
                    <td> 
                        <p> check</p>
                        </td>

                </tr>
                <tr>
                    <td>155</td>
                    
                    <td>mohamad</td>
                    <td> 
                        <p> check</p>
                        </td>

                </tr>
                <tr>
                    <td>155</td>
                    
                    <td>mohamad</td>
                    <td> 
                        <p> check</p>
                        </td>

                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-4"></div>
        </div>
    </div>
</div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';

export default {
    components: {
        TopBar,
      
    },
    data() {
        return {
            chosed:false,
        
        }

    },
    methods: {
        

    }
}
</script>

<style scoped>

.screen {
    padding:40px 80px;
    background: var(--WhiteColor);
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* height: calc(100vh-72px); */
}
p {
    color: var(--GreenOpacity);
}

/* h6 {
    color: var(--GreenColor);
} */

.table th {
    background: var(--GreenColor);
}

.table td {
    color: var(--GreenOpacity)
}

.table {
    border-radius: 5px;
}

</style>