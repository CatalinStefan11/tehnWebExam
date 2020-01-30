function applyBonus(employees, bonus){
    return new Promise((resolve,reject) => {
       
       setTimeout(() => {
        
        if(!(typeof bonus === 'number'))
        {
            console.log(typeof bonus)
            var bonusError = new Error('Invalid bonus')
            reject(bonusError);
            return;
        }
        else { for(let i = 0; i < employees.length; i++){
            if(!(typeof employees.name === 'string'))
            {
                reject(Error('Invalid array format'))
            }
            if(!(typeof employees.salary === 'number'))
            {
                reject(Error('Invalid array format'))
            }
        }

        }
    }, 5000);
    })
}

let app = {
    applyBonus: applyBonus,
}

module.exports = app;