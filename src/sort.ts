
export function simpleSort(arr: number[], order = "asc"): number[] {
    const sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < sortedArr.length - i - 1; j++) {
            if(order == "desc"){
                if (sortedArr[j] < sortedArr[j+1]) {
                    const temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j+1];
                    sortedArr[j+1] = temp;
                }
            }
            else{
                if (sortedArr[j] > sortedArr[j+1]) {
                    const temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j+1];
                    sortedArr[j+1] = temp;
                }
            }
        }
    }
    return sortedArr;
}
