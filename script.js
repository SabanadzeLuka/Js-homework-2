// ***** N1 *****
const masivi = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < masivi.length; i++) {
    console.log(masivi[i]);
}

// ***** N2 *****
function display(x, secondfunc) {
    let message = secondfunc(x)
    document.write(message);
}
function shefasebisfunc(price) {
    if (price > 50)
    return "ძვირია"
    else if (price >= 20 && price <= 50 )
    return "საშუალოა"
    else (price < 20)
    return "იაფია"
}
display(0, shefasebisfunc);

// ***** N3 *****
const numbers = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951]
for (let index in numbers) {
    if (numbers[index] % 2 === 1)
    console.log("კენტი რიცხვია " + numbers[index]);
}