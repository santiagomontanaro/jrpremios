const imgsURL = [
  {
    nombre: "#1 Copa Libertadores",
    altura: "~98 cm",
    material: "Plata esterlina con base de madera",
    img: "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005801/IMG_0212_ujsnpn.jpg",
  },
  {
    nombre: "#2 Copa Argentina",
    altura: "~75 cm",
    material: "Aluminio pulido y base metálica",
    img: "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005801/IMG_0202_f4ndfz.jpg",
  },
  {
    nombre: "#3 Copa Sudamericana",
    altura: "~65 cm",
    material: "Plata, con detalles en bronce y madera en la base",
    img: "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005808/IMG_0183_objxqw.jpg",
  },
  {
    nombre: "#4 Copa Suruga Bank",
    altura: "~55 cm",
    material: "Plata y base de madera lacada",
    img: "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005801/IMG_0188_gprbux.jpg",
  },
  {
    nombre: "#5 Copa Diego Maradona",
    altura: "~60–65 cm",
    material: "Acero inoxidable con baño dorado (diseño especial en honor a Maradona)",
    img: "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747794841/WhatsApp_Image_2025-05-16_at_14.31.25_nyvygb.jpg",
  },
  {
    nombre: "#6 Copa Conmebol",
    altura: "~60 cm",
    material: "Plata con detalles de bronce niquelado",
    img: "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005798/IMG_0180_aoa4y9.jpg",
  },
  {
    nombre: "#7 Copa Liga Profesional (LPF)",
    altura: "~72 cm",
    material: "Acero inoxidable con detalles niquelados",
    img: "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005798/IMG_0178_m2di9y.jpg",
  },
  {
    nombre: "#8 Copa Europa / UEFA Champions League",
    altura: "~73.5 cm",
    material: "Plata pura",
    img: "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005799/IMG_0186_aqp2jz.jpg",
  },
  {
    nombre: "#9 Supercopa Argentina",
    altura: "~60 cm",
    material: "Plata, con detalles de acero inoxidable",
    img: "https://res.cloudinary.com/dxhaqchbg/image/upload/e_background_removal/e_dropshadow:azimuth_220;elevation_60;spread_20/b_rgb:FFFFFF/f_png/v1747005801/IMG_0200_jerm1u.jpg",
  }
]
const carrousel = document.querySelector(".carousel");
const carrouselTrack = document.querySelector('.carousel-track')

function cargarImagenes() {
  imgsURL.forEach(prod => {
    const card = document.createElement('div')
    card.classList.add('carousel-card')

    card.innerHTML = `
          <img src="${prod.img}" alt="${prod.nombre}" loading="lazy">
      <div class="card-info">
        <h4>${prod.nombre}</h4>
        <p>Altura: ${prod.altura}</p>
        <p>Material: ${prod.material}</p>
      </div>
    `;

    carrouselTrack.appendChild(card)
  })

  carrouselTrack.innerHTML += carrouselTrack.innerHTML;

}

function iniciarCarrusel() {
  let scroll = 0;
  const velocidad = 0.8; // px por frame (ajustá a gusto)

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