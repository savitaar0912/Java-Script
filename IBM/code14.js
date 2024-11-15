let name = "Shashank Singh"

let upper = name.toUpperCase()

const counting = (st) => {
    let result = {}

    st.split('').forEach(lett => {
        if(result[lett]){
            result[lett]++
        }
        else{
            result[lett] = 1
        }
    });

    return result
}

console.log(counting(upper))


const counting1 = (st) => {
    return st.split('').reduce((result, lett) => {
        result[lett] = (result[lett] || 0) + 1;
        return result;
    }, {});
};

console.log(counting1(upper));

