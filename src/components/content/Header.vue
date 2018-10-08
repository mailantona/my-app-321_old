<template>
<b-navbar toggleable="md" class="bg-white border-bottom shadow-sm">
    <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item :to="{ name: 'mainpage' }" exact active-class="active">Главная</b-nav-item>
                <b-nav-item :to="{ name: 'TaskRRM' }" exact active-class="active">Задачи</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-text>{{this.$store.getters.userLoginSett.email}}</b-nav-text>
                <!-- <b-nav-item :to="{ name: 'SignIn' }" exact active-class="active">Выход</b-nav-item> -->
            </b-navbar-nav>
        </b-collapse>
    </b-container>
</b-navbar>
</template>

<script>
import {
    mapGetters
} from "vuex";
export default {};
</script>

<style>

</style>
