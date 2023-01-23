const fetchBtn=document.querySelector("#fetchdog");

async function getDog() {
  randomdog.innerHTML ="Loading...";
  const url = "https://dog.ceo/api/breeds/image/random";
  
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    console.log(data);

    randomdog.innerHTML = `
    <div>
      <image src="${data.message}" class="rounded mx-auto d-block" alt="Dog"></image>
    </div>
    `
  }
  catch (err) {
    randomdog.innerHTML = err;
  }
}
// getDog();
fetchBtn.addEventListener("click",getDog);


