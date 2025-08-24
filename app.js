const myBirthday = new Date("April 20, 2002");

let date = new Date();

function getMyAge(birthday, date) {
    age = date.getFullYear() - birthday.getFullYear();

    if (
        date.getMonth() < birthday.getMonth() ||
        (date.getMonth() === birthday.getMonth() &&
            date.getDate() < birthday.getDate())
    ) {
        age -= 1;
    }
    console.log(age + " ans");
    return age;
}

document.getElementById("my-birthday").innerHTML = getMyAge(myBirthday, date);
document.getElementById("copyright-year").innerHTML = date.getFullYear();
