    findTriplets(arr, n)
    {
        let count = false;
        for(let i =0; i<n; i++) {
            for(let j=1+1; j<n; j++) {
                for(let k=j+1; k<n; k++){
                    // console.log("arr[]i, j, k====>", arr[i], arr[j], arr[k])
                    let sum = arr[i] + arr[j] + arr[k];
                    // console.log("sum===>", sum)
                    if(sum === 0) {
                       count = true;
                       return 1
                    }
                }
            }
        }
        // console.log("count=====>", count)
        if(!count) {
            console.log("No triplet with zero sum exists.")
            return 0;
        }
    }