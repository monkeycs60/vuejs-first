<template>
    <div>
        <form>
            <label for="firstname">Prénom</label>
            <input type="text" placeholder="firstname" id="firstname" v-model="user.firstname" />
            <label for="lastname">Nom</label>
            <input type="text" placeholder="lastname" id="lastname" v-model="user.lastname" />
            <label for="age">Age</label>
            <input type="number" v-model.number="user.age" aria-label="age" />
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
        }
    },
    computed: {
        userDetails() {
            return `${this.user.firstname} ${this.user.lastname} a ${this.user.age} ans.`;
        },
        isUserComplete() {
            return this.user.firstname && this.user.lastname && this.user.age;
        },
    },
    methods: {
        onSubmit() {
            let finalUser = {
                ...this.user,
                id: Date.now(),
            };
            this.$emit('submit-user', finalUser);
        }

    }
}
</script>
<style>
form {
    margin: 100px 0;
}
</style>