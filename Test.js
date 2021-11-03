let str1 = prompt("nhap chuoi");

const chiaCatChuoi = str1.split(" ");

for (let i = 0; i < chiaCatChuoi.length; i++) {
    
    chiaCatChuoi[i] = chiaCatChuoi[i].charAt(0).toUpperCase() + chiaCatChuoi[i].slice(1);

}

const str2 = chiaCatChuoi.join(" ");

console.log(str2);
