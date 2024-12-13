//Select Landing page Element
let landingPage = document.querySelector(".landingpage");

//get arrey of imges
let imgesarr = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
];

setInterval(() => {
  //get random number

  let randomnumber = Math.floor(Math.random() * imgesarr.length);

  // chang back Ground URL
  landingPage.style.backgroundImage =
    'url("./imge/' + imgesarr[randomnumber] + '")';
}, 10000);

//sherch ingen
// ملف script.js

// بيانات العقارات
const properties = [
  {
    id: 1,
    name: "شقة فاخرة",
    type: "شقة",
    location: "القاهرة",
    price: "500,000 جنيه",
  },
  {
    id: 2,
    name: "فيلا عائلية",
    type: "فيلا",
    location: "الإسكندرية",
    price: "2,000,000 جنيه",
  },
  {
    id: 3,
    name: "مكتب حديث",
    type: "مكتب",
    location: "الجيزة",
    price: "750,000 جنيه",
  },
  {
    id: 4,
    name: "شقة اقتصادية",
    type: "شقة",
    location: "طنطا",
    price: "300,000 جنيه",
  },
  {
    id: 5,
    name: "فيلا فاخرة",
    type: "فيلا",
    location: "العين السخنة",
    price: "5,000,000 جنيه",
  },
];

// دالة البحث
function searchProperties() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("results");

  // تصفية العقارات بناءً على البحث
  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(query) ||
      property.type.toLowerCase().includes(query) ||
      property.location.toLowerCase().includes(query)
  );

  // عرض النتائج
  resultsContainer.innerHTML = "";
  if (filteredProperties.length > 0) {
    filteredProperties.forEach((property) => {
      const propertyItem = document.createElement("div");
      propertyItem.className = "result-item";
      propertyItem.innerHTML = `
                  <h3>${property.name}</h3>
                  <p><strong>النوع:</strong> ${property.type}</p>
                  <p><strong>الموقع:</strong> ${property.location}</p>
                  <p><strong>السعر:</strong> ${property.price}</p>
              `;
      resultsContainer.appendChild(propertyItem);
    });
  } else {
    resultsContainer.innerHTML = "<p>لم يتم العثور على نتائج.</p>";
  }
}
