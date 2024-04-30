<template>

    <div>
        <NavBar></NavBar>
        <div class="screen">
            <div class="sub_screen overflow-auto">
                <itemContest  data-bs-toggle="modal" data-bs-target="#cardModal"></itemContest>
                <itemContest data-bs-toggle="modal" data-bs-target="#cardModal"></itemContest>
                <itemContest data-bs-toggle="modal" data-bs-target="#cardModal"></itemContest>
                <itemContest data-bs-toggle="modal" data-bs-target="#cardModal"></itemContest>
                <itemContest  data-bs-toggle="modal" data-bs-target="#cardModal"></itemContest>
                <itemContest data-bs-toggle="modal" data-bs-target="#cardModal"></itemContest>
                <itemContest data-bs-toggle="modal" data-bs-target="#cardModal"></itemContest>
                <itemContest data-bs-toggle="modal" data-bs-target="#cardModal"></itemContest>

            </div>
            <myDialog></myDialog>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import itemContest from '@/components/itemContest.vue';
import myDialog from '@/components/myDialog.vue';
export default {
    components: {
        NavBar,
        itemContest,
        myDialog
    }
}
</script>

<style scoped>
.screen {
    padding: 40px 80px;
    background: var(--WhiteColor);
    height: 100vh;
    /* height: calc(100vh-72px); */
}

.sub_screen {
    height: 100%;
    border: 1px solid var(--GreenColor);
    border-radius: 5px;
    background: white;
    padding: 20px;
}
/* .overflow {
      property: overflow,
      values: auto hidden visible scroll,
} */
</style>