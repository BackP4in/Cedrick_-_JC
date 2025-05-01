const products = [
    {
        id: 1,
        name: "Kutsinta (Bilao Size 10, 10pcs)",
        price: 180.00,
        image: "prod_img/2 (Kutsinta Bilao).png" 
    },
    {
        id: 12,
        name: "Kutsinta (Bilao Size 12, 40pcs)",
        price: 235.00,
        image: "prod_img/2 (Kutsinta Bilao).png" 
    },
    {
        id: 13,
        name: "Kutsinta (Bilao Size 12, 50pcs)",
        price: 285.00,
        image: "prod_img/2 (Kutsinta Bilao).png" 
    },
    {
        id: 14,
        name: "Kutsinta (Bilao Size 12, 60pcs)",
        price: 335.00,
        image: "prod_img/2 (Kutsinta Bilao).png" 
    },
    {
        id: 15,
        name: "Kutsinta (Bilao Size 14, 70pcs)",
        price: 395.00,
        image: "prod_img/2 (Kutsinta Bilao).png" 
    },
    {
        id: 16,
        name: "Kutsinta (Bilao Size 14, 80pcs)",
        price: 445.00,
        image: "prod_img/2 (Kutsinta Bilao).png" 
    },
    {
        id: 17,
        name: "Kutsinta (Bilao Size 15, 90pcs)",
        price: 500.00,
        image: "prod_img/2 (Kutsinta Bilao).png" 
    },
    {
        id: 18,
        name: "Kutsinta (Bilao Size 15, 100pcs)",
        price: 550.00,
        image: "prod_img/2 (Kutsinta Bilao).png" 
    },
    {
        id: 19,
        name: "Kutsinta (Bilao Size 16, 120pcs)",
        price: 660.00,
        image: "prod_img/2 (Kutsinta Bilao).png" 
    },
    {
        id: 20,
        name: "Kutsinta (Bilao Size 16, 150pcs)",
        price: 810.00,
        image: "prod_img/2 (Kutsinta Bilao).png" 
    },
    {
        id: 2,
        name: "Puto (Bilao Size 10, 10pcs)",
        price: 180.00,
        image: "prod_img/1 (Puto Bilao).png" 
    },
    {
        id: 22,
        name: "Puto (Bilao Size 12, 40pcs)",
        price: 235.00,
        image: "prod_img/1 (Puto Bilao).png" 
    },
    {
        id: 23,
        name: "Puto (Bilao Size 12, 50pcs)",
        price: 285.00,
        image: "prod_img/1 (Puto Bilao).png" 
    },
    {
        id: 24,
        name: "Puto (Bilao Size 12, 60pcs)",
        price: 335.00,
        image: "prod_img/1 (Puto Bilao).png" 
    },
    {
        id: 25,
        name: "Puto (Bilao Size 14, 70pcs)",
        price: 395.00,
        image: "prod_img/1 (Puto Bilao).png" 
    },
    {
        id: 26,
        name: "Puto (Bilao Size 14, 80pcs)",
        price: 445.00,
        image: "prod_img/1 (Puto Bilao).png" 
    },
    {
        id: 27,
        name: "Puto (Bilao Size 15, 90pcs)",
        price: 500.00,
        image: "prod_img/1 (Puto Bilao).png" 
    },
    {
        id: 28,
        name: "Puto (Bilao Size 15, 100pcs)",
        price: 550.00,
        image: "prod_img/1 (Puto Bilao).png" 
    },
    {
        id: 29,
        name: "Puto (Bilao Size 16, 120pcs)",
        price: 660.00,
        image: "prod_img/1 (Puto Bilao).png" 
    },
    {
        id: 30,
        name: "Puto (Bilao Size 16, 150pcs)",
        price: 810.00,
        image: "prod_img/1 (Puto Bilao).png" 
    },
    {
        id: 3,
        name: "Puto and Kutsinta (Bilao Size 10, 10pcs)",
        price: 750.00,
        image: "prod_img/mix.png" 
    },
    {
        id: 32,
        name: "Puto and Kutsinta (Bilao Size 12, 40pcs)",
        price: 235.00,
        image: "prod_img/mix.png" 
    },
    {
        id: 33,
        name: "Puto and Kutsinta (Bilao Size 12, 50pcs)",
        price: 285.00,
        image: "prod_img/mix.png" 
    },
    {
        id: 34,
        name: "Puto and Kutsinta (Bilao Size, 60pcs)",
        price: 335.00,
        image: "prod_img/mix.png" 
    },
    {
        id: 35,
        name: "Puto and Kutsinta (Bilao Size 14, 70pcs)",
        price: 395.00,
        image: "prod_img/mix.png" 
    },
    {
        id: 36,
        name: "Puto and Kutsinta (Bilao Size 14, 80pcs)",
        price: 445.00,
        image: "prod_img/mix.png" 
    },
    {
        id: 37,
        name: "Puto and Kutsinta (Bilao Size 15, 90pcs)",
        price: 500.00,
        image: "prod_img/mix.png" 
    },
    {
        id: 38,
        name: "Puto and Kutsinta (Bilao Size 15, 100pcs)",
        price: 550.00,
        image: "prod_img/mix.png" 
    },
    {
        id: 39,
        name: "Puto and Kutsinta (Bilao Size 16, 120pcs)",
        price: 660.00,
        image: "prod_img/mix.png" 
    },
    {
        id: 40,
        name: "Puto and Kutsinta (Bilao Size 16, 150pcs)",
        price: 810.00,
        image: "prod_img/mix.png" 
    },
    {
        id: 4,
        name: "Kutsintang Malagkit (Bilao Size 18)",
        price: 750.00,
        image: "prod_img/3.png" 
    },
    {
        id: 5,
        name: "Sapin-Sapin (Bilao Size 18)",
        price: 750.00,
        image: "prod_img/4 (Sapin-Sapin Bilao).png" 
    },
    {
        id: 6,
        name: "Maja (Bilao Size 18)",
        price: 650.00,
        image: "prod_img/6 (Maja Bilao).png" 
    },
    {
        id: 7,
        name: "Biko (Bilao Size 18)",
        price: 650.00,
        image: "prod_img/7 (Biko Bilao).png" 
    },
    {
        id: 8,
        name: "Puto Flan (Clam Shell Size 8)",
        price: 300.00,
        image: "prod_img/2.png" 
    },
    {
        id: 9,
        name: "Cassava (Tub)",
        price: 50.00,
        image: "prod_img/11 (Cassava Tub).png" 
    },
    {
        id: 10,
        name: "Maja (Tub)",
        price: 30.00,
        image: "prod_img/13 (Maja Tub).png" 
    },
    // {
    //     id: 19,
    //     name: "Pitchi-Pitchi (piece)",
    //     price: 5.00,
    //     image: "https://via.placeholder.com/150" 
    // },

];

export default products;
