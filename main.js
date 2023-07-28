const { createApp, ref} = Vue 

createApp({
    setup(){
        const product = ref('Socks')
        const description = ref('for your feet')
        return {
            product,
            description
        }
    }
}) .mount('#app')