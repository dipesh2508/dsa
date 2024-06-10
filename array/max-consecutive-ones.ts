function findMaxConsecutiveOnes(nums: number[]): number {
    let temp=0, max=0;

    for(let i:number =0; i<nums.length; i++){
        if(nums[i]===1){
            temp++;
        }else {
            temp=0;
        }
        max=Math.max(temp, max)
    }

    return max;
};