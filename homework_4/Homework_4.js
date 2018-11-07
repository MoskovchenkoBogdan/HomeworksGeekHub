var arr = [2,1,5,0,3,4,7,2,3,7,2,5,3], count = 0;
var max = function (arr) {
    let m = -Infinity;
    for (let i=0 ; i < arr.length; i++) {
        if (arr[i] > m) {
            m = arr[i];
        }
    }
    return m;
};
var maxMount = max(arr);
if (arr.indexOf(maxMount)!== arr.lastIndexOf(maxMount)){
    for (let i=arr.indexOf(maxMount)+1;i<arr.lastIndexOf(maxMount);i++){
        count = count + maxMount - arr[i];
    };

};
for (let i=0;i<arr.indexOf(maxMount);i++){
    if(arr[i]>arr[i+1]){
      for(let j=i+1;j<arr.indexOf(maxMount);j++){
          if(arr[j]>=arr[i] && j!==i){
              i=j-1;
              break;
          }
          count= count + arr[i] - arr[j];
      }
    };
};
for (let i=arr.length-1; i> arr.lastIndexOf(maxMount);i--){
    if(arr[i]>arr[i-1]){
        for(let j=i-1;j>arr.indexOf(maxMount);j--){
            if(arr[j]>=arr[i] && j!==i){
                i=j+1;
                break;
            }
            count= count + arr[i] - arr[j];
        }
    };
}
console.log(count);


