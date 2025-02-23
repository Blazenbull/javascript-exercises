const removeFromArray = function() {
   let x = [1,2,2,3,3,3,4,4,4,4]
   z = [4,3]
   function y(){
    return 3
   }

   const filtered = x.filter(function a(b){return !z.includes(b)})//filter compares the array with the function conditions and fulfils both
   console.log(filtered)
    };
    removeFromArray()
// Do not edit below this line
