<template >
    <div>
        <div class="tab" v-for="(tab, index) in tabs" :key="index"
            :class="{ active: tab.selected === true, inactive: tab.selected === false }" @click="isSelected(tab.title)">
            <h2> {{ tab.title }}</h2>
            <p v-if="tab.selected"> - {{ tab.content }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabs: [
                { title: "Amour", selected: false, content: "Je t'aime" },
                { title: "Haine", selected: false, content: "Je te hais" },
                { title: "Joie", selected: false, content: "Je suis heureux" },
            ],
            selectedTab: null,
        }
    },
    methods: {
        isSelected(tabTitle) {
            this.tabs.forEach((tab) => {
                if (tab.title === tabTitle) {
                    tab.selected = true;
                } else {
                    tab.selected = false;
                }
            });

        }

    },
}
</script>
<style >
.active {
    background: red;
    padding: 30px;
    height: 200px;
}

.inactive {
    background: blue;
    padding: 30px;
    height: 200px;
}
</style>