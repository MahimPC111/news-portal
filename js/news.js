// News loading part 

const loadNews = async (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.data);
    }
    catch (error) {
        console.log(error);
    }
    loadSpinner(false);
}

// News displaying part 

const displayNews = newses => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;
    const totalNewsCountDiv = document.getElementById('total-news-count');
    totalNewsCountDiv.innerText = newses.length + ' items found in this category';

    newses.sort(function (a, b) {
        return b.total_view - a.total_view
    });

    newses.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.classList.add('rounded');
        newsDiv.classList.add('my-3');
        newsDiv.classList.add('p-3');
        newsDiv.classList.add('bg-white');
        newsDiv.innerHTML = `
            <div class="col-lg-3 col-sm-12 p-0">
            <img class="w-100" src="${news.thumbnail_url}">
            </div>

            <div class="col-lg-9 col-sm-12 my-auto">

            <div>
            <h4 class="fw-bold">${news.title}</h4>
            <p class="fw-bold text-black-50">${news.details.slice(0, 400)}...</p>
            </div>

            <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
            <img style="width:50px; height:50px" class="rounded-circle" src="${news.author.img}">
            <div class="mx-2"><h6>${news.author.name ? news.author.name : "Information not available"}</h6>
            <h6 class="text-black-50">${news.author.published_date ? news.author.published_date : "Information not available"}</h6></div>
            </div>

            <div class=" text-black-50">
           <h4> <i class="fa-solid fa-eye"></i> ${news.total_view ? news.total_view : "Information not available"}</h4>
            </div>

            <p class="fs-3"><i onclick="loadNewsDetail('${news._id}')" class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#newsDetailModal"></i></p>
            </div>
            
            </div>
            `
        newsContainer.appendChild(newsDiv);
    })
}

// News details loading part 

const loadNewsDetail = async (news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNewsDetails(data.data[0])
    }
    catch (error) {
        console.log(error);
    }
}

// News details displaying part 

const displayNewsDetails = (news) => {
    const modalTitle = document.getElementById('newsDetailModalLabel');
    modalTitle.innerText = news.title;
    const newsDetail = document.getElementById('news-detail');
    newsDetail.innerHTML = `
    <img class="w-100" src="${news.image_url}">
    <p>${news.details}</p>
    <h6>Author name: ${news.author.name ? news.author.name : "Information not available"}</h6>
    <h6>Publish date: ${news.author.published_date ? news.author.published_date : "Information not available"}</h6>
    <h6>Rating: ${news.rating.number}</h6>
    `
}

// spinner part

const loadSpinner = isLoading => {
    const loaderSection = document.getElementById('spinner');
    if (isLoading === true) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

// news button id part 

document.getElementById('btn-home').addEventListener('click', function () {
    loadNews('08');
    loadSpinner(true);
})
document.getElementById('btn-breaking-news').addEventListener('click', function () {
    loadNews('01');
    loadSpinner(true);
})
document.getElementById('btn-regular-news').addEventListener('click', function () {
    loadNews('02');
    loadSpinner(true);
})
document.getElementById('btn-internationl-news').addEventListener('click', function () {
    loadNews('03');
    loadSpinner(true);
})
document.getElementById('btn-sports').addEventListener('click', function () {
    loadNews('04');
    loadSpinner(true);
})
document.getElementById('btn-entertainment').addEventListener('click', function () {
    loadNews('05');
    loadSpinner(true);
})
document.getElementById('btn-culture').addEventListener('click', function () {
    loadNews('06');
    loadSpinner(true);
})
document.getElementById('btn-arts').addEventListener('click', function () {
    loadNews('07');
    loadSpinner(true);
})
document.getElementById('btn-all-news').addEventListener('click', function () {
    loadNews('08');
    loadSpinner(true);
})

loadNews('08');
loadSpinner(true);