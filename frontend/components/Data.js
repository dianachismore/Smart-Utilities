const categories = [
    {
        id: 1,
        img: require('../assets/key.png'),
        heading: 'Rent',
        navigate: 'payrent'
    },
    {
        id: 2,
        img: require('../assets/home.png'),
        heading: 'Utilities',
        navigate: 'payutilities'
    }
];

const transactions = [
    {
        id: 1,
        heading: 'Rent',
        price: '2000 lei',
        img: require('../assets/home.png'),
    },
    {
        id: 2,
        heading: 'Utilities',
        price: '340 lei',
        img: require('../assets/key.png'),
    },
    {
        id: 3,
        heading: 'Utilities',
        price: '360 lei',
        img: require('../assets/key.png'),
    },
    {
        id: 4,
        heading: 'Rent',
        price: '2000 lei',
        img: require('../assets/home.png'),
    },
    {
        id: 5,
        heading: 'Utilities',
        price: '320 lei',
        img: require('../assets/key.png'),
    },
    {
        id: 6,
        heading: 'Utilities',
        price: '325 lei',
        img: require('../assets/key.png'),
    }
];

const transfer = [
    {
        id: 1,
        heading: 'You send',
        price: 'R 149 000',
        isSending: true,
    },
    {
        id: 2,
        heading: 'They receive',
        price: '$ 9 197,53',
        isSending: false,
    }
];


export {categories, transactions, transfer}