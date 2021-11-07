//Bài 1 - Viết chương trình đảo ngược :
function reverseStr(str){
    let str1 = " ";
    for (let i = str.length - 1; i >= 0; i--)
    {    
        str1 += str[i];   
    }
    return str1;
}
let a = prompt("Nhap chuoi can dao nguoc: ");
console.log(reverseStr(a));


//Bài 2 - Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa
function ToUpperString(str) {
    let splitString = str.toLowerCase().split(" ");
    for (let index = 0; index < splitString.length; index++) 
    {
        splitString[index] = splitString[index].charAt(0).toUpperCase() + splitString[index].substring(1);
    }
    return splitString.join(" ");
}

let a = prompt("nhap chuoi");
console.log(ToUpperString(a));

//Bài 3 - Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả
function DeleteSameCharecter(array, j, x) {
    for (let i = 0; i < j; i++) {
        if (array[i] == x) {
            return true;
        }
    }
    return false;
}
let arr = prompt("Nhap mang can kiem tra va chuan hoa: ");
for (let i = 0; i < arr.length; i++) 
    {
      if (!DeleteSameCharecter(arr, i, arr[i])) 
      {
          console.log(arr[i]);
      }
}
