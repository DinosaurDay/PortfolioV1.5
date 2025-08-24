//Global params

//Displaying projects
let projectsContainer = document.getElementById("cards-container");

//Manipulating JSON
fetch("data/projects.json")
    .then((response) => response.json())
    .then((data) => {
        data.projects.forEach((project) => {
            const card = document.createElement("div");
            card.classList.add("project-card");
            card.innerHTML = `
                <a href="${project.url}" target="_blank" rel="noopener noreferrer">
                    <div class="thumbnail-container">
                        <img src="${project.image_url}" alt="${project.name}">
                    </div>
                    <div class="desc-container">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                    </div>
                </a>`;
            // <span>${project.tags.join(", ")}</span>;
            projectsContainer.appendChild(card);
        });
    })
    .catch((error) => console.error("Erreur de chargement :", error));

//Dynamic date
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
    return age;
}

document.getElementById("my-birthday").innerHTML =
    getMyAge(myBirthday, date) + " ans";
document.getElementById("copyright-year").innerHTML = date.getFullYear();
