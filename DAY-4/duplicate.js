

let a = ["kani", "mani", "rani", "guna", "mani", "kani", "mani", "rani"];
 
function duplicate(a) {
    return a.filter((item, index) => a.indexOf(item) === index);
}
console.log(duplicate(a));