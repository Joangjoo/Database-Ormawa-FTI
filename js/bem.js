// Card PH
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#pengurus-container");
  
    fetch("../public/Bem.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal memuat data JSON");
        }
        return response.json();
      })
      .then((data) => {
        data.slice(0, 6).forEach((item, index) => {
          const card = document.createElement("div");
          card.className = "relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400";
          card.setAttribute("data-aos", "zoom-in");
          card.setAttribute("data-aos-duration", "2000");
          card.setAttribute("data-aos-delay", `${index * 200}`); 
  
          const InnerCard1 = document.createElement("div");
          InnerCard1.className = "z-10 absolute w-full h-full peer";
  
          const InnerCard2 = document.createElement("div");
          InnerCard2.className =
            "absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500 ";
  
          const InnerCard3 = document.createElement("div");
          InnerCard3.className =
            "absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500";
  
          const InnerCardKartu = document.createElement("div");
          InnerCardKartu.className = "hidden kartu";
          InnerCardKartu.innerHTML = `
            <h1 class="text-2xl font-bold">${item.jabatan}</h1>
            <p class="text-lg font-normal">${item.nama}</p>
            <p class="text-lg font-normal">${item.nim}</p>
            <p class="text-lg font-normal">${item.prodi}</p>
            <p class="text-lg font-normal">${item.angkatan}</p>
            <p class="text-lg font-normal">${item.ttl}</p>
            <p class="text-lg font-normal">${item.pesankesan}</p>
          `;
  
          const InnerCard4 = document.createElement("div");
          InnerCard4.className = "flex flex-col justify-end items-center w-full h-full ";
          InnerCard4.innerHTML = `<h1 class="text-lg font-bold text-white ">${item.jabatan}</h1>
                <img src="${item.foto}" alt="${item.nama}" class="w-full h-auto object-cover"> `;
  
          card.appendChild(InnerCard1);
          card.appendChild(InnerCard2);
          card.appendChild(InnerCard3);
          InnerCard3.appendChild(InnerCardKartu);
          card.appendChild(InnerCard4);
  
          let hoverTime;
          card.addEventListener("mouseenter", () => {
            hoverTime = setTimeout(() => {
              InnerCardKartu.classList.remove("hidden");
              InnerCardKartu.classList.add("block");
            }, 450);
          });
  
          card.addEventListener("mouseleave", () => {
            clearTimeout(hoverTime);
            InnerCardKartu.classList.add("hidden");
            InnerCardKartu.classList.remove("block");
          });
  
          container.appendChild(card);
        });

        
  
        AOS.init();
      })
      .catch((error) => console.error("Gagal memuat data:", error));
  });
// Card PH End

// Card Kaderisasi
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#kaderisasi-container");
  
    fetch("../public/Bem.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal memuat data JSON");
        }
        return response.json();
      })
      .then((data) => {
        data.slice(6, 12).forEach((item, index) => {
          const card = document.createElement("div");
          card.className = "relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400";
          card.setAttribute("data-aos", "zoom-in");
          card.setAttribute("data-aos-duration", "2000");
          card.setAttribute("data-aos-delay", `${index * 200}`); 
  
          const InnerCard1 = document.createElement("div");
          InnerCard1.className = "z-10 absolute w-full h-full peer";
  
          const InnerCard2 = document.createElement("div");
          InnerCard2.className =
            "absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500 ";
  
          const InnerCard3 = document.createElement("div");
          InnerCard3.className =
            "absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500";
  
          const InnerCardKartu = document.createElement("div");
          InnerCardKartu.className = "hidden kartu";
          InnerCardKartu.innerHTML = `
            <h1 class="text-2xl font-bold">${item.jabatan}</h1>
            <p class="text-lg font-normal">${item.nama}</p>
            <p class="text-lg font-normal">${item.nim}</p>
            <p class="text-lg font-normal">${item.prodi}</p>
            <p class="text-lg font-normal">${item.angkatan}</p>
            <p class="text-lg font-normal">${item.ttl}</p>
            <p class="text-lg font-normal">${item.pesankesan}</p>
          `;
  
          const InnerCard4 = document.createElement("div");
          InnerCard4.className = "flex flex-col justify-end items-center w-full h-full ";
          InnerCard4.innerHTML = `<h1 class="text-lg font-bold text-white ">${item.jabatan}</h1>
                <img src="${item.foto}" alt="${item.nama}" class="w-full h-auto object-cover"> `;
  
          card.appendChild(InnerCard1);
          card.appendChild(InnerCard2);
          card.appendChild(InnerCard3);
          InnerCard3.appendChild(InnerCardKartu);
          card.appendChild(InnerCard4);
  
          let hoverTime;
          card.addEventListener("mouseenter", () => {
            hoverTime = setTimeout(() => {
              InnerCardKartu.classList.remove("hidden");
              InnerCardKartu.classList.add("block");
            }, 450);
          });
  
          card.addEventListener("mouseleave", () => {
            clearTimeout(hoverTime);
            InnerCardKartu.classList.add("hidden");
            InnerCardKartu.classList.remove("block");
          });
  
          container.appendChild(card);
        });

        
  
        AOS.init();
      })
      .catch((error) => console.error("Gagal memuat data:", error));
  });
// Card Kaderisasi End


// Card IPTEK
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#iptek-container");

  fetch("../public/Bem.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal memuat data JSON");
      }
      return response.json();
    })
    .then((data) => {
      data.slice(12, 18).forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400";
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-duration", "2000");
        card.setAttribute("data-aos-delay", `${index * 200}`); 

        const InnerCard1 = document.createElement("div");
        InnerCard1.className = "z-10 absolute w-full h-full peer";

        const InnerCard2 = document.createElement("div");
        InnerCard2.className =
          "absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500 ";

        const InnerCard3 = document.createElement("div");
        InnerCard3.className =
          "absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500";

        const InnerCardKartu = document.createElement("div");
        InnerCardKartu.className = "hidden kartu";
        InnerCardKartu.innerHTML = `
          <h1 class="text-2xl font-bold">${item.jabatan}</h1>
          <p class="text-lg font-normal">${item.nama}</p>
          <p class="text-lg font-normal">${item.nim}</p>
          <p class="text-lg font-normal">${item.prodi}</p>
          <p class="text-lg font-normal">${item.angkatan}</p>
          <p class="text-lg font-normal">${item.ttl}</p>
          <p class="text-lg font-normal">${item.pesankesan}</p>
        `;

        const InnerCard4 = document.createElement("div");
        InnerCard4.className = "flex flex-col justify-end items-center w-full h-full ";
        InnerCard4.innerHTML = `<h1 class="text-lg font-bold text-white ">${item.jabatan}</h1>
              <img src="${item.foto}" alt="${item.nama}" class="w-full h-auto object-cover"> `;

        card.appendChild(InnerCard1);
        card.appendChild(InnerCard2);
        card.appendChild(InnerCard3);
        InnerCard3.appendChild(InnerCardKartu);
        card.appendChild(InnerCard4);

        let hoverTime;
        card.addEventListener("mouseenter", () => {
          hoverTime = setTimeout(() => {
            InnerCardKartu.classList.remove("hidden");
            InnerCardKartu.classList.add("block");
          }, 450);
        });

        card.addEventListener("mouseleave", () => {
          clearTimeout(hoverTime);
          InnerCardKartu.classList.add("hidden");
          InnerCardKartu.classList.remove("block");
        });

        container.appendChild(card);
      });

      

      AOS.init();
    })
    .catch((error) => console.error("Gagal memuat data:", error));
});

// Card Iptek End

// Card Jalsos
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#jalsos-container");

  fetch("../public/Bem.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal memuat data JSON");
      }
      return response.json();
    })
    .then((data) => {
      data.slice(18, 23).forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400";
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-duration", "2000");
        card.setAttribute("data-aos-delay", `${index * 200}`); 

        const InnerCard1 = document.createElement("div");
        InnerCard1.className = "z-10 absolute w-full h-full peer";

        const InnerCard2 = document.createElement("div");
        InnerCard2.className =
          "absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500 ";

        const InnerCard3 = document.createElement("div");
        InnerCard3.className =
          "absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500";

        const InnerCardKartu = document.createElement("div");
        InnerCardKartu.className = "hidden kartu";
        InnerCardKartu.innerHTML = `
          <h1 class="text-2xl font-bold">${item.jabatan}</h1>
          <p class="text-lg font-normal">${item.nama}</p>
          <p class="text-lg font-normal">${item.nim}</p>
          <p class="text-lg font-normal">${item.prodi}</p>
          <p class="text-lg font-normal">${item.angkatan}</p>
          <p class="text-lg font-normal">${item.ttl}</p>
          <p class="text-lg font-normal">${item.pesankesan}</p>
        `;

        const InnerCard4 = document.createElement("div");
        InnerCard4.className = "flex flex-col justify-end items-center w-full h-full ";
        InnerCard4.innerHTML = `<h1 class="text-lg font-bold text-white ">${item.jabatan}</h1>
              <img src="${item.foto}" alt="${item.nama}" class="w-full h-auto object-cover"> `;

        card.appendChild(InnerCard1);
        card.appendChild(InnerCard2);
        card.appendChild(InnerCard3);
        InnerCard3.appendChild(InnerCardKartu);
        card.appendChild(InnerCard4);

        let hoverTime;
        card.addEventListener("mouseenter", () => {
          hoverTime = setTimeout(() => {
            InnerCardKartu.classList.remove("hidden");
            InnerCardKartu.classList.add("block");
          }, 450);
        });

        card.addEventListener("mouseleave", () => {
          clearTimeout(hoverTime);
          InnerCardKartu.classList.add("hidden");
          InnerCardKartu.classList.remove("block");
        });

        container.appendChild(card);
      });

      

      AOS.init();
    })
    .catch((error) => console.error("Gagal memuat data:", error));
});

// Card Jalsos End

// Card Mikat
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#mikat-container");

  fetch("../public/Bem.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal memuat data JSON");
      }
      return response.json();
    })
    .then((data) => {
      data.slice(23, 32).forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400";
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-duration", "2000");
        card.setAttribute("data-aos-delay", `${index * 200}`); 

        const InnerCard1 = document.createElement("div");
        InnerCard1.className = "z-10 absolute w-full h-full peer";

        const InnerCard2 = document.createElement("div");
        InnerCard2.className =
          "absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500 ";

        const InnerCard3 = document.createElement("div");
        InnerCard3.className =
          "absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500";

        const InnerCardKartu = document.createElement("div");
        InnerCardKartu.className = "hidden kartu";
        InnerCardKartu.innerHTML = `
          <h1 class="text-2xl font-bold">${item.jabatan}</h1>
          <p class="text-lg font-normal">${item.nama}</p>
          <p class="text-lg font-normal">${item.nim}</p>
          <p class="text-lg font-normal">${item.prodi}</p>
          <p class="text-lg font-normal">${item.angkatan}</p>
          <p class="text-lg font-normal">${item.ttl}</p>
          <p class="text-lg font-normal">${item.pesankesan}</p>
        `;

        const InnerCard4 = document.createElement("div");
        InnerCard4.className = "flex flex-col justify-end items-center w-full h-full ";
        InnerCard4.innerHTML = `<h1 class="text-lg font-bold text-white ">${item.jabatan}</h1>
              <img src="${item.foto}" alt="${item.nama}" class="w-full h-auto object-cover"> `;

        card.appendChild(InnerCard1);
        card.appendChild(InnerCard2);
        card.appendChild(InnerCard3);
        InnerCard3.appendChild(InnerCardKartu);
        card.appendChild(InnerCard4);

        let hoverTime;
        card.addEventListener("mouseenter", () => {
          hoverTime = setTimeout(() => {
            InnerCardKartu.classList.remove("hidden");
            InnerCardKartu.classList.add("block");
          }, 450);
        });

        card.addEventListener("mouseleave", () => {
          clearTimeout(hoverTime);
          InnerCardKartu.classList.add("hidden");
          InnerCardKartu.classList.remove("block");
        });

        container.appendChild(card);
      });

      

      AOS.init();
    })
    .catch((error) => console.error("Gagal memuat data:", error));
});

// Card Mikat End

// Card Ekraf
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#ekraf-container");

  fetch("../public/Bem.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal memuat data JSON");
      }
      return response.json();
    })
    .then((data) => {
      data.slice(32, 37).forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400";
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-duration", "2000");
        card.setAttribute("data-aos-delay", `${index * 200}`); 

        const InnerCard1 = document.createElement("div");
        InnerCard1.className = "z-10 absolute w-full h-full peer";

        const InnerCard2 = document.createElement("div");
        InnerCard2.className =
          "absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500 ";

        const InnerCard3 = document.createElement("div");
        InnerCard3.className =
          "absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500";

        const InnerCardKartu = document.createElement("div");
        InnerCardKartu.className = "hidden kartu";
        InnerCardKartu.innerHTML = `
          <h1 class="text-2xl font-bold">${item.jabatan}</h1>
          <p class="text-lg font-normal">${item.nama}</p>
          <p class="text-lg font-normal">${item.nim}</p>
          <p class="text-lg font-normal">${item.prodi}</p>
          <p class="text-lg font-normal">${item.angkatan}</p>
          <p class="text-lg font-normal">${item.ttl}</p>
          <p class="text-lg font-normal">${item.pesankesan}</p>
        `;

        const InnerCard4 = document.createElement("div");
        InnerCard4.className = "flex flex-col justify-end items-center w-full h-full ";
        InnerCard4.innerHTML = `<h1 class="text-lg font-bold text-white ">${item.jabatan}</h1>
              <img src="${item.foto}" alt="${item.nama}" class="w-full h-auto object-cover"> `;

        card.appendChild(InnerCard1);
        card.appendChild(InnerCard2);
        card.appendChild(InnerCard3);
        InnerCard3.appendChild(InnerCardKartu);
        card.appendChild(InnerCard4);

        let hoverTime;
        card.addEventListener("mouseenter", () => {
          hoverTime = setTimeout(() => {
            InnerCardKartu.classList.remove("hidden");
            InnerCardKartu.classList.add("block");
          }, 450);
        });

        card.addEventListener("mouseleave", () => {
          clearTimeout(hoverTime);
          InnerCardKartu.classList.add("hidden");
          InnerCardKartu.classList.remove("block");
        });

        container.appendChild(card);
      });

      

      AOS.init();
    })
    .catch((error) => console.error("Gagal memuat data:", error));
});

// Card Ekraf End

// Card Agama
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#agama-container");

  fetch("../public/Bem.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal memuat data JSON");
      }
      return response.json();
    })
    .then((data) => {
      data.slice(37, 42).forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400";
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-duration", "2000");
        card.setAttribute("data-aos-delay", `${index * 200}`); 

        const InnerCard1 = document.createElement("div");
        InnerCard1.className = "z-10 absolute w-full h-full peer";

        const InnerCard2 = document.createElement("div");
        InnerCard2.className =
          "absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500 ";

        const InnerCard3 = document.createElement("div");
        InnerCard3.className =
          "absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500";

        const InnerCardKartu = document.createElement("div");
        InnerCardKartu.className = "hidden kartu";
        InnerCardKartu.innerHTML = `
          <h1 class="text-2xl font-bold">${item.jabatan}</h1>
          <p class="text-lg font-normal">${item.nama}</p>
          <p class="text-lg font-normal">${item.nim}</p>
          <p class="text-lg font-normal">${item.prodi}</p>
          <p class="text-lg font-normal">${item.angkatan}</p>
          <p class="text-lg font-normal">${item.ttl}</p>
          <p class="text-lg font-normal">${item.pesankesan}</p>
        `;

        const InnerCard4 = document.createElement("div");
        InnerCard4.className = "flex flex-col justify-end items-center w-full h-full ";
        InnerCard4.innerHTML = `<h1 class="text-lg font-bold text-white ">${item.jabatan}</h1>
              <img src="${item.foto}" alt="${item.nama}" class="w-full h-auto object-cover"> `;

        card.appendChild(InnerCard1);
        card.appendChild(InnerCard2);
        card.appendChild(InnerCard3);
        InnerCard3.appendChild(InnerCardKartu);
        card.appendChild(InnerCard4);

        let hoverTime;
        card.addEventListener("mouseenter", () => {
          hoverTime = setTimeout(() => {
            InnerCardKartu.classList.remove("hidden");
            InnerCardKartu.classList.add("block");
          }, 450);
        });

        card.addEventListener("mouseleave", () => {
          clearTimeout(hoverTime);
          InnerCardKartu.classList.add("hidden");
          InnerCardKartu.classList.remove("block");
        });

        container.appendChild(card);
      });

      

      AOS.init();
    })
    .catch((error) => console.error("Gagal memuat data:", error));
});

// Card Agama End

// Card Kominfo
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#kominfo-container");

  fetch("../public/Bem.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal memuat data JSON");
      }
      return response.json();
    })
    .then((data) => {
      data.slice(42, 48).forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400";
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-duration", "2000");
        card.setAttribute("data-aos-delay", `${index * 200}`); 

        const InnerCard1 = document.createElement("div");
        InnerCard1.className = "z-10 absolute w-full h-full peer";

        const InnerCard2 = document.createElement("div");
        InnerCard2.className =
          "absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500 ";

        const InnerCard3 = document.createElement("div");
        InnerCard3.className =
          "absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500";

        const InnerCardKartu = document.createElement("div");
        InnerCardKartu.className = "hidden kartu";
        InnerCardKartu.innerHTML = `
          <h1 class="text-2xl font-bold">${item.jabatan}</h1>
          <p class="text-lg font-normal">${item.nama}</p>
          <p class="text-lg font-normal">${item.nim}</p>
          <p class="text-lg font-normal">${item.prodi}</p>
          <p class="text-lg font-normal">${item.angkatan}</p>
          <p class="text-lg font-normal">${item.ttl}</p>
          <p class="text-lg font-normal">${item.pesankesan}</p>
        `;

        const InnerCard4 = document.createElement("div");
        InnerCard4.className = "flex flex-col justify-end items-center w-full h-full ";
        InnerCard4.innerHTML = `<h1 class="text-lg font-bold text-white ">${item.jabatan}</h1>
              <img src="${item.foto}" alt="${item.nama}" class="w-full h-auto object-cover"> `;

        card.appendChild(InnerCard1);
        card.appendChild(InnerCard2);
        card.appendChild(InnerCard3);
        InnerCard3.appendChild(InnerCardKartu);
        card.appendChild(InnerCard4);

        let hoverTime;
        card.addEventListener("mouseenter", () => {
          hoverTime = setTimeout(() => {
            InnerCardKartu.classList.remove("hidden");
            InnerCardKartu.classList.add("block");
          }, 450);
        });

        card.addEventListener("mouseleave", () => {
          clearTimeout(hoverTime);
          InnerCardKartu.classList.add("hidden");
          InnerCardKartu.classList.remove("block");
        });

        container.appendChild(card);
      });

      

      AOS.init();
    })
    .catch((error) => console.error("Gagal memuat data:", error));
});

// Card Kominfo End

// Card Akastrat
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#akastrat-container");

  fetch("../public/Bem.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal memuat data JSON");
      }
      return response.json();
    })
    .then((data) => {
      data.slice(48, 53).forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400";
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-duration", "2000");
        card.setAttribute("data-aos-delay", `${index * 200}`); 

        const InnerCard1 = document.createElement("div");
        InnerCard1.className = "z-10 absolute w-full h-full peer";

        const InnerCard2 = document.createElement("div");
        InnerCard2.className =
          "absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500 ";

        const InnerCard3 = document.createElement("div");
        InnerCard3.className =
          "absolute flex flex-col text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500";

        const InnerCardKartu = document.createElement("div");
        InnerCardKartu.className = "hidden kartu";
        InnerCardKartu.innerHTML = `
          <h1 class="text-2xl font-bold">${item.jabatan}</h1>
          <p class="text-lg font-normal">${item.nama}</p>
          <p class="text-lg font-normal">${item.nim}</p>
          <p class="text-lg font-normal">${item.prodi}</p>
          <p class="text-lg font-normal">${item.angkatan}</p>
          <p class="text-lg font-normal">${item.ttl}</p>
          <p class="text-lg font-normal">${item.pesankesan}</p>
        `;

        const InnerCard4 = document.createElement("div");
        InnerCard4.className = "flex flex-col justify-end items-center w-full h-full ";
        InnerCard4.innerHTML = `<h1 class="text-lg font-bold text-white ">${item.jabatan}</h1>
              <img src="${item.foto}" alt="${item.nama}" class="w-full h-auto object-cover"> `;

        card.appendChild(InnerCard1);
        card.appendChild(InnerCard2);
        card.appendChild(InnerCard3);
        InnerCard3.appendChild(InnerCardKartu);
        card.appendChild(InnerCard4);

        let hoverTime;
        card.addEventListener("mouseenter", () => {
          hoverTime = setTimeout(() => {
            InnerCardKartu.classList.remove("hidden");
            InnerCardKartu.classList.add("block");
          }, 450);
        });

        card.addEventListener("mouseleave", () => {
          clearTimeout(hoverTime);
          InnerCardKartu.classList.add("hidden");
          InnerCardKartu.classList.remove("block");
        });

        container.appendChild(card);
      });

      

      AOS.init();
    })
    .catch((error) => console.error("Gagal memuat data:", error));
});

// Card Akstrat End