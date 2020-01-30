function applyBlackFriday(products, discount){
    return new Promise((resolve,reject)=>{
        if(typeof discount !== 'number')
            reject(new Error("Invalid discount"));
        if(discount<0 || discount>10)
            reject(new Error("Discount not applicable"));
        for(let product of products)
            if(typeof product.name !== 'string' || typeof product.price !== 'number')
                reject(new Error("Invalid array format"));
        
        resolve(products.map((item)=>{
            return {
                name:item.name,
                price: item.price-item.price*discount/100
            }
        }))
    })
}

const app = {
    applyBlackFriday: applyBlackFriday
};
module.exports = app;