<template>
    <div>
        <p v-if="finalUser">{{ finalUser.firstname }}</p>
        <form @submit.prevent="sendForm">
            <label for="firstname">Prénom</label>
            <input type="text" placeholder="firstname" id="firstname" v-model="user.firstname" />
            <label for="lastname">Nom</label>
            <input type="text" placeholder="lastname" id="lastname" v-model="user.lastname" />
            <label for="age">Age</label>
            <input type="number" v-model.number="user.age" aria-label="age" />
            <button>Envoyer</button>
            <ul>
                <li v-for="(error, index) in errors" :key="index">
                    Erreur en cours :{{ error }}
                </li>
            </ul>
        </form>
        <p v-if="isUserComplete">{{ userDetails }}</p>
        <p v-else>Remplissez le formulaire</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                firstname: '',
                lastname: '',
                age: null,
            },
            errors: [],
        }
    },
    computed: {
        userDetails() {
            return this.finalUser ? `${this.finalUser.firstname} ${this.finalUser.lastname} a ${this.finalUser.age} ans.` : '';
        },
        isUserComplete() {
            return this.finalUser && this.finalUser.firstname && this.finalUser.lastname && this.finalUser.age;
        },
    },
    methods: {
        sendForm(finalUser) {
            if (this.user.firstname && this.user.lastname && this.user.age) {
                this.errors = [];
                finalUser = {
                    ...this.user,
                };
                this.$emit('submit-user', finalUser);
                this.user = {
                    firstname: '',
                    lastname: '',
                    age: null,
                };
                return finalUser;
            } else {
                this.errors = [];
                if (!this.user.firstname) this.errors.push('Veuillez renseigner un prénom');
                if (!this.user.lastname) this.errors.push('Veuillez renseigner un nom');
                if (!this.user.age) this.errors.push('Veuillez renseigner un age');
            }

        },
    },
    props: {
        finalUser: {
            type: Object,
            required: false,
        },
    },
}
</script>
<style>
form {
    margin: 100px 0;
}

form ul {
    list-style: none;
    color: red;
}
</style>