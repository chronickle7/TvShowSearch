const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // if (document.getElementById("parent")) {
    //     document.getElementById("parent").remove()
    // }
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    // document.getElementById('imgs').removeChild();

})

const makeImages = (shows) => {
    // const parent = document.createElement("div")
    // parent.id = "parent"
    // let imgss = document.querySelectorAll(".test")

    // if (imgss.length > 0) {
    //     for (let i = 0; i < imgss.length; i++) {
    //         imgss[i].remove()
    //     }
    // }

    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.className = "test"
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
    // document.body.append(parent)
}