const inp = document.getElementById("inp");
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const obtener = async() => {
        e.preventDefault()
        try {
            const api = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8721d15c&s=${inp.value}`);
            const datosApi = await api.json();
            console.log(datosApi.Search)

            // ======================> iMAGENES  <====================== 
            const img = document.getElementById("img");
            const img2 = document.getElementById("img2");
            const img3 = document.getElementById("img3");
            const img4 = document.getElementById("img4");
            const img5 = document.getElementById("img5");
            const img6 = document.getElementById("img6");

            // ======================> h1  <======================
            const titileH = document.getElementById("titulo");
            const yearH = document.getElementById("year");

            const titile2 = document.getElementById("titulo2");
            const year2 = document.getElementById("year2");

            const titile3 = document.getElementById("titulo3");
            const year3 = document.getElementById("year3");




            const titile4 = document.getElementById("titulo4");
            const year4 = document.getElementById("year4");

            const titile5 = document.getElementById("titulo5");
            const year5 = document.getElementById("year5");

            const titile6 = document.getElementById("titulo6");
            const year6 = document.getElementById("year6");
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


                img4.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BNjQ2MDQzMzExNl5BMl5BanBnXkFtZTcwMTYzOTc5Mw@@._V1_SX300.jpg");
                titile4.innerHTML = "The Chronicles of Narnia: The Voyage of the Dawn Treader";
                year4.innerHTML = "2010";


                img5.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg");
                titile5.innerHTML = "Jumanji: Welcome to the Jungle";
                year5.innerHTML = "2017";


                img6.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg");
                titile6.innerHTML = "Pokémon Detective Pikachu";
                year6.innerHTML = "2019";
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



            if (datosApi.Search[3].Poster == "N/A") {
                img4.setAttribute("src", "https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg");
                titile4.innerHTML = "";
                year4.innerHTML = "";
            } else {
                img4.setAttribute("src", datosApi.Search[3].Poster);
                titile4.innerHTML = datosApi.Search[3].Title;
                year4.innerHTML = datosApi.Search[3].Year;
            }


            if (datosApi.Search[4].Poster == "N/A") {
                img5.setAttribute("src", "https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg");
                titile5.innerHTML = "";
                year5.innerHTML = "";
            } else {
                img5.setAttribute("src", datosApi.Search[4].Poster);
                titile5.innerHTML = datosApi.Search[4].Title;
                year5.innerHTML = datosApi.Search[4].Year;
            }



            if (datosApi.Search[5].Poster == "N/A") {
                img6.setAttribute("src", "https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg");
                titile6.innerHTML = "";
                year6.innerHTML = "";
            } else {
                img6.setAttribute("src", datosApi.Search[5].Poster);
                titile6.innerHTML = datosApi.Search[5].Title;
                year6.innerHTML = datosApi.Search[5].Year;
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


