const inp = document.getElementById("inp");
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const obtener = async() => {
        try {
            const api = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8721d15c&s=${inp.value}`);
            const datosApi = await api.json();
            // ======================> iMAGENES  <====================== 
            const img = document.getElementById("img");
            const img2 = document.getElementById("img2");
            const img3 = document.getElementById("img3");
            // ======================> h1  <======================
            const titileH = document.getElementById("titulo");
            const yearH = document.getElementById("year");

            const titile2 = document.getElementById("titulo2");
            const year2 = document.getElementById("year2");

            const titile3 = document.getElementById("titulo3");
            const year3 = document.getElementById("year3");
            // ======================>   <======================
            const reInicio = () => {
                img.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg");
                titileH.innerHTML = "Wonder Woman";
                yearH.innerHTML = "2017";
                // ======================>   <======================
                img2.setAttribute("src", "https://img.ecartelera.com/noticias/fotos/28400/28470/1.jpg");
                titile2.innerHTML = "Batman v Superman";
                year2.innerHTML = "2005";
                // ======================>   <======================
                img3.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg");
                titile3.innerHTML = "Pokémon Detective Pikachu";
                year3.innerHTML = "2019";
            }
            if (inp.value == "") {
                reInicio();
            }
            // ======================> PINTAR EN LA PANTALLA  <====================== 
            // ======================>  FILA 1 <======================
            if (datosApi.Search[0].Poster == "N/A") {
                img.setAttribute("src", "https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg");
                titileH.innerHTML = "";
                yearH.innerHTML = "";
            } else {
                img.setAttribute("src", datosApi.Search[0].Poster);
                titileH.innerHTML = datosApi.Search[0].Title;
                yearH.innerHTML = datosApi.Search[0].Year;
            }
            // ======================>   <======================
            if (datosApi.Search[1].Poster == "N/A") {
                img1.setAttribute("src", "https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg");
                titile2.innerHTML = "";
                year2.innerHTML = "";
            } else {
                img2.setAttribute("src", datosApi.Search[1].Poster);
                titile2.innerHTML = datosApi.Search[1].Title;
                year2.innerHTML = datosApi.Search[1].Year;
            }
            // ======================>   <======================
            if (datosApi.Search[2].Poster == "N/A") {
                img3.setAttribute("src", "https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg");

                titile3.innerHTML = "";
                year3.innerHTML = "";
            } else {
                img3.setAttribute("src", datosApi.Search[2].Poster);
                titile3.innerHTML = datosApi.Search[2].Title;
                year3.innerHTML = datosApi.Search[2].Year;
            }
            // ======================>  Pintar error <====================== 
        } catch (error) {
            console.log("Peliculas no Generadas");
            // console.log("No quise seguir ");
        }
    };
    obtener();
});
// });


/*=============================================
=     Termine este proyecto por ahora      =
=============================================*/
