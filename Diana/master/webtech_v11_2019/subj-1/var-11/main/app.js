function getAverageGrade(gradeItems){
	if(gradeItems.length===0)
	    return 0;
	let nr=0;
	let sum=0;
	for(let student of gradeItems)
	    {
	        if(typeof student.grade === 'number' && student.grade<0)
	            throw new Error('Grade should be a positive number')
	        if(typeof student.grade === 'undefined')
	            throw new Error('Invalid grade')
	        if(typeof student.grade !== 'number' && student.grade!=='A')
	            throw new Error('Invalid grade');
	       else if(typeof student.grade==='number')
	       {
	           sum+=student.grade;
	           nr++;
	       }
	            
	    }
	    
	    return sum/nr;
	
}

const app = {
    getAverageGrade: getAverageGrade
}

module.exports = app