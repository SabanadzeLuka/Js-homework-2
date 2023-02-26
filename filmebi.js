const movies = [ {
    name: "The Godfather 1",
    description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    date: "27 February 2023",
    category: "Crime / Drama",
    imdb: "IMDB 9.2",
    duration: "175 minutes",
    location: ["კავეა გალერეა", "კავეა თბილისი მოლი", "კავეა ისთ ფოინთი"],
},
{
    name: "The Shawshank Redemption",
    description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    date: "27 February 2023",
    category: "Drama",
    imdb: "IMDB 9.2",
    duration: "144 minutes",
    location: ["კავეა გალერეა", "კავეა თბილისი მოლი", "კავეა ისთ ფოინთი"],
},
{
    name: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    date: "27 February 2023",
    category: "Action / Crime / Drama",
    imdb: "IMDB 9.0",
    duration: "152 minutes",
    location: ["კავეა გალერეა", "კავეა თბილისი მოლი", "კავეა ისთ ფოინთი"],
},
{
    name: "Schindler's List",
    description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    date: "27 February 2023",
    category: "Biography / Drama / History",
    imdb: "IMDB 9.0",
    duration: "195 minutes",
    location: ["კავეა გალერეა", "კავეა თბილისი მოლი", "კავეა ისთ ფოინთი"],
},
{
    name: "The Lord of the Rings: The Fellowship of the Ring",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    date: "27 February 2023",
    category: "Action / Adventure / Drama",
    imdb: "IMDB 8.8",
    duration: "178 minutes",
    location: ["კავეა გალერეა", "კავეა თბილისი მოლი", "კავეა ისთ ფოინთი"],
},
{
    name: "Fight Club",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    date: "27 February 2023",
    category: "Drama",
    imdb: "IMDB 8.8",
    duration: "139 minutes",
    location: ["კავეა გალერეა", "კავეა თბილისი მოლი", "კავეა ისთ ფოინთი"],
},
{
    name: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    date: "27 February 2023",
    category: "Action / Adventure / Sci-Fi",
    imdb: "IMDB 8.8",
    duration: "148 minutes",
    location: ["კავეა გალერეა ", "კავეა თბილისი მოლი ", "კავეა ისთ ფოინთი"],
}
];
const element = document.getElementById("row")

movies.map((movie) => {
    element.innerHTML += `
        <div class="col-4 mt-3">
           <div class="movie_card row flex-column justify-content-end">
                <div class="card_title">
                    <h3>${movie.name}</h3>
                    <p>${movie.description}</p>
                </div>
                <div class="card_information">
                    <p><i class="fa-solid fa-calendar-days"></i>${movie.date}</p>
                    <p><i class="fa-solid fa-tags"></i>${movie.category}</p>
                    <div class="glass row justify-content-center">
                    <p><i class="fa-solid fa-hourglass-half"></i>${movie.duration}</p>
                    </div>
                    <p><i class="fa-solid fa-location-dot"></i>${movie.location}</p>
                    <div class="text-end d-flex justify-content-end">
                    <p>${movie.imdb}</p>
                    </div>
                </div>
           </div>
        </div>
    `
})