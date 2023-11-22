<template lang="">
    <div>
        <h1>Contact une nouvelle personne</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, ad!</p>
        <h2> la personne 
            {{
                id
            }} !!!!
        </h2>
    </div>
</template>
<script>
export default {
    name: "ContactPerson",
    props: {
        id: {
            type: String,
            required: true,
        },
    },
}
</script>
<style lang="">
    
</style>