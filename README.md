
## Welcome to the {Home.Recipe} Application

[Link to project on heroku](https://jcgould-home-recipes.herokuapp.com/)

This app was made possible by the [Spoonacular API](https://spoonacular.com/food-api)



Available routes:

Route | Name| Description 
------------ | ------------- | -------------
/ | Home |Main page which allows for more navigation once users are registered and log in 
||| 
**/api/users...**| |
|||
/register| Register | New Users can register to use app
/login| Login | Registered users can login to use the app
/logout | Logout | Users can log out of app
/profile| User Profile | Users can see their profile information
/update-profile| Update Profile | Users can update their name, email, and password 
|||
**/api/admin...**| |
|||
/add-category | Add Category | Users and admin can add categories to help organize recipes
|||
|**/api/main...**||
|||
/search-recipe| Search Recipe | Enter one or multiple ingredients into search bar to find relevant recipes
/list-recipes| List Recipes | Lists recipes that include the ingredients enter in the search bar
/single-recipe/:recipe-ID | Single Recipe | Provides a more detailed look at an individual recipe based off of user selection
/extract-recipe | Extract Recipe | Allows users to bring in recipes from other webpages
/category-recipes/:category-ID| Categorized Recipes | Shows all the recipes the user saved in that specific category
/shopping-list | Shopping List | Provides a quick and convenient list of the ingredients needed for the recipe
/home-joke | Joke | A quick food joke bonus for users
|||
|||

#### Users have the option to save or delete any recipe once they are at the individual recipe's page.

***

## If you would like to work with this App locally:

1. Fork and clone this repository
2. Install all dependencies
3. Sign up for a Spoonacular API Key
4. Create .env file and populate it with the following.

   * PORT = Number of your preferred port
    * SESSION_SECRET = 'Any string of text'
     * MONGODB_URI = 'Path to your MongoDB storage'
   * API_KEY = 'The unique API Key you received after signing up at Spoonacular'

