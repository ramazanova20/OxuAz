async function fetchData(url) {
    const res = await fetch(url);
    return res.json();
}

let data = [];

async function datalar() {
    data = await fetchData("https://6704e06b031fd46a830dbb27.mockapi.io/oxuaz");
    show();
}

let newsCard = document.getElementById("newsCard");

function show() {
    newsCard.innerHTML = '';
    data.map(item => {
        newsCard.innerHTML += `
        <div class="card rounded-[15px] border-[1px] overflow-hidden border-[#ccc]" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top " alt="...">
            <div class="card-body p-3">
                <div class="cardTop flex flex-row justify-between pb-3 text-[#777777]">
                    <a href="#" class="btn btn-primary"><i class="fa-solid fa-calendar-day"></i> ${item.date}</a>
                    <a href="#" class="btn btn-primary"><i class="fa-solid fa-eye"></i> ${item.view}</a>
                </div>
            <h5 class="card-title"><b> ${item.title}</b></h5>
            <div class="cardBottom flex flex-row justify-between pb-3 pt-8">
                <h5 class="text-[#1894A0]"><b>KRIMINAL</b></h5>
                <div class="likes">
                    <a href="#" class="btn btn-primary pr-3"><i class="fa-regular fa-thumbs-up"></i> 50</a>
                    <a href="#" class="btn btn-primary"><i class="fa-regular fa-thumbs-down"></i> 50</a>

                </div>
            </div>
            </div>
        </div>  
        `;
    });
}

// function deleteXeber(id) {
//     data = data.filter(item => item.id !== id);
//     show();
// }

datalar();


const darkMode = document.getElementById("darkMode");

// Select the hamIcon and sidebar
const hamIcon = document.getElementById("hamIcon");
const sideBar = document.querySelector(".sideBar");

// Set an inline click handler
hamIcon.onclick = function() {
    // Toggle the 'visible' class on the sidebar
    sideBar.classList.toggle("visible");

    // For debugging purposes, log the class list
    console.log("Sidebar class list:", sideBar.classList);
};





