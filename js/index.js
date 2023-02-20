/*  ----------------------------------------------------------------------------------  */
/*  ----- ----------------------------------------------------  Side NavBar  -------   */
let sideleftwidth =  $(".sideleft").outerWidth();
$(".toggle").click(function () { 
    if ($(".sidenavbar").css("left") == "0px"){
        closeSidebar ();
    }
    else {
        openSidebar ();
    }
});
function openSidebar () { 
    $(".sidenavbar").animate({left: "0px"},700);
    $(".toggle").addClass("fa-x");
    $(".toggle").removeClass("fa-bars");   
 }
function closeSidebar () { 
    $(".sidenavbar").animate({left: -sideleftwidth},700);
    $(".toggle").addClass("fa-bars");
    $(".toggle").removeClass("fa-x");   
 }
 closeSidebar ();

/*  --------------------------------------------------------------   End NavBar  -------   */
let homesection = document.getElementById("homesection");
let contactsection = document.getElementById("contactsection");
let searchsection = document.getElementById("searchsection");

async function homeMeals(term) { 
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    response = await response.json();
    let meals = response.meals;
    displayMeals(meals);
 }
 function displayMeals(mealsarr){
     let cartoona = ``;
     for(let i = 0 ; i < mealsarr.length ; i++){
        cartoona += `
            <div class="col-md-4 col-sm-6 col-12 p-2 mealsPointer" onclick="getMealsDetails('${mealsarr[i].idMeal}')">
            <div class="card w-100 " >
                <img src=${mealsarr[i].strMealThumb} class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title text-black text-center text-capitalize fw-bold">${mealsarr[i].strMeal}</h5>
                </div>
              </div>
        </div>
       `
     }
     homesection.innerHTML = cartoona;
     contactsection.innerHTML = `` ;
     searchsection.innerHTML = `` ;
 }
 homeMeals("");
/*  --------------------------------------------------------------   start start start Categories  -------   */
async function getCategories() { 
     let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
     response = await response.json();
     categoriesDisplay(response.categories)
 }
 function categoriesDisplay(categories){
    let cartoona = ``;
    for(let i = 0 ; i < categories.length ; i++){
       cartoona += `
           <div class="col-md-4 col-sm-6 col-12 p-2 mealspointer" onclick="categoryMeals('${categories[i].strCategory}')">
           <div class="card w-100 border-0" >
               <img src=${categories[i].strCategoryThumb} class="card-img-top" alt="">
               <div class="card-body w-100 ">
                 <h3 class="card-title text-black text-center text-capitalize fw-bold">${categories[i].strCategory}</h3>
                 <a href="#" class="btn btn-outline-danger w-100"> See More <i class="mx-1 fa-solid fa-arrow-right"></i> </a>
               </div>
             </div>
       </div>
      `
    }
    homesection.innerHTML = cartoona ;
    contactsection.innerHTML = `` ;
    searchsection.innerHTML = `` ;
}
 /*  --------------------------------------------------------------   End End End Categories  -------   */
 
 /*  --------------------------------------------------------------   Start Start Start Area -------   */
async function getIngridents() { 
     let response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
     response = await response.json();
     ingridentsDisplay(response.meals.slice(0 , 20))
     console.log(response)
 }
 function ingridentsDisplay(ingridents){
    let cartoona = ``;
    for(let i = 0 ; i < ingridents.length ; i++){
       cartoona += `
            <div class="col-md-4 col-sm-6 col-12 mealspointer" onclick="ingredienytsMeals('${ingridents[i].strIngredient}')">
            <div class="card w-100 border-0 mealspointer" >
                <div class="card-body w-100 text-center area">
                    <i class="fa-solid fa-utensils p-3 my-1 icondetail"></i>
                    <h6 class="card-title text-black text-center text-capitalize fw-bold">${ingridents[i].strIngredient.split(" ").slice(0,3).join(" ")}</h6>
                    <a href="#" class="btn btn-outline-danger w-100 seemorebtn"> See More <i class="mx-1 fa-solid fa-arrow-right"></i> </a>
                </div>
            </div>
        </div>
      `
    }
    homesection.innerHTML = cartoona ;
    contactsection.innerHTML = `` ;
    searchsection.innerHTML = `` ;
}
 /*  --------------------------------------------------------------   End End End Area -------   */
 /*  --------------------------------------------------------------   Start Start Start Area -------   */
async function getInArea() { 
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
     response = await response.json();
     areaDisplay(response.meals)
     console.log(response)
 }
 function areaDisplay(area){
    let cartoona = ``;
    for(let i = 0 ; i < area.length ; i++){
       cartoona += `
            <div class="col-md-4 col-sm-6 col-12 mealspointer" onclick="areaMeals('${area[i].strArea}')">
                <div class="card w-100 border-0" >
                    <div class="card-body w-100 text-center area">
                        <i class="fa-solid fa-house p-3 my-1 icondetail"></i>
                        <h6 class="card-title text-black text-center text-capitalize fw-bold">${area[i].strArea}</h6>
                        <a href="#" class="btn btn-outline-danger w-100 seemorebtn"> See More <i class="mx-1 fa-solid fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
      `
    }
    homesection.innerHTML = cartoona ;
    contactsection.innerHTML = `` ;
    searchsection.innerHTML = `` ;
}
 /*  --------------------------------------------------------------   End End End Area -------   */

 async function categoryMeals(category) { 
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
     response = await response.json();
     console.log(response)
     categoriesMealsDisplay(response.meals)
  }
  function categoriesMealsDisplay(meal){
    let cartoona = ``;
    for(let i = 0 ; i < meal.length ; i++){
       cartoona += `
           <div class="col-md-4 col-sm-6 col-12 p-2 mealsPointer" onclick="getMealsDetails('${meal[i].idMeal}')">
           <div class="card w-100 " >
               <img src=${meal[i].strMealThumb} class="card-img-top" alt="">
               <div class="card-body">
                 <h5 class="card-subtitle text-black text-center  fw-bold my-1">${meal[i].strMeal.split(" ").slice(0,2).join(" ")}</h5>
               </div>
             </div>
           </div>
      `
    }
    homesection.innerHTML = cartoona;
    contactsection.innerHTML = `` ;
    searchsection.innerHTML = `` ;
}

 /*  ----------------------------------------------------------------------------------   */

 async function ingredienytsMeals(ingredient) { 
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
     response = await response.json();
     console.log(response)
     ingredientMealsDisplay(response.meals.slice(0,20))
  }
  function ingredientMealsDisplay(meal){
    let cartoona = ``;
    for(let i = 0 ; i < meal.length ; i++){
       cartoona += `
           <div class="col-md-4 col-sm-6 col-12 p-2 mealsPointer" onclick="getMealsDetails('${meal[i].idMeal}')">
           <div class="card w-100 " >
               <img src=${meal[i].strMealThumb} class="card-img-top" alt="">
               <div class="card-body">
                 <h5 class="card-subtitle text-black text-center  fw-bold my-1">${meal[i].strMeal.split(" ").slice(0,3).join(" ")}</h5>
               </div>
             </div>
           </div>
      `
    }
    homesection.innerHTML = cartoona;
}
 /*  ----------------------------------------------------------------------------------   */

 async function areaMeals(area) { 
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
     response = await response.json();
     console.log(response)
     areaMealsDisplay(response.meals.slice(0,20))
  }
  function areaMealsDisplay(meal){
    let cartoona = ``;
    for(let i = 0 ; i < meal.length ; i++){
       cartoona += `
           <div class="col-md-4 col-sm-6 col-12 p-2 mealsPointer" onclick="getMealsDetails('${meal[i].idMeal}')">
           <div class="card w-100 " >
               <img src=${meal[i].strMealThumb} class="card-img-top" alt="">
               <div class="card-body">
                 <h5 class="card-subtitle text-black text-center fw-bold my-1">${meal[i].strMeal.split(" ").slice(0,3).join(" ")}</h5>
            
               </div>
             </div>
           </div>
      `
    }
    homesection.innerHTML = cartoona;
    contactsection.innerHTML = `` ;
    searchsection.innerHTML = `` ;
}
 /*  ----------------------------------------------------------------------------------   */

 async function getMealsDetails(mealId) { 
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
     response = await response.json();
     console.log(response)
     allMealsDisplay(response.meals)
  }
  function allMealsDisplay(mealId){
    let cartoona = ``;
    for(let i = 0 ; i < mealId.length ; i++){
       cartoona += `
            <div class="col-lg-4 col-md-4 col-12 mealsPointer">
                <img class="w-100 rounded-2" src=${mealId[i].strMealThumb} alt="">
            </div>
            <div class="col-md-8 col-12 text-black px-3 ">
                <h2 class="detailsheadercolor">${mealId[i].strMeal}</h2>
                <p class="lead border-bottom">${mealId[i].strInstructions}</p>
                <h6 class="detailsheadercolor">Area : <span class="text-black"> ${mealId[i].strArea} </span> </h6>
                <h6 class="detailsheadercolor">Category: <span class="text-black"> ${mealId[i].strCategory} </span> </h6>
                <h6 class="detailsheadercolor">Tags: <span class="text-black"> ${mealId[i].strTags} </span> </h6>
                <div>
                    <button class="btn btn-secondary detailsbutton"><i class="mx-1 fa-solid fa-blog"></i></i> <a href="" target="_blank" >Source</a> </button>
                    <button class="btn btn-danger detailsbutton"><i class=" mx-1 fa-brands fa-youtube"></i><a href="${mealId[i].strYoutube}" target="_blank" >Youtube</a> </button>
                </div>
            </div> 
      `
    }
    homesection.innerHTML = cartoona;
    contactsection.innerHTML = `` ;
    searchsection.innerHTML = `` ;
}

/*-------------------------------------------------------------*/
function searchMeals() {  
    homesection.innerHTML = `
            <div class="col-md-6 col-12 my-2">
                <input class="form-control bg-transparent my-3" onkeyup="searchbyname(this.value)" type="search" placeholder="Search By Name">
            </div>
            <div class="col-md-6 col-12 my-2">
                <input class="form-control bg-transparent my-3" onkeyup="searchbyLitter(this.value)" type="search" placeholder="Search By Litter">
            </div>
    ` ;
}
async function searchbyname(term) { 
    let response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    response = await response.json();
    SearchMealsDisplay(response.meals);
    console.log(response)
}
async function searchbyLitter(term) { 
    let response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`);
    response = await response.json();
    SearchMealsDisplay(response.meals);
    console.log(response)
}
function SearchMealsDisplay(Sterm){
    let cartoona = ``;
    for(let i = 0 ; i < Sterm.length ; i++){
       cartoona += `
           <div class="col-md-4 col-sm-6 col-12 p-2 mealsPointer" onclick="getMealsDetails('${Sterm[i].idMeal}')">
           <div class="card w-100 " >
               <img src=${Sterm[i].strMealThumb} class="card-img-top" alt="">
               <div class="card-body">
                 <h5 class="card-title text-black text-center text-capitalize fw-bold">${Sterm[i].strMeal}</h5>
               </div>
             </div>
       </div>
      `
    }
    searchsection.innerHTML = cartoona;
    contactsection.innerHTML = `` ;
}

/*------------------------------------------------------------*/
let SubmitButton ;
let namefocus = false ;
let emailfocus = false ;
let phonefocus = false ;
let agefocus = false ;
let passwordfocus = false ;
let repasswordfocus = false ;

function contactFun() { 
    searchsection.innerHTML = `` ;
    homesection.innerHTML = `` ;
    contactsection.innerHTML = `
        <div class="row g-3 mx-auto mb-3" >
            <div class="col-md-6 col-12 my-2">
                <input onkeyup="bigValidationFun()" id="NameInput" class="form-control bg-transparent text-black" type="text" placeholder="Enter Your Name" onkeyup="nameValidation()">
                <p id="nameIdAlert" class="alert detailsheadercolorback py-1 my-1 d-none ">Name Error</p>
            </div>
            <div class="col-md-6 col-12 my-2">
                <input onkeyup="bigValidationFun()" id="EmailInput" class="form-control bg-transparent text-black" type="email" placeholder="Enter Your Email" onkeyup="nameValidation()">
                <p id="emailIdAlert" class="alert detailsheadercolorback py-1 my-1 d-none ">Email Error</p>
            </div>
            <div class="col-md-6 col-12 my-2">
                <input onkeyup="bigValidationFun()" id="PhoneInput" class="form-control bg-transparent text-black" type="text" placeholder="Enter Your Phone" onkeyup="nameValidation()">
                <p id="phoneIdAlert" class="alert detailsheadercolorback py-1 my-1 d-none ">Phone Error</p>
            </div>
            <div class="col-md-6 col-12 my-2">
                <input onkeyup="bigValidationFun()" id="AgeInput" class="form-control bg-transparent text-black" type="number" placeholder="Enter Your Age" onkeyup="nameValidation()">
                <p id="ageIdAlert" class="alert detailsheadercolorback py-1 my-1 d-none ">Age Error</p>
            </div>
            <div class="col-md-6 col-12 my-2">
                <input onkeyup="bigValidationFun()" id="PasswordInput" class="form-control bg-transparent text-black" type="password" placeholder="Enter Your Password" onkeyup="nameValidation()">
                <p id="passwordIdAlert" class="alert detailsheadercolorback py-1 my-1 d-none ">Password Error</p>
            </div>
            <div class="col-md-6 col-12 my-2">
                <input onkeyup="bigValidationFun()" id="RePasswordInput" class="form-control bg-transparent text-black" type="password" placeholder="Re-Enter Your Password" onkeyup="nameValidation()">
                <p id="repasswordIdAlert" class="alert detailsheadercolorback py-1 my-1 d-none ">RePaswword Error</p>
            </div>
            <div class="text-center submitcolor">
                <button id="SubmitId" class="btn btn-outline-danger my-2"  type="submit"> Submit </button>
            </div>
        </div>
        ` 
        SubmitButton = document.getElementById("SubmitId");
        document.getElementById("NameInput").addEventListener("focus" , ()=>{
            namefocus = true ;
         })
         document.getElementById("EmailInput").addEventListener("focus" , ()=>{
            emailfocus = true ;
         })
         document.getElementById("PhoneInput").addEventListener("focus" , ()=>{
            phonefocus = true ;
         })
         document.getElementById("AgeInput").addEventListener("focus" , ()=>{
            agefocus = true ;
         })
         document.getElementById("PasswordInput").addEventListener("focus" , ()=>{
            passwordfocus = true ;
         })
         document.getElementById("RePasswordInput").addEventListener("focus" , ()=>{
            repasswordfocus = true ;
         })
    ;
 }

 /* ----------------------------------------Validation Functions -------------------------------------------- */
 // Big Function Calling By onKeyUp  Having
 // 1- Validation Function For Every Input
 // 2- If Condition For All Validation Function By Using && in True Mood --->  To Enable Submit  Button Using SetAttribute
 // 3- Add Alert Div To Every Input With Alert id  ---- And Give it d-none
 // 4- If Condition For Add Class Or Remove Class on Alert Div
 // 5- Create Variables And Give It False --- Then Create If Condition  By Put Every Varaible True --- then but if Condition For Add or remove class in it

 function bigValidationFun(){
    
    if(namefocus){
        if(nameValidation()){
            document.getElementById("nameIdAlert").classList.replace("d-block" , "d-none" )
            }
            else {
                document.getElementById("nameIdAlert").classList.replace("d-none" , "d-block" )
            }
    }
    if(emailfocus){
        if(emailValidation()){
            document.getElementById("emailIdAlert").classList.replace("d-block" , "d-none" )
            }
            else {
                document.getElementById("emailIdAlert").classList.replace("d-none" , "d-block" )
            }
    }
    if(phonefocus){
        if(phoneValidation()){
            document.getElementById("phoneIdAlert").classList.replace("d-block" , "d-none" )
            }
            else {
                document.getElementById("phoneIdAlert").classList.replace("d-none" , "d-block"  )
            }
    }
    if(agefocus){
        if(ageValidation()){
            document.getElementById("ageIdAlert").classList.replace("d-block" , "d-none" )
            }
            else {
                document.getElementById("ageIdAlert").classList.replace("d-none" , "d-block"  )
            }
    }
    if(passwordfocus){
        if(passwordValidation()){
            document.getElementById("passwordIdAlert").classList.replace("d-block" , "d-none" )
            }
            else {
                document.getElementById("passwordIdAlert").classList.replace("d-none" , "d-block" )
            }
    }
    if(repasswordfocus){
        if(repasswordValidation()){
            document.getElementById("repasswordIdAlert").classList.replace("d-block" , "d-none" )
            }
            else {
                document.getElementById("repasswordIdAlert").classList.replace("d-none" , "d-block"  )
            }
    }

    if(nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()){
        SubmitButton.removeAttribute("disabled")
    }
    else {
        SubmitButton.setAttribute("disabled" , true)
    }
 }

 function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("NameInput").value));
   }
 function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("EmailInput").value));
}
 function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("PhoneInput").value));
   }
 function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("AgeInput").value));

   }
 function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(document.getElementById("PasswordInput").value));
   }
 function repasswordValidation() {
    return  document.getElementById("PasswordInput").value == document.getElementById("RePasswordInput").value ;
   }


   