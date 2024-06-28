const state={
    products:[1,2,3,4,5,6,7,8,9,10,11,12],
    stockDetails:[
        {
            itemNumber:1,
            itemName:"Beef Burger",
            itemPrice:800,
            itemImage:'../images/burger.jpg'
        },
        {
            itemNumber:2,
            itemName:"Chicken Sandwich",
            itemPrice:750,
            itemImage:'../images/chickensandwich.jpg'
        },
        {
            itemNumber:3,
            itemName:"Meatballs",
            itemPrice:700,
            itemImage:'../images/meatballs.jpg'
        },
        {
            itemNumber:4,
            itemName:"Mshikaki",
            itemPrice:850,
            itemImage:'../images/mshikaki.jpg'
        },
        {
            itemNumber:5,
            itemName:"Pasta",
            itemPrice:900,
            itemImage:'../images/Pasta.jpg'
        },
        {
            itemNumber:6,
            itemName:"Steak",
            itemPrice:950,
            itemImage:'../images/steak.jpg'
        },
        {
            itemNumber:7,
            itemName:"Tacos",
            itemPrice:900,
            itemImage:'../images/Tacos.jpg'
        },
        {
            itemNumber:8,
            itemName:"Pizza",
            itemPrice:1200,
            itemImage:'../images/chad-montano-MqT0asuoIcU-unsplash.jpg'
        },
        {
            itemNumber:9,
            itemName:"Blueberry Pancakes ",
            itemPrice:1000,
            itemImage:'../images/blueberrypancakes.jpg'
        },
        {
            itemNumber:10,
            itemName:"Cinamon Rolls",
            itemPrice:550,
            itemImage:'../images/cinamonrolls.jpg'
        },
        {
            itemNumber:11,
            itemName:"Lemonade",
            itemPrice:400,
            itemImage:'../images/lemonade.jpg'
        },
        {
            itemNumber:12,
            itemName:"Cocktails",
            itemPrice:500,
            itemImage:'../images/cocktails.jpg'
        }
    ]
}
const getters={
    stock:(state)=>state.stockDetails,
}
const actions={

}
const mutations={

}
export default{
    state,
    getters,
    actions,
    mutations
}