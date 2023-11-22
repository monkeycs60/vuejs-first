<template>
    <div>
        <h1>
            This is the contact page
        </h1>
        <h2>
            hello mister <span v-if="id">{{ id }} + sam</span>
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam cum quas maiores ab, perferendis neque
            eos a soluta natus.
        </p>
        <h2>
            <router-link :to="{ name: 'details' }">Details</router-link>
        </h2>
    </div>
</template>
<script>
export default {
    name: "contactPage",
    props: {
        id: {
            type: String,
            required: false,
        },
    },
}
</script>
<style></style>