import { recipes } from "./dessertrecipe";

const container = document.getElementById("recipe-container");
const modal = document.getElementById("recipe-modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");

console.log("Image URLs:", recipes.map(r => r.image));

recipes.forEach((recipe, index) => {
  const card = document.createElement("div");
  card.classList.add("recipe-card");

  console.log(`Loading image for ${recipe.name}: ${recipe.image}`);

  card.innerHTML = `<img src="${recipe.image}" alt="${recipe.name}"><h3>${recipe.name}</h3><p>Ingredients: ${recipe.countIngredients()} items</p> `;
  
  card.addEventListener("click", () => {
    modalContent.innerHTML = recipe.displayRecipe();
    modal.style.display = "flex";
    gsap.from("#modal-content", { opacity: 0, scale: 0.9, duration: 0.5 });
  });

  container.appendChild(card);

  gsap.fromTo(card,
    { opacity: 0, scale: 0.8, rotate: 10 }, 
    { opacity: 1, scale: 1, rotate: 0, duration: 0.1, delay: index * 0.2, ease: "back.out(0.1)" } 
  );

  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.1, duration: 0.1 });  
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.2 });  
  });
});

function closeModalFunction() {
    gsap.to("#recipe-modal", { opacity: 0, duration: 0.3, onComplete: () => {
      modal.style.display = "none"; 
      modal.style.opacity = "1";    
      modalContent.innerHTML = ''; 
    }});
  }
  
  closeModal.addEventListener("click", closeModalFunction);
  
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModalFunction();
    }
});

window.addEventListener("load", () => {
  gsap.from(".hero-text", {
    x: -200,  
    opacity: 0,
    duration: 1,  
    ease: "power3.out", 
  });

  gsap.from(".hero-img", {
    x: 200,  
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});
