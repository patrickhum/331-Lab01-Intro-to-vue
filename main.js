const { createApp, ref} = Vue 

createApp({
    setup(){
        const product = ref('Socks')
        const image = ref('./assets/images/socks_green.jpg')
        const productlink = ref('https://www.camt.cmu.ac.th')
        const inStock = ref(false)
        const inventory = ref(5)
        const onSale = ref(false)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color:'green'},
            { id: 2235, color:'blue'}
        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        return {
            product,
            image,
            productlink,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes
        }
    }
}) .mount('#app')