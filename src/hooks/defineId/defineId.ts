export const defineId = (key: string | number | undefined)=>{ 
    if(key) return Number(key)+1
    else return 0
}