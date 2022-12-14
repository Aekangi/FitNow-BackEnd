'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const dietplan = [
      {
        photo:
          'https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg',
        name: 'Meal Plan to Lose Weight: 1,500 Calories',
        diet_type: 'Weight Loss',
        day1: 'Dinner (507 calories): 1 serving Sheet-Pan Chicken Fajita Bowls with 1/3 cup cooked brown rice.',
        day2: 'Dinner (495 calories):   1 serving Zucchini-Chickpea Veggie Burgers with Tahini-Ranch Sauce serving Oven Sweet-Potato Fries.',
        day3: 'Dinner (475 calories) serving Easy Salmon Cakes over 2 cups baby spinach, 1 (2-inch) piece whole-wheat baguette',
        day4: 'Dinner (521 calories): 1 serving Chicken & Cucumber Lettuce Wraps with Peanut Sauce',
        day5: 'Dinner (454 calories): 1 serving Mediterranean Ravioli with Artichokes & Olives',
        day6: 'Dinner (465 calories): 1 serving Curried Sweet Potato & Peanut Soup, 1 (2-in.) slice whole-wheat baguette',
        day7: 'Dinner (556 calories): 1 1/2 serving Spinach & Artichoke Dip Pasta.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo:
          'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NTc5OTAw/istock-1203599963-jpg.jpg',
        name: 'No-Sugar Weight-Loss Meal Plan',
        diet_type: 'No Sugar',
        day1: 'Dinner (481 calories): 1 serving Salmon with Roasted Red Pepper Quinoa Salad',
        day2: 'Dinner (434 calories): 1 serving Basil Pesto Pasta with Grilled Vegetables',
        day3: 'Dinner (499 calories): 1 serving Creamy Skillet Ranch Chicken & Broccoli, ½ cup cooked brown rice',
        day4: 'Dinner (495 calories): 1 serving Sheet-Pan Steak Fajitas',
        day5: 'Dinner (445 calories): 1 serving Summer Vegetable Gnocchi Salad',
        day6: 'Dinner (400 calories): 1 serving Southwestern Cauliflower Rice Bowls with Shrimp & Avocado Crema',
        day7: 'Dinner (509 calories): 1 serving Grilled Peach & Brie Smothered Chicken, ¾ cup cooked quinoa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo:
          'https://ochsner-craft.s3.amazonaws.com/blog/articles/_930x524_crop_center-center_75_none/healthy-food.jpg',
        name: 'ThePrep: Mediterranean-Diet Dinners',
        diet_type: 'Mediterranean-Diet',
        day1: 'Salad made with: 3/4 cup cooked bulgur, 4 ounces chopped grilled chicken breast',
        day2: '1 turkey burger, 3/4 cup roasted cauliflower and broccoli florets, 3/4 cup brown rice',
        day3: '1/2 cup whole wheat couscous with 2 tablespoons diced bell pepper, 1/4 cup garbanzo beans',
        day4: 'Wrap made with 4 ounces thinly sliced lean roast beef, 1 6-inch whole wheat tortilla,',
        day5: '5 ounces grilled wild salmon, 1/2 cup brown or wild rice, 2 cups mixed baby greens with 1 tablespoon low-fat Caesar dressing',
        day6: '4 ounces red snapper baked with 1 teaspoon olive oil, 1 teaspoon lemon juice, and 1/2 teaspoon no-sodium seasoning, 1 cup spaghetti squash with 1 teaspoon olive oil ',
        day7: '4 ounces lean pork tenderloin stir-fried with onions, garlic, broccoli, and bell pepper, 1/2 cup brown rice, 5 medium tomato slices with 1 teaspoon each chopped ginger',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo:
          'https://www.australianeggs.org.au/assets/keyvisuals/Cereal-and-milk__FocusFillWyIwLjAwIiwiMC4wMCIsMTAyNCw0NTBd.jpg',
        name: 'Helathy Eating',
        diet_type: 'Weight Loss',
        day1: 'Beef Stir-fry: 120g lean beef + 1.5 cups cooked vegetables (eg. carrot, mushroom, celery, capsicum, snow peas) + 1 cup cooked brown rice + 2 tsp sesame oil for cooking.',
        day2: 'Prawn and Kimchi Omelette (1 serve): Served with 2 cup salad and 1 slice wholegrain bread.',
        day3: 'Pork Chops and Vegetables: 120g lean grilled pork chops + 1 medium baked potato + 1.5 cups cooked vegetables (eg. carrot, squash, broccoli) + 2 tsp oil in cooking or as a dressing.',
        day4: 'Beef Ramen (1 serve): Served with additional 2 cup cooked vegetables.',
        day5: 'Grilled Chicken and Vegetables: 100g grilled chicken + 1.5 cups vegetables (eg. carrot, broccoli, eggplant) + 1 medium corn on the cob',
        day6: '1/2 cup whole wheat couscous with 2 tablespoons diced bell pepper, 1/4 cup garbanzo beans',
        day7: 'Grilled Salmon and Vegetables: 125g salmon + 1 cup cooked brown rice + 1.5 cups steamed vegetables (eg. cauliflower, broccoli, squash).',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo:
          'https://www.nycfoodpolicy.org/wp-content/uploads/2021/03/shutterstock_645842161-2.jpg',
        name: '7-Day Weight Loss Meal Plan',
        diet_type: 'Weight Loss',
        day1: '4 ounces grilled sirloin steak, 1 small baked potato, 1 cup steamed mixed vegetables',
        day2: '6 ounces grilled chicken breast, 1 cup steamed broccoli',
        day3: '6 ounce 97% lean ground beef burger, 1 slider-size hamburger bun, 2 slices tomato, 2 lettuce leaves, 1 tablespoon ketchup, 2 slices red onion',
        day4: '6 ounces 99% fat-free ground turkey breast, sauteed in 1 teaspoon olive oil and mixed with 1/4 cup marinara sauce, 2 cups steamed zucchini noodles',
        day5: '4 ounces grilled chicken breast, 1/2 cup cooked brown rice, 1 tablespoon butter, 1 cup steamed mixed vegetables',
        day6: '6 ounces grilled salmon, 6 large steamed asparagus spears',
        day7: '4 ounces grilled chicken breast, 1 cup steamed stir fry vegetables, 1/2 cup cooked white rice, 1 tablespoon teriyaki sauce',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo: 'https://www.onemedical.com/media/images/5_Sb7CBCu.original.jpg',
        name: 'Healthful Meal Plan For Males',
        diet_type: 'Healthy',
        day1: 'Greek mac and cheese casserole, a portion of steamed broccoli, asparagus, or another green vegetable. Greek yogurt with berries and nuts for dessert.',
        day2: 'Salmon with pineapple-avocado salsa and a portion of leafy greens. Cocoa chia seed pudding, a handful of strawberries, and an oat milk hot drink before bed.',
        day3: 'Chicken and vegetable stir fry served with 1 cup of steamed brown rice, two squares of dark chocolate, and a handful of walnuts.',
        day4: 'Veggie Korean bibimbap, kombucha drink.',
        day5: 'Rotisserie chicken tacos with pineapple salsa, a small baked sweet potato, a portion of arugula, two squares of dark chocolate with a handful of walnuts.',
        day6: 'One medium baked potato, 100 g chili, 28 g creme fraiche, a portion of leafy greens, three squares of dark chocolate with a handful of walnuts.',
        day7: 'Slow cooker sweet potato curry served with one cup of cauliflower rice, one wheat paratha, a satsuma.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo:
          'https://www.chatelaine.com/wp-content/uploads/2014/12/healthy-ingredient-swaps-comfort-food.jpg',
        name: 'Healthful Meal Plan For Females',
        diet_type: 'Healthy',
        day1: 'Veggie Korean bibimbap, kombucha drink, a portion of banana and Greek yogurt.',
        day2: 'Sautéed shrimp with mango salsa & coconut cauliflower rice, a banana, and a few walnuts.',
        day3: 'Chicken and vegetable stir fry served with 1 cup of steamed brown rice, two squares of dark chocolate with a handful of walnuts.',
        day4: 'Slow cooker sweet potato curry served with 1 cup of steamed cauliflower rice, one wheat paratha, a satsuma, a kombucha drink.',
        day5: 'Slow cooker peanut chicken with broccoli, a baked sweet potato drizzled with extra virgin olive oil, a portion of steamed kale.',
        day6: 'One medium baked potato, 100 g chili, 28 g creme fraiche, a portion of steamed broccoli.',
        day7: 'Rotisserie chicken tacos with pineapple salsa, a portion of watercress, two squares of dark chocolate with some Brazil nuts.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo:
          'https://www.atkins.com/wp-content/uploads/2021/08/GettyImages-1129381764.jpg',
        name: ' Keto Diet Meal Plan',
        diet_type: 'Keto Diet',
        day1: 'Dinner (3.8g net carbs): Baked Catfish with Broccoli and Herb-Butter Blend',
        day2: 'Dinner (3.2g net carbs): 7 oz bone-in pork chop with Cauliflower-Cheddar Mash',
        day3: 'Dinner (7.6g net carbs): Beef Sauteed with Vegetables Over Romaine',
        day4: 'Dinner (5.4g net carbs): 5 oz hamburger topped with 1 oz pepper jack cheese, 1 small tomato, ½ Hass avocado, and 2 romaine lettuce leaves',
        day5: 'Dinner (6g net carbs): Half of a California cobb salad with ranch dressing from California Pizza Kitchen',
        day6: 'Dinner (7.8g net carbs): 5 oz Italian sausage, ¼ medium onion sliced, and ½ red bell pepper sliced with a side of 2 cups baby spinach, ½ cup sliced mushrooms, and 2 Tbsp Blue Cheese Dressing',
        day7: 'Dinner (9.9g net carbs): Baked Salmon With Charmoula Over Broccoli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo:
          'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1120w,f_auto,q_auto:best/newscms/2017_01/1186204/hoda-plan-shrimp-broc-linguini-dinnert-inline-today-170106.jpg',
        name: 'Mediterranean diet plan',
        diet_type: 'metabolism and energy',
        day1: 'Quinoa and black bean stuffed peppers',
        day2: 'Chicken-vegetable kebabs and cous cous',
        day3: 'Pesto salmon with artichokes and potato',
        day4: 'Shrimp broccoli scampi',
        day5: 'Grilled fish with veggies and soup appetizer',
        day6: 'Greek turkey burger with salad',
        day7: 'Spanish Paella',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo:
          'https://cdn.mos.cms.futurecdn.net/cGYXj5P9kxZKTTWnj3uWp4-1920-80.jpg.webp',
        name: '7-day keto diet plan & meals',
        diet_type: 'keto diet',
        day1: 'Dinner: Cabbage soup with sausage, greens, and melted parmesan',
        day2: 'Dinner: Chicken parmesan with tomato sauce and zucchini noodles. ',
        day3: 'Dinner: Broccoli-cheese soup.',
        day4: 'Dinner: Spaghetti squash boats with shrimp, tomato sauce, and melted mozzarella.',
        day5: 'Dinner: Bun-less cheeseburgers with homemade aioli and bacon.',
        day6: 'Dinner: Lettuce wraps with ground pork stir-fried with onions, soy sauce, and sriracha.',
        day7: 'Dinner: Zucchini boats filled with Italian-flavored ground beef, sausage, and cheese. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo:
          'https://femina.wwmindia.com/content/2021/feb/healthy-foods-diet-chart-for-weight-loss-infographic.jpg',
        name: 'Diet Plan For Weight Loss',
        diet_type: 'Weight Loss',
        day1: '1/2 cup egg whites, 1 tsp extra virgin olive oil, 5 cherry tomatoes, 1 slice whole-wheat toast, 1/2 cup raspberries, 1 cup skim milk.',
        day2: '1 cup low-fat Greek yogurt and 1/2 cup strawberry halves.',
        day3: 'Buddha bowl: 3/4 cup cooked bulgur, 113 g grilled chicken, 1 tbsp vegan cheese, 2 tbsp chopped onion, 1/4 cup sliced zucchini, 1/2 cup chopped bell pepper, 1 tbsp cilantro, 2 tbsp tahini.',
        day4: '133 g grilled salmon, 1 cup wild rice, 1 tbsp almonds, 2 cups baby spinach, 1 tbsp olive oil, 1 tbsp balsamic vinegar, 1/2 cup cubed cantaloupe.',
        day5: 'Nourish bowl: 1/2 cup cooked quinoa, 1/2 cup butternut squash, 1 tsp olive oil, 1/2 medium sized avocado, 2 tbsp cilantro, 1 cup kale, 85 g grilled chicken',
        day6: 'Chicken Tahini and Cucumber Salad',
        day7: 'Grilled Chicken with Nectarine Salsa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        photo:
          'https://images.squarespace-cdn.com/content/v1/6166dd06bfccf36849f1c9eb/30170db0-8394-4853-9a01-0ebc324acef5/Mediterranean+chicken+salad.png?format=1500w',
        name: 'Mediterranean Diet Meal Plan for Beginners',
        diet_type: 'Mediterranean Diet',
        day1: 'Greek Shrimp & Feta Skillet',
        day2: 'Spinach Artichoke Chicken Skillet',
        day3: 'Dinner: Comforting Chicken Soup',
        day4: 'Dinner: Jambalaya',
        day5: 'Dinner: One Pot Turkey Chili',
        day6: 'Dinner: Baked Mediterranean Shrimp with Tomatoes & Feta',
        day7: 'Dinner: Perfectly Roasted Whole Chicken with Roasted Broccoli, Quinoa & Feta Cheese Crumbles',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('diet_plans', dietplan)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('diet_plans')
  }
}
