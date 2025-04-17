let btn = document.querySelector("#searchBtn");
let url = "http://universities.hipolabs.com/search?name=India"

btn.addEventListener('click', async () => {
    let state = document.querySelector("#search").value;
    let coll = await findClg(state);
    showClg(coll);
});

function showClg(coll) {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for (coll of coll) {
        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li);
    }
};

async function findClg(state) {
    try {
        let data = await axios.get(url);
        let p = [];
        for (let i = 0; i < data.data.length; i++) {
            if (data.data[i]["state-province"] == state) {
                p.push(data.data[i]);
            }
        }
        return p;
    }
    catch (err) {
        console.log(err);
        return [];
    }
};