const { createApp, ref} = Vue 

createApp({
    setup(){
        const product = ref('Socks')
        const image = ref('./assets/images/socks_green.jpg')
        const productlink = ref('https://www.camt.cmu.ac.th')
        return {
            product,
            image,
            productlink
        }
    }
}) .mount('#app')