let arr = [1, 1, 3, 4, "s"];
let result = true;
for (let i = 0; i < arr.length - 1; i++) {
    for (let b = i + 1; b < arr.length; b++) {
        if (typeof (arr[i]) !== typeof (arr[b])) {
            result = false;
        }
    }
}
if (result){
                console.log(true);}
         else {
            console.log(false)
        }


