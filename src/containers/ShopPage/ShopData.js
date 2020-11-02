const prefix = 'https://firebasestorage.googleapis.com/v0/b/viecommerce.appspot.com/o'
const params = '?alt=media'
const SHOP_DATA = [
    {
        title : 'shoes',
        items : [
            {
                id: 1,
                seller: 'Nike',
                name: 'Air Jordan 1 Mid SE',
                imageUrl: `${prefix}/Nike%2FAir-Jordan-1-Mid-SE.jpg${params}`,
                price: 250,
                condition: 'new',
                size: '9'
            },
            {
                id: 2,
                seller: 'Nike',
                name: 'Kybrid S2 "Best Of"',
                imageUrl: `${prefix}/Nike%2FKybrid-S2-"Best-Of".jpg${params}`,
                price: 180,
                condition: 'new',
                size: '10'
            },
            {
                id: 3,
                seller: 'Nike',
                name: 'Lebron 18',
                imageUrl: `${prefix}/Nike%2FLebron-18.jpg${params}`,
                price: 350,
                condition: 'new',
                size: '12'
            },
            {
                id: 4,
                seller: 'Nike',
                name: 'Air Force 1 Pixel',
                imageUrl: `${prefix}/Nike%2FNike-Air-Force-1-Pixel.jpg${params}`,
                price: 125,
                condition: 'old',
                size: '8'
            },
            {
                id: 5,
                seller: 'Nike',
                name: 'Pegasus 37 FlyEase',
                imageUrl: `${prefix}/Nike%2FNike-Air-Zoom-Pegasus-37-FlyEase.jpg${params}`,
                price: 148,
                condition: 'new',
                size: '9'
            },
            {
                id: 6,
                seller: 'Nike',
                name: 'Pegasus 37',
                imageUrl: `${prefix}/Nike%2FNike-Air-Zoom-Pegasus-37.jpg${params}`,
                price: 148,
                condition: 'new',
                size: '11'
            },
            {
                id: 7,
                seller: 'Nike',
                name: 'Blazer Mid 77',
                imageUrl: `${prefix}/Nike%2FNike-Blazer-Mid-'77.jpg${params}`,
                price: 160,
                condition: 'old',
                size: '7'
            },
            {
                id: 8,
                seller: 'Nike',
                name: 'ZoomX Vaporfly Next%',
                imageUrl: `${prefix}/Nike%2FNike-ZoomX-Vaporfly-Next%25.jpg${params}`,
                price: 160,
                condition: 'old',
                size: '12'
            },
            {
                id: 9,
                seller: 'Adidas',
                name: 'Ultraboost LTD Red',
                imageUrl: `${prefix}/Adidas%2Fultraboost-ltd-shoes-red.jpg${params}`,
                price: 196,
                condition: 'new',
                size: '9'
            },
            {
                id: 10,
                seller: 'Adidas',
                name: 'Ultraboost LTD',
                imageUrl: `${prefix}/Adidas%2Fultraboost-ltd-shoes.jpg${params}`,
                price: 220,
                condition: 'old',
                size: '10'
            },
            {
                id: 11,
                seller: 'Adidas',
                name: 'Ultraboose OG',
                imageUrl: `${prefix}/Adidas%2Fultraboost-og-shoes.jpg${params}`,
                price: 280,
                condition: 'new',
                size: '10'
            },
            {
                id: 12,
                seller: 'Adidas',
                name: 'ZX 2K Boost Black',
                imageUrl: `${prefix}/Adidas%2Fzx-2k-boost-shoes-black.jpg${params}`,
                price: 110,
                condition: 'old',
                size: '7'
            },
            {
                id: 13,
                seller: 'Adidas',
                name: 'ZX 2K Boost',
                imageUrl: `${prefix}/Adidas%2Fzx-2k-boost-shoes.jpg${params}`,
                price: 160,
                condition: 'old',
                size: '6'
            },
            {
                id: 14,
                seller: 'Adidas',
                name: 'Ultraboost 20 White',
                imageUrl: `${prefix}/Adidas%2Fultraboost-20-shoes-white.jpg${params}`,
                price: 230,
                condition: 'new',
                size: '11'
            },
            {
                id: 15,
                seller: 'Adidas',
                name: 'Ultraboost 20',
                imageUrl: `${prefix}/Adidas%2Fultraboost-20-shoes.jpg${params}`,
                price: 230,
                condition: 'old',
                size: '12'
            },
            {
                id: 16,
                seller: 'Adidas',
                name: 'Forum Low',
                imageUrl: `${prefix}/Adidas%2Fforum-low-shoes.jpg${params}`,
                price: 190,
                condition: 'old',
                size: '11'
            },
        ]
    }
];
  
export default SHOP_DATA;