const API= 'https://anime-facts-rest-api.herokuapp.com/api/v1';

const options ={
    method: 'GET'
}

const content= null || document.getElementById('content');

async function fetchData(urlAPI){
    const response = await fetch(urlAPI, options);
    const datas = await response.json();
    return datas;
}

(async()=>{
    try {
        const images = await fetchData(API);
        let view = `
        ${images.data.map(image => `
        <div class="group relative">
          <div
            class="change-size w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${image.anime_img}" alt="" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0 "></span>
              ${image.anime_name.replace('_', ' ')}
            </h3>
          </div>
        </div>
        `).slice(0,5).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();