const { createApp, ref} = Vue 

createApp({
    setup(){
        const product = ref('Socks')
        const image = ref('./assets/images/socks_green.jpg')
        const productlink = ref('https://www.camt.cmu.ac.th')
        const inStock = ref(false)
        const inventory = ref(5)
        const onSale = ref(false)
        return {
            product,
            image,
            productlink,
            inStock,
            inventory,
            onSale
        }
    }
}) .mount('#app')