const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const listEl = document.querySelector('.gallery');


function creatImg(image){
  return image.map(({url, alt}) => `
  <li class="list-img">
    <img class="list-item-img" src="${url}" alt="${alt}" width="360" height="300">
  </li>`).join("");
}

listEl.insertAdjacentHTML('afterbegin', creatImg(images));

// const imagesArray = images.map(element => {
//   const firstListImg = document.createElement('li');
//   const firstImg = document.createElement('img');
//   firstListImg.append(firstImg);
//   firstImg.style.width = '360px';
//   firstImg.style.height = '300px';
//   firstImg.setAttribute('src', element.url);
//   firstImg.setAttribute('alt', element.alt);
//   return firstListImg;
// });

// listEl.append(...imagesArray);

