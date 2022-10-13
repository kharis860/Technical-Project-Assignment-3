// deklarasi base link image
let base = "https://image.tmdb.org/t/p/original";

// async untuk menampilkan film ke tampilan awal web
async function getData() {
  let data = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e69fcdc178dedb2c9d8eef09ceba5795&sort_by=popularity.desc");
  let hasilData = await data.json();
  let finalData = await hasilData.results;
  // perulangan untuk mengambil data yang ada di masing-masing objek
  finalData.forEach((item) => {
    let element = document.getElementById("row");
    element.innerHTML += `<div class="col-md-4 pb-4">
          <div class="card">
            <img src="${base + item.backdrop_path}" alt="" width="100%" />
            <div class="card-body">
              <div class="rating">
                <h5 class="card-title">${item.title}</h5>
                <h5 class="ratingItem">${item.vote_average}</h5>
              </div>
              <p class="dateItem card-text">${item.release_date}</p>
            </div>
          </div>
        </div>`;
  });
}
// run async tampilan awal web
getData();

// deklarasi event search
let btn = document.getElementById("btn1");
let form = document.getElementById("form1");
let input = document.getElementById("input");
// event listener button pada form search ketika di klik
btn.addEventListener("click", (event) => {
  event.preventDefault();
  async function getData1() {
    let data1 = await fetch("https://api.themoviedb.org/3/search/movie?api_key=e69fcdc178dedb2c9d8eef09ceba5795&query=" + input.value + "&page=1");
    let hasilData1 = await data1.json();
    let finalData1 = await hasilData1.results;
    console.log(finalData1);
    let element1 = document.getElementById("row");
    element1.innerHTML = "";
    // perulangan untuk mengambil data yang ada di masing-masing objek
    finalData1.forEach((item) => {
      element1.innerHTML += `<div class="col-md-4 pb-4">
                    <div class="card">
                <img src="${base + item.backdrop_path}" alt="" width="100%"  />
                <div class="card-body">
                <div class="rating">
                <h5 class="card-title">${item.title}</h5>
                <h5 class="ratingItem">${item.vote_average}</h5>
                </div>
                <p class="dateItem card-text">${item.release_date}</p>
                </div>
                </div>
                </div>`;
    });
  }
  getData1();
  // mereset form ketika tombol search di klik
  form.reset();
});
