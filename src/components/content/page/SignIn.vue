<template>
    <div>
        <br><br><br><br>
        <b-container class="bv-example-row">
            <b-row>
                <b-col></b-col>
                <b-col>
                    <b-alert show variant="danger" v-if="errorMessage">{{errorMessage}}</b-alert>
                    <div>
                        <b-form v-on:submit.prevent="SignIn">
                            <b-form-group id="exampleInputGroup1" label="Почта ЕАЕ:" label-for="exampleInput1">
                                <b-form-input id="exampleInput1" type="email" v-model="user.email" required placeholder="@eaeconsult.ru">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group id="exampleInputGroup2" label="Пароль:" label-for="exampleInput2" description="Пароль не совпадает с текущим в домене ensi-group, а выдается администратором">
                                <b-form-input id="exampleInput2" type="password" v-model="user.password" required>
                                </b-form-input>
                            </b-form-group>
                            <b-button type="submit" variant="primary">Войти</b-button>
                            <br>
                            
                            
                        </b-form>
                    </div>
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import {
        mapGetters,
        mapMutations
    } from "vuex";
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                errorMessage: ""
            }
        },
        methods: {
            SignIn() {
                firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
                    .then(response => {
                        this.$store.commit('isSignInSet');
                        this.$store.commit('userLoginSettSet', {
                            userLoginSettthisNew: {
                                email: response.user.email,
                                uid: response.user.uid
                            }
                        });
                    })
                    .catch(error => {
                        this.errorMessage = error.message;
                        console.log(error);
                    })
            },
        }
    }
</script>

<style scoped>

</style>