export function multDigits(input:number):number{
    let inputInteger = String(input);
    let multiple = 1;
    for (let ele of inputInteger) {
        multiple*=Number(ele)
    }
    return multiple;
}