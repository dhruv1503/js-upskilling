


// 2 words containing exactly same alphabets


function populatedMap(str = ""){
    const map = new Map()
    for(let i = 0; i < str.length; i++){
        map.set(str.substring(i, i + 1), (map.get(str.substring(i, i + 1)) || 0) + 1);
    }
    return map;
}


function anagram(str1, str2){
if(str1.length !== str2.length){
    return false
}
if(typeof(str2) !== "string" && typeof(str2) !== "string"){
    return false;
}

const map1 = populatedMap(str1);
const map2 =  populatedMap(str2);
for(let [key, value] of Array.from(map1.entries())){
    if(!map2.has(key)){
        return false
    }
    if(value !== map2.get(key)){
        return false
    }
}
return true
}

console.log(anagram("qwertyae", 'etryqwse'));

// more efficient just 1 map required

function effAnangaram(str1, str2){
if(str1.length !== str2.length){
    return false
}
if(typeof(str2) !== "string" && typeof(str2) !== "string"){
    return false;
}

const map1 = populatedMap(str1);
for(let i = 0; i <  str2.length; i++){
    const count = (map1.get(str2[i]) || 0) - 1
    if(count < 0) {return false }
    map1.set(str2[i], count)
}
return true
}

console.log(effAnangaram("tyqwser", 'qwertys'))