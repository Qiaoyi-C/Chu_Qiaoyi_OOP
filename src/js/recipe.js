export class recipe {
  constructor(name, ingredients, instructions, image) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.image = image;
  }

  countIngredients() {
    return this.ingredients.length;
  }

  displayRecipe() {
    return `
      <h2 class="modal-title">${this.name}</h2>
      <img class="modal-image" src="${this.image}" alt="${this.name}">
      
      <div class="recipe-details">
        <h3>Ingredients</h3>
        <ul class="recipe-list">
          ${this.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
  
        <h3>Steps</h3>
        <ol class="recipe-list">
          ${this.instructions.map(step => `<li>${step}</li>`).join("")}
        </ol>
      </div>
    `;
  }

  countIngredients() {
    return this.ingredients.length;
  }
}

export class dessertrecipe extends recipe {
  constructor(name, ingredients, instructions, image, sweetness) {
    super(name, ingredients, instructions, image);
    this.sweetness = sweetness; 
  }

  displayRecipe() {
    let sweetnessTag = this.sweetness ? `<p class="sweetness">Sweetness Level: ${this.sweetness}</p>` : '';
    return `
      <h2 class="modal-title">${this.name}</h2>
      ${sweetnessTag} 
      <img class="modal-image" src="${this.image}" alt="${this.name}">
      <div class="recipe-details">
        <h3>Ingredients</h3>
        <ul class="recipe-list">
          ${this.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
        <h3>Steps</h3>
        <ol class="recipe-list">
          ${this.instructions.map(step => `<li>${step}</li>`).join("")}
        </ol>
      </div>
    `;
  }
}
