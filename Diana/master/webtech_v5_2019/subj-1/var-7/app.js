function applyDiscount(vehicles, discount){
    return new Promise((resolve,reject)=>{
        if(typeof discount !== 'number')
            reject(new Error("Invalid discount"));
        for(let elem of vehicles)
            if(typeof elem.make!== 'string' || typeof elem.price!== 'number')
                 reject(new Error("Invalid array format"));
        let minPrice=Math.min.apply(Math,vehicles.map(x=>x.price));
        let marjaDiscount=0.5*minPrice;
        if(discount>marjaDiscount)
            reject("Discount too big");
        resolve( vehicles.map((x) => { return {
            make:x.make,
            price:x.price-discount
        }}))
    })
}

const app = {
    applyDiscount: applyDiscount
};

module.exports = app;