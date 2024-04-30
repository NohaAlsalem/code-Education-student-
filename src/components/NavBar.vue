<template>
    <div>
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid">
                <!-- <a class="navbar-brand" href="#">Navbar</a> -->
                <div>
                    <img src="@/assets/images/logo.jpg" alt="Logo" width="40" height="40"
                        class="d-inline-block align-text-top ps-0 ms-0">
                        <codeEdu></codeEdu>
                </div>


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2  mb-lg-0">

                        <router-link to="/problems" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3" aria-current="page" :class="{active:$route.path==='/problems'}">Problems</h5>
                                <!-- <a class="nav-link active" aria-current="page" href="#">Problems</a> -->
                            </li>
                        </router-link>


                        <router-link to="/contests" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3" :class="{active:$route.path==='/contests'}">Contests</h5>
                                <!-- <a class="nav-link" href="#">Contests</a> -->
                            </li>
                        </router-link>

                        <router-link to="/classes" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3" :class="{active:$route.path==='/classes'}">Classes</h5>
                                <!-- <a class="nav-link" href="#">classes</a> -->
                            </li>
                        </router-link>

                        <router-link to="/exams" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3" :class="{active:$route.path==='/exams'}">Exams</h5>
                                <!-- <a class="nav-link" href="#">Exams</a> -->
                            </li>
                        </router-link>


                    </ul>
                    <router-link to="/profile" style="text-decoration: none; color: inherit;">
            <font-awesome-icon icon="fa-solid fa-user" class="i"/>
        </router-link>
                    <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
import codeEdu from '@/components/codeEdu.vue';
export default {
    components: {
        codeEdu
    }
}

</script>

<style >
:root {
    --WhiteColor: #FAF3DD;
    --darkwhite: #C8D5B9;
    --LightGreen: #8FC0A9;
    --GreenOpacity: #68B0AB;
    --GreenColor: #4A7C59;
}
.i{
 
 color: var(--GreenColor);
}
.navbar {
    /* background-color: var(--WhiteColor); */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

}

.nav-link {
    color: var(--GreenColor);
    font-size: 1.25rem;

    /* padding: 1rem; */
    margin-bottom: 2;
}

.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
    color: #8FC0A9;
}

.navbar .profile {
    border-left: 1px solid var(--GreenColor);
}

.navbar .profile .svg {
    color: var(--GreenColor);
}

.navbar .navbar-toggler {
    color: white;
    font-size: 25px;
    border-color: white;
}

.navbar .navbar-toggler:focus,
.navbar .navbar-toggler:hover {
    color: var(--LightGreen);
    box-shadow: none;
}

.navbar .navbar-toggler[aria-expanded="true"] {
    border-color: var(--GreenColor);
}
</style>