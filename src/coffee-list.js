const coffeeList = [
  {
    name: "Espresso",
    description:
      "The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.",
    ratio: "1 shot of espresso",
    cupType: "2-4 oz Espresso cup",
    drinkColors: "#3d0c02",
  },
  // {
  //   name: "Double Espresso",
  //   description:
  //     "A double espresso may also be listed as doppio, which is the Italian word for double. This drink is highly concentrated and strong.",
  //   ratio: "2 shots of espresso",
  //   cupType: "3-4 oz Demitasse Cup",
  //   drinkColors: "#3d0c02",
  // },
  {
    name: "Red Eye",
    description:
      "The red eye’s purpose is to add a boost of caffeine to your standard cup of coffee.",
    ratio: "1 shot of espresso + 6 oz drip-brewed coffee",
    cupType: "8 oz coffee mug",
    drinkColors: "linear-gradient(to top, #3d0c02 25%, #74362a 25% 100%)",
  },
  // {
  //   name: "Black Eye",
  //   description: "The black eye is the doubled version of the red eye is very high in caffeine.",
  //   ratio: "2 shots of espresso + 6 oz of drip-brewed coffee",
  //   cupType: "8-10 oz coffee mug",
  //   drinkColors: "linear-gradient(to top, #3d0c02 40%, sienna 40% 100%)",
  // },
  {
    name: "Americano",
    description:
      "Americanos are popular breakfast drinks and thought to have originated during World War II. Soldiers would add water to their coffee to extend their rations farther. The water dilutes the espresso while still maintaining a high level of caffeine.",
    ratio: "1 shot of espresso + 3 oz of hot water",
    cupType: "5-6 oz glass coffee mug",
    drinkColors: "linear-gradient(to top, #3d0c02 30%, #add8e5 30% 100%)",
  },
  // {
  //   name: "Long Black",
  //   description:
  //     "The long black is a similar coffee drink to the americano, but it originated in New Zealand and Australia. It generally has more crema than an americano.",
  //   ratio: "2 shots of espresso + 3 oz of hot water",
  //   cupType: "6-8 oz glass coffee mug",
  // },
  {
    name: "Macchiato",
    description:
      "The word macchiato means mark or stain. This is in reference to the mark that steamed milk leaves on the surface of the espresso as it is dashed into the drink. Flavoring syrups are often added to the drink according to customer preference.",
    ratio: "1 shot of espresso + 1-2 teaspoons of steamed milk",
    cupType: "3 oz glass espresso cup",
    drinkColors: "linear-gradient(to top, #3d0c02 80%, #FDFFF5 80% 100%)",
  },
  // {
  //   name: "Long Macchiato",
  //   description:
  //     "Often confused with a standard macchiato, the long macchiato is a taller version and will usually be identifiable by its distinct layers of coffee and steamed milk.",
  //   ratio: "2 shots of espresso + 2-4 teaspoons of steamed milk",
  //   cupType: "5 oz rocks glass",
  // },
  {
    name: "Cortado",
    description:
      "The cortado takes the macchiato one step further by evenly balancing the espresso with warm milk in order to reduce the acidity.",
    ratio: "1 shot of espresso + 1 oz of warm milk + 1 cm of foam",
    cupType: "5 oz rocks glass",
    drinkColors: "linear-gradient(to top, #3d0c02 50%, #EAE1D8 50% 80%, #EEEEEE 80% 100%)",
  },
  {
    name: "Breve",
    description:
      "The breve provides a decadent twist on the average espresso, adding steamed half-and-half to create a rich and creamy texture.",
    ratio: "1 shot of espresso + 3 oz of steamed half-and-half + 1 cm  of foam",
    cupType: "5-7 oz low cup",
    drinkColors: "linear-gradient(to top, #3d0c02 25%, #FFF9F5 25% 90%, #EEEEEE 90% 100%)",
  },
  {
    name: "Cappuccino",
    description:
      "This creamy coffee drink is usually consumed at breakfast time in Italy and is loved in the United States as well. It is usually associated with indulgence and comfort because of its thick foam layer and additional flavorings that can be added to it.",
    ratio:
      "1-2 shots of espresso + 2 oz of steamed milk + 2 oz of foamed milk + sprinkling of chocolate powder (optional)",
    cupType: "6-8 oz cappuccino mug",
    drinkColors:
      "linear-gradient(to top, #3d0c02 35%, #FDFFF5 35% 65%, #EEEEEE 65% 95%, #A35F1A 95% 100%)",
  },
  {
    name: "Flat White",
    description:
      "A flat white also originates from New Zealand and Australia and is very similar to a cappuccino but lacks the foam layer and chocolate powder. To keep the drink creamy rather than frothy, steamed milk from the bottom of the jug is used instead of from the top.",
    ratio: "1 shot of espresso + 4 oz of steamed milk",
    cupType: "6 oz glass tumbler",
    drinkColors: "linear-gradient(to top, #3d0c02 25%, #FDFFF5 25% 100%)",
  },
  {
    name: "Cafe Latte",
    description:
      "Cafe lattes are considered an introductory coffee drink since the acidity and bitterness of coffee are cut by the amount of milk in the beverage. Flavoring syrups are often added to the latte for those who enjoy sweeter drinks.",
    ratio: "1 shot of espresso + 8-10 oz of steamed milk + 1 cm of foam",
    cupType: "14 oz mixing glass",
    drinkColors: "linear-gradient(to top, #3d0c02 35%, #FDFFF5 35% 90%, #EEEEEE 90% 100%)",
  },
  {
    name: "Mocha",
    description:
      "The mocha is considered a coffee and hot chocolate hybrid. The chocolate powder or syrup gives it a rich and creamy flavor and cuts the acidity of the espresso. of coffee are cut by the amount of milk in the beverage. Flavoring syrups are often added to the latte for those who enjoy sweeter drinks.",
    ratio:
      "1 shot of espresso + 1-2 oz. of chocolate syrup/powder + 1-3 oz. of steamed milk + 2-3 cm of foam or whipped cream",
    cupType: "6-8 oz Irish coffee mug",
    drinkColors:
      "linear-gradient(to top, #3d0c02 25%, #A35F1A 25% 50%, #FDFFF5 50% 85%,  #EEEEEE 85% 100%)",
  },
  {
    name: "Vienna",
    description:
      "There are a few variations on the Vienna, but one of the most common is made with two ingredients: espresso and whipped cream. The whipped cream takes the place of milk and sugar to provide a creamy texture.",
    ratio: "1-2 shots of espresso + 2 oz. of whipped cream",
    cupType: "4-5 oz espresso mug",
    drinkColors: "linear-gradient(to top, #3d0c02 50%, #F0FFFF 50% 100%)",
  },
  {
    name: "Affogato",
    description:
      "Affogatos are more for a dessert coffee than a drink you would find at a cafe, but they can add a fun twist to your coffee menu. They are made by pouring a shot of espresso over a scoop of vanilla ice cream to create a sweet after-meal treat.",
    ratio: "1-2 shots of espresso + 1 scoop of vanilla ice cream",
    cupType: "5-7 oz dessert dish",
    drinkColors: "linear-gradient(to top, #3d0c02 50%, #F9F3D2 50% 100%)",
  },
  {
    name: "Cafe au Lait",
    description:
      "The cafe au lait is typically made with French press coffee instead of an espresso shot to bring out the different flavors in the coffee. It is then paired with scalded milk instead of steamed milk and poured at a 50/50 ratio.",
    ratio: "5 oz. French press coffee + 5 oz. scalded milk",
    cupType: "12 oz coffee mug",
    drinkColors: "linear-gradient(to top, #96210A 50%, #E6C9AC 50% 100%)",
  },
  {
    name: "Iced Coffee",
    description:
      "Iced coffees become very popular in the summertime in the United States. The recipes do have some variance, with some locations choosing to interchange milk with water in the recipe. Often, different flavoring syrups will be added per the preference of the customer.",
    ratio:
      "2 oz. drip coffee or espresso + 4 oz. of ice + 4-6 oz of milk or water + flavoring syrup to taste",
    cupType: "14 oz mixing glass",
    drinkColors: "radial-gradient(lightblue 35%, #74362A 35%) center/20px 20px",
  },
]

export default coffeeList
