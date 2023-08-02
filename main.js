const { createApp, ref, computed } = Vue

const app = createApp({
    setup() {
        const product = ref('Socks')
        const brand = ref('SE331')
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const productlink = ref('https://www.camt.cmu.ac.th')
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const inventory = ref(0)
        const onSale = ref(true)
        const onSalemessage = computed(() => {
            return brand.value + ' ' + product.value + ' is on sale';
        });

        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const selectedVariant = ref(0)
        function updateVariant(index) {
            selectedVariant.value = index
        }

        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)
        const premium = ref(true)
        function addToCart() {
            cart.value += 1
        }
        function updateImage(variantImage) {
            image.value = variantImage
        }
        function inStockstatus() {
            inStock.value = !inStock.value
        }
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        return {
            product,
            brand,
            title,
            image,
            details,
            updateVariant,
            productlink,
            inStock,
            inventory,
            onSale,
            onSalemessage,
            details,
            variants,
            sizes,
            cart,
            premium,
            addToCart,
            updateImage,
            inStockstatus
        }
    }
})

app.component('product-display', productDisplay)
app.mount('#app')