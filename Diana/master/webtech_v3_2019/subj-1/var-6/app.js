function applyBonus(employees, bonus){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof bonus!=='number')
                reject(new Error("Invalid bonus"));
            for(let elem of employees)
                {
                    if(typeof elem.name !== 'string' || typeof elem.salary !=='number')
                        reject(new Error("Invalid array format"));
                }
            let maxSalary=Math.max.apply(Math, employees.map(x=>x.salary));
            let bonus10=0.1*maxSalary;
                if(bonus<bonus10)
                    reject("Bonus too small")
            
            let newEmployees=employees.map((x) => { return {
                name: x.name,
                salary:x.salary+bonus
            };});
            
            resolve(newEmployees);
               
        })
    })
}

let app = {
    applyBonus: applyBonus,
}

module.exports = app;