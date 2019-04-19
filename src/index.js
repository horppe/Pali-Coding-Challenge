import "@babel/polyfill";

import fetch from 'node-fetch';
import express from 'express';
import bodyParser from 'body-parser';


var app = express()

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));
 
app.post('/', async (req, res) =>{
    console.log("Request Body", req.body);
    const mealIdList = req.body.mealIdList;
    const errorResults = [];
    
    // Counter variables
    let currentMealId;
    let currentIngredientCount = 0;

    // Record Variables
    let leastMealIngId;
    let leastMealIngCount = 0;

    if(mealIdList && mealIdList.length){
        for (let i = 0; i < mealIdList.length; i++) {
            const mealId = mealIdList[i];
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const responseObj = await response.json();

            if(responseObj.meals.length > 0){
                console.log("Request has valid parameters")
                // Update current mealId for match
                currentMealId = mealId
                currentIngredientCount = 0;

               const meal = responseObj.meals[0];
               for(let key in meal) {
                   if(key.indexOf('strIngredient') !== -1 && meal[key] !== ""){
                       // Ingredient match found
                       console.log("Ingredient found in " + mealId + "Current ingrdient count is " + currentIngredientCount)
                       currentIngredientCount++;
                   }
               }

               console.log("After counting, curent count is: " + currentIngredientCount)
               // After counting the ingredients..
               if(leastMealIngCount == 0){
                   // Update the match found variable
                   leastMealIngCount = currentIngredientCount;
                   leastMealIngId = currentMealId;
               } else if (currentIngredientCount < leastMealIngCount) {
                   // Update the match found variable
                   leastMealIngCount = currentIngredientCount;
                   leastMealIngId = currentMealId;
               }

               


            } else {
                errorResults.push(`Sorry meal with id of ${mealId} could not be found`);
            }
        }
        // Handle results
        if(errorResults.length > 0) {
            return res.json({errors: errorResults});
        } else {
            return res.json({leastIngredientMeal: leastMealIngId})
        }

    } else {
       return res.send("Please test this service with a post request with a body that contains a 'mealIdList' property which is an array of Meal Ids");
    }
  
//  res.send("Hello World\n")
    
})
 
app.listen(3000, () => {
    console.log("The server is listening at Port: 3000")
})