import { dessertrecipe } from "./recipe.js";
import chocolateCake from "../images/chocolate_cake.jpg";
import strawberryPannaCotta from "../images/strawberry_panna_cotta.jpg";
import MatchaMilleCrepeCake from "../images/matcha_mille_crepe_cake.jpg";
import CaramelPudding from "../images/caramel_pudding.jpg";
import BlueberryCheesecake from "../images/blueberry_cheesecake.jpg";
import Tiramisu from "../images/tiramisu.jpg";

export const recipes = [
  new dessertrecipe(
    "Chocolate Cake",
    ["1 cup all-purpose flour", "1 cup sugar", "1/2 cup cocoa powder", "1 tsp baking powder", "1/2 tsp baking soda", "1/2 tsp salt", "1/2 cup milk", "1/2 cup vegetable oil", "2 eggs", "1 tsp vanilla extract", "1/2 cup boiling water"],
    [
      "Preheat the oven to 350°F (175°C). Grease and flour a cake pan.",
      "In a bowl, mix flour, sugar, cocoa powder, baking powder, baking soda, and salt.",
      "Add milk, oil, eggs, and vanilla. Mix until smooth.",
      "Stir in boiling water (batter will be thin).",
      "Pour the batter into the prepared pan and bake for 30-35 minutes.",
      "Let the cake cool before serving."
    ],
    chocolateCake,
    "High"
  ),
  new dessertrecipe(
    "Strawberry Panna Cotta",
    ["1 cup heavy cream", "1/2 cup milk", "1/4 cup sugar", "1 tsp vanilla extract", "1 packet gelatin (about 2 1/4 tsp)", "1 cup fresh strawberries, chopped", "2 tbsp sugar (for strawberries)"],
    [
      "Make the batter: Mix flour, matcha, eggs, sugar, milk, and melted butter until smooth.",
      "Cook the crepes: Heat a pan and cook small crepes for 1-2 minutes on each side.",
      "Whip the cream: Beat heavy cream and powdered sugar until soft peaks form.",
      "Assemble: Layer crepes with whipped cream in between.",
      "Chill: Refrigerate for 2 hours."
    ],
    strawberryPannaCotta,
    "Medium" 
  ),
  new dessertrecipe(
    "Matcha Mille Crepe Cake ",
    ["1 cup flour", "2 tbsp matcha powder", "2 cups milk", "2 eggs", "2 tbsp butter", "2 tbsp sugar", "2 cups heavy cream", "2 tbsp powdered sugar"],
    [
      "Make the batter: Mix flour, matcha, eggs, sugar, milk, and melted butter until smooth.",
      "Cook the crepes: Heat a pan and cook small crepes for 1-2 minutes on each side.",
      "Whip the cream: Beat heavy cream and powdered sugar until soft peaks form.",
      "Assemble: Layer crepes with whipped cream in between.",
      "Chill: Refrigerate for 2 hours."
    ],
    MatchaMilleCrepeCake,
    "Low"
  ),
  new dessertrecipe(
    "Caramel Pudding",
    ["1/2 cup sugar", "2 tbsp water", "2 cups milk", "3 eggs", "1/4 cup sugar (for custard)", "1 tsp vanilla extract"],
    [
      "Make the caramel: In a pan, heat 1/2 cup sugar and 2 tbsp water over medium heat until the sugar melts and turns golden brown. Carefully pour into ramekins to coat the bottom.",
      "Make the custard: In a bowl, whisk together eggs, 1/4 cup sugar, and vanilla. Heat the milk in a pan until warm, then slowly pour it into the egg mixture while stirring.",
      "Assemble: Pour the custard mixture over the caramel in the ramekins.",
      "Bake: Place the ramekins in a baking dish and fill the dish with hot water halfway up the sides of the ramekins. Bake at 325°F (160°C) for 45-50 minutes, or until set.",
      "Cool: Let the pudding cool, then refrigerate for at least 2 hours before serving."
    ],
    CaramelPudding,
    "High"
  ),
  new dessertrecipe(
    "Blueberry Cheesecake",
    ["1 1/2 cups graham cracker crumbs", "1/4 cup sugar", "1/2 cup butter, melted", "2 packs cream cheese (16 oz)", "1 cup sugar", "3 eggs","1 cup blueberries" ],
    [
      "Preheat oven to 325°F (160°C). Mix graham cracker crumbs, sugar, and butter. Press into a 9-inch pan and bake for 10 minutes.",
      "Beat cream cheese and sugar until smooth. Add eggs, vanilla, and sour cream. Pour over crust and bake for 55-60 minutes. Cool and refrigerate for 4 hours.",
      "In a pan, cook blueberries, sugar, and lemon juice until soft. Cool",
      "Top cheesecake with blueberries before serving."
    ],
    BlueberryCheesecake,
    "Medium" 
  ),
  new dessertrecipe(
    "Tiramisu",
    ["8 oz (225g) mascarpone cheese, softened", "1 cup (240ml) heavy cream", "¼ cup (50g) granulated sugar","1 teaspoon vanilla extract" ],
    [
      "Prepare the coffee mixture by combining the brewed coffee and coffee liqueur.",
      "Whip the heavy cream until stiff peaks form.",
      "Mix mascarpone cheese with powdered sugar and vanilla extract.",
      "Fold whipped cream into the mascarpone mixture.",
      "Dip ladyfingers into the coffee mixture and layer in a serving dish.",
      "Spread half of the mascarpone mixture over the ladyfingers.",
      "Repeat with another layer of dipped ladyfingers and the remaining mascarpone mixture.",
      "Chill for at least 4 hours or overnight.",
      "Dust with cocoa powder before serving."
    ],
    Tiramisu,
    "Low"
  )
];

recipes.forEach(recipe => {
  console.log(`${recipe.name} has ${recipe.countIngredients()} ingredients.`);
});