export const PRODUCT_CATEGORIES =[
    {
        label:'UI kits',
        value: 'ui_kits' as const,
        featured: [
            {
                name:'Editor picks',
                href: '#',
                imagesrc: '/nav/ui-kits/mixed.jpg',

            },
            {
                name:'New Arrivals',
                href: '#',
                imagesrc: '/nav/ui-kits/blue.jpg',

            },
            {
                name:'Bestsellers',
                href: '#',
                imagesrc: '/nav/ui-kits/purple.jpg',

            },
        ],
    },
    {
        label:'Icons',
        value: 'icons' as const,
        featured: [
            {
                name:'Favourite icon picks',
                href: '#',
                imagesrc: '/nav/icons/picks.jpg',

            },
            {
                name:'New Arrivals',
                href: '#',
                imagesrc: '/nav/icons/new.jpg',

            },
            {
                name:'Bestsellers',
                href: '#',
                imagesrc: '/nav/icons/bestsellers.jpg',

            },
        ],
    },
]