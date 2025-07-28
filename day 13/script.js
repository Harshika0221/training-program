// Image URLs
const images = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1020/600/400"
];

// Create main container
const sliderContainer = document.createElement("div");
sliderContainer.className = "slider-container";
document.body.appendChild(sliderContainer);

// Create image elements
const imgElements = images.map((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.className = "slider-image";
  if (index === 0) img.classList.add("active");
  sliderContainer.appendChild(img);
  return img;
});

// Create Previous button
const prevBtn = document.createElement("button");
prevBtn.id = "prev";
prevBtn.className = "slider-button";
prevBtn.textContent = "<";
sliderContainer.appendChild(prevBtn);

// Create Next button
const nextBtn = document.createElement("button");
nextBtn.id = "next";
nextBtn.className = "slider-button";
nextBtn.textContent = ">";
sliderContainer.appendChild(nextBtn);

// Slide logic
let currentIndex = 0;

function showSlide(index) {
  imgElements.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
});
