const products = [
    {
        "name": "Combo Ala Jabón Liquido para Diluir 500ml x4 + Vivere Violetas y Flores Blancas 3lt x4",
        "category": "jabon-ropa",
        "id": "1",
        "marca": "Ala",
        "stock": 10,
        "images": "https://clubdebeneficios.com/media/catalog/product/2/8/28.png",
        "price": 1000
    },
    {
        "name": "Combo Ala Jabón Liquido para Diluir 500ml x4 + Vivere Clasico 3lt x4",
        "category": "jabon-ropa",
        "id": "2",
        "marca": "Ala",
        "stock": 5,
        "images": "https://clubdebeneficios.com/media/catalog/product/2/6/26.png",
        "price": 2000
    },
    {
        "name": "Combo Skip para diluir + detergente Cif",
        "category": "jabon-ropa",
        "id": "3",
        "marca": "Skip",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/s/k/skip_cif.png",
        "price": 1100
    },
    {
        "name": "Combo Colección Skip",
        "category": "combos",
        "id": "4",
        "marca": "Skip",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/s/k/skip_collec.png",
        "price": 6768
    },
    {
        "name": "Combo Dove Regeneración Extrema + Dove Original + Protección Total",
        "category": "combos",
        "id": "5",
        "marca": "Dove",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/c/o/combo_familiar_mixto-01_3_.jpg",
        "price": 6878
    },
    {
        "name": "Combo Coony Cuidado Facial",
        "category": "combos",
        "id": "6",
        "marca": "Coony",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/c/o/combo_coony_acne_1_.jpg",
        "price": 21615
    },
    {
        "name": "Caja Navideña Premium x16 Unidades",
        "category": "almacen",
        "id": "7",
        "marca": "Georgalos",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/h/e/hero_caja_premium.png",
        "price": 19460
    },
    {
        "name": "Combo Perfecto para Milanesas",
        "category": "almacen",
        "id": "8",
        "marca": "HELLMANNS",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/c/o/combo_milanesass.png",
        "price": 2176
    },
    {
        "name": "Gallo Risotto Pronto 4 Quesos 240gr",
        "category": "almacen",
        "id": "9",
        "marca": "GALLO",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/7/7/7790070431721.jpg",
        "price": 6667
    },
    {
        "name": "Cerveza Edición 150 Años Heineken 473ml",
        "category": "bebidas",
        "id": "10",
        "marca": "Heineken",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/4/7/473baja.png",
        "price": 11406
    },
    {
        "name": "Limpiador Cif Líquido para Pisos Lavanda Bidón 5 lt",
        "category": "limpieza",
        "id": "11",
        "marca": "CIF",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/7/7/7791290788541.jpeg",
        "price": 2536
    },
    {
        "name": "Combo Cif Mega Recarga",
        "category": "limpieza",
        "id": "12",
        "marca": "CIF",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/9/1/918_combo_mega_recarga_cif.png",
        "price": 1798
    },
    {
        "name": "Combo cuidado del pelo Dove poder de las plantas Bambú",
        "category": "perfumeria",
        "id": "13",
        "marca": "Dove",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/s/h/shampo_ac_amazonia_1_2x-100_2_.jpg",
        "price": 2453
    },
    {
        "name": "Combo Shampoo + Acondicionador Sedal Carbon y Peonias 650 ml",
        "category": "perfumeria",
        "id": "14",
        "marca": "SEDAL",
        "stock": 15,
        "images": "https://clubdebeneficios.com/media/catalog/product/0/2/02_3_1_.png",
        "price": 2455
    }
]

// Simulamos una llamada a una API con una promesa que se resuelve en 500ms y nos devuelve el array de productos definido arriba
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

// devuelve el array de productos filtrado por id
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 500)
    })
}

// devuelve el array de productos filtrado por categoría
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === category))
        }, 500)
    })
}

// devuelve el array de productos filtrado por marca
export const getProductsByBrand = (brand) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.marca === brand))
        }, 500)
    })
}

// devuelve el array de productos filtrado por nombre
export const getProductsByName = (name) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.name.toLowerCase().includes(name.toLowerCase())))
        }, 500)
    })
}