const imgsURL = [
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747006209/OQXY6945_adxmr5.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747006209/UXGO5492_yxdvnj.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747006208/HURQ3445_zgyyq4.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005815/UVKR5333_hynp6m.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005814/UHIM4977_ewyr1x.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005814/SJJD3658_yyr6eq.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005814/UEDG7877_av2ql9.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005814/SWIA8394_tylkkp.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005813/PQQJ1620_ymh5sa.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005813/SACU7334_nop6pa.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005813/RHRX1729_xu2vic.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005813/PHHY7283_gz3go7.jpg",
  "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005813/PEDZ6372_gqy0po.jpg",
]
const carrousel = document.querySelector(".carousel");
const carrouselTrack = document.querySelector('.carousel-track')

function cargarImagenes() {
  imgsURL.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.loading = "lazy";
    carrouselTrack.appendChild(img);
  });

  // Duplicado
  imgsURL.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.loading = "lazy";
    carrouselTrack.appendChild(img);
  });
}

function iniciarCarrusel() {
  let scroll = 0;
  const velocidad = 0.5; // px por frame (ajustá a gusto)

  function mover() {
    scroll += velocidad;
    if (scroll >= carrouselTrack.scrollWidth / 2) {
      scroll = 0; // vuelve al inicio sin salto
    }
    carrousel.scrollLeft = scroll;
    requestAnimationFrame(mover);
  }

  mover();
}

cargarImagenes();
iniciarCarrusel();