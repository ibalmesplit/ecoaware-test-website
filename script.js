const map = L.map("map").setView([48.0196, 66.9237], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const greenIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Центры переработки с типами отходов для фильтрации
const centers = [
  // Алматы
  {
    coords: [43.2330, 76.9450],
    name: "Eco Recycling Алматы",
    description: "Пластик, бумага, металл.",
    types: ["пластик", "бумага", "металл"],
  },
  {
    coords: [43.2500, 76.9200],
    name: "Green Point Алматы",
    description: "Пластик, бумага.",
    types: ["пластик", "бумага"],
  },
  {
    coords: [43.2150, 76.9400],
    name: "Recycling Hub Алматы",
    description: "Металл, стекло.",
    types: ["металл", "стекло"],
  },

  // Нур-Султан (Астана)
  {
    coords: [51.1605, 71.4704],
    name: "SmartRecycle Нур-Султан",
    description: "Пластик, бумага, металл.",
    types: ["пластик", "бумага", "металл"],
  },
  {
    coords: [51.1500, 71.4600],
    name: "EcoPoint Нур-Султан",
    description: "Пластик, бумага.",
    types: ["пластик", "бумага"],
  },
  {
    coords: [51.1700, 71.4800],
    name: "Recycle Center Нур-Султан",
    description: "Металл, стекло.",
    types: ["металл", "стекло"],
  },

  // Шымкент
  {
    coords: [42.3417, 69.5901],
    name: "ЭкоЛайф Шымкент",
    description: "Батарейки, пластик.",
    types: ["пластик"],
  },
  {
    coords: [42.3300, 69.5800],
    name: "GreenWay Шымкент",
    description: "Пластик, бумага, металл.",
    types: ["пластик", "бумага", "металл"],
  },

  // Караганда
  {
    coords: [49.8031, 73.1021],
    name: "ЭкоГород Караганда",
    description: "Цикл сортировки.",
    types: ["пластик", "бумага", "металл"],
  },
  {
    coords: [49.8100, 73.1100],
    name: "Recycle Karaganda",
    description: "Пластик и металл.",
    types: ["пластик", "металл"],
  },

  // Актау
  {
    coords: [43.652, 51.1975],
    name: "EcoPoint Актау",
    description: "Пластик, стекло, металл.",
    types: ["пластик", "металл"],
  },
  {
    coords: [43.6550, 51.2000],
    name: "GreenWay Актау",
    description: "Бумага, пластик.",
    types: ["бумага", "пластик"],
  },

  // Актобе
  {
    coords: [50.2839, 57.167],
    name: "KazRecycle Актобе",
    description: "Сбор от бизнеса и граждан.",
    types: ["бумага", "металл"],
  },
  {
    coords: [50.2800, 57.1600],
    name: "EcoHub Актобе",
    description: "Пластик, бумага.",
    types: ["пластик", "бумага"],
  },

  // Костанай
  {
    coords: [53.2194, 63.6287],
    name: "Green Center Костанай",
    description: "Макулатура, металл.",
    types: ["бумага", "металл"],
  },
  {
    coords: [53.2200, 63.6300],
    name: "Recycle KZ Костанай",
    description: "Пластик, бумага.",
    types: ["пластик", "бумага"],
  },

  // Павлодар
  {
    coords: [52.2912, 76.9455],
    name: "EcoPoint Павлодар",
    description: "Пластик, металл.",
    types: ["пластик", "металл"],
  },
  {
    coords: [52.2900, 76.9400],
    name: "Recycle Pavlodar",
    description: "Бумага, пластик.",
    types: ["бумага", "пластик"],
  },

  // Петропавловск
  {
    coords: [54.8753, 69.1617],
    name: "Green Planet Петропавловск",
    description: "Пластик, бумага, металл.",
    types: ["пластик", "бумага", "металл"],
  },
  {
    coords: [54.8700, 69.1600],
    name: "Recycle Center Петропавловск",
    description: "Пластик, металл.",
    types: ["пластик", "металл"],
  },

  // Усть-Каменогорск
  {
    coords: [49.9478, 82.6232],
    name: "Eco Recycling Усть-Каменогорск",
    description: "Пластик, бумага.",
    types: ["пластик", "бумага"],
  },
  {
    coords: [49.9500, 82.6200],
    name: "Green Hub Усть-Каменогорск",
    description: "Металл, стекло.",
    types: ["металл", "стекло"],
  },

  // Талдыкорган
  {
    coords: [45.0000, 78.4000],
    name: "EcoPoint Талдыкорган",
    description: "Пластик, бумага.",
    types: ["пластик", "бумага"],
  },

  // Темиртау
  {
    coords: [49.7722, 72.9333],
    name: "Recycle Temirtau",
    description: "Пластик, металл.",
    types: ["пластик", "металл"],
  },

  // Тараз
  {
    coords: [42.9000, 71.4000],
    name: "EcoCenter Тараз",
    description: "Пластик, бумага.",
    types: ["пластик", "бумага"],
  },

  // Кызылорда
  {
    coords: [44.8500, 65.5000],
    name: "GreenWay Кызылорда",
    description: "Пластик, бумага, металл.",
    types: ["пластик", "бумага", "металл"],
  },

  // Петропавловск (дополнительный)
  {
    coords: [54.8790, 69.1650],
    name: "Recycle Plus Петропавловск",
    description: "Пластик, металл.",
    types: ["пластик", "металл"],
  },
];

let markers = [];

/**
 * Добавляет метки на карту с учётом фильтров по типам отходов
 * @param {string[]} filterTypes - массив активных типов для фильтрации
 */
function addMarkers(filterTypes) {
  // Удаляем предыдущие метки с карты
  markers.forEach((marker) => map.removeLayer(marker));
  markers = [];

  centers.forEach((center) => {
    // Если фильтр пустой или тип отходов совпадает с фильтром
    if (
      filterTypes.length === 0 ||
      center.types.some((type) => filterTypes.includes(type))
    ) {
      const marker = L.marker(center.coords, { icon: greenIcon })
        .addTo(map)
        .bindPopup(`<b>${center.name}</b><br>${center.description}`);

      markers.push(marker);
    }
  });
}

// Изначально показываем все метки с активными фильтрами
const filters = Array.from(document.querySelectorAll(".filter"));
let activeFilters = filters.filter((ch) => ch.checked).map((ch) => ch.value);

addMarkers(activeFilters);

// Обработчик изменения фильтров
filters.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    activeFilters = filters.filter((ch) => ch.checked).map((ch) => ch.value);
    addMarkers(activeFilters);
  });
});

// Кнопка определения геолокации пользователя
const locateBtn = document.getElementById("locate-btn");
locateBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("Геолокация не поддерживается вашим браузером.");
    return;
  }

  locateBtn.disabled = true;
  locateBtn.textContent = "Определяем...";

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      map.setView([latitude, longitude], 14);

      // Добавляем маркер для текущего местоположения пользователя
      const userMarker = L.circleMarker([latitude, longitude], {
        radius: 10,
        color: "#2f7a33",
        fillColor: "#3a9a43",
        fillOpacity: 0.7,
      }).addTo(map);

      userMarker.bindPopup("Вы здесь").openPopup();

      locateBtn.disabled = false;
      locateBtn.textContent = "📍 Мое местоположение";
    },
    () => {
      alert("Не удалось определить местоположение.");
      locateBtn.disabled = false;
      locateBtn.textContent = "📍 Мое местоположение";
    }
  );
});

// --- Сканер QR-кодов ---

const resultContainer = document.getElementById("qr-result");
const productInfo = document.getElementById("product-info");
const rescanBtn = document.getElementById("rescan-btn");
const qrReader = new Html5Qrcode("qr-reader");

/**
 * Получение информации о продукте по штрихкоду с OpenFoodFacts
 * @param {string} barcode - штрихкод продукта
 */
function fetchProductInfo(barcode) {
  productInfo.innerHTML = "Загрузка информации...";
  fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 1) {
        const product = data.product;
        productInfo.innerHTML = `
          <h4>${product.product_name || "Название не найдено"}</h4>
          <p>Бренд: ${product.brands || "Нет данных"}</p>
          <p>Категория: ${product.categories || "Нет данных"}</p>
          <p>Экологичность: ${product.ecoscore_grade || "Нет данных"}</p>
          <a href="${product.url}" target="_blank" rel="noopener noreferrer">Подробнее</a>
        `;
      } else {
        productInfo.innerHTML = "Информация о продукте не найдена.";
      }
    })
    .catch(() => {
      productInfo.innerHTML = "Ошибка при загрузке данных.";
    });
}

function startQrScanner() {
  qrReader
    .start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: 250,
      },
      (decodedText) => {
        qrReader.stop().then(() => {
          resultContainer.style.display = "block";
          fetchProductInfo(decodedText);
        });
      },
      (error) => {
        // Можно логировать ошибки сканирования, если нужно
        // console.warn(`QR scan error: ${error}`);
      }
    )
    .catch((err) => {
      alert(`Ошибка при запуске сканера: ${err}`);
    });
}

// Запуск сканера при загрузке страницы
startQrScanner();

// Кнопка повтора сканирования
rescanBtn.addEventListener("click", () => {
  productInfo.innerHTML = "";
  resultContainer.style.display = "none";
  startQrScanner();
});
