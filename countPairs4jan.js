let nums = [-1,1,2,3,1,-2], target = 2
// # Output: 3

function countP(nums,target){
	let count = 0	
	for(let ix=0;ix<nums.length;ix++){
	
	console.log(nums[ix])
	let ele =nums[ix]
	if(!(ix+1)){
		return false
	}

	for(jx=ix+1;jx<nums.length ;jx++){
		
		console.log("nums",count,nums[jx],ele+nums[jx] < target)
		if(ele+nums[jx] < target){
			count++
			}
		
	}
	console.log("nums","count",count)
	}
}

countP(nums,target)
