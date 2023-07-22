// Sample JSON data
const recipes = [
    // Paste the provided JSON array here
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

// Function to render recipe cards
function renderRecipes(recipesArray) {
    const recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = "";

    recipesArray.forEach((recipe) => {
        const card = document.createElement("div");
        card.className = "recipe-card";

        const img = document.createElement("img");
        img.src = recipe.imageSrc;
        card.appendChild(img);

        const type = document.createElement("p");
        type.textContent = recipe.type;
        card.appendChild(type);

        const nameAndRating = document.createElement("div");
        nameAndRating.className = "nameAndRating";
        const name = document.createElement("h2");
        name.textContent = recipe.name;
        const rating = document.createElement("span");
        rating.className = "rating";
        rating.textContent = `★ ${recipe.rating}`; // Display stars based on the rating
        nameAndRating.appendChild(name);
        nameAndRating.appendChild(rating);
        card.appendChild(nameAndRating);

        const timeAndLike = document.createElement("div");
        timeAndLike.className = "timeAndLike"
        const time = document.createElement("p");
        time.className = "time";
        time.textContent = recipe.time;
        timeAndLike.appendChild(time);

        const likeBtn = document.createElement("button");
        likeBtn.textContent = ""; // No need for text; the heart shape will be added via CSS
        likeBtn.addEventListener("click", () => toggleLike(recipe, likeBtn));
        timeAndLike.appendChild(likeBtn);
        card.appendChild(timeAndLike);

        recipeContainer.appendChild(card);
    });
}

// Function to toggle like status
function toggleLike(recipe,likeBtn) {
    recipe.isLiked = !recipe.isLiked;
    likeBtn.classList.toggle("like", recipe.isLiked);
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm)
    );

    renderRecipes(filteredRecipes);
}

// Function to filter by type
function handleFilter(type) {
    const filteredRecipes = recipes.filter((recipe) => recipe.type === type);
    renderRecipes(filteredRecipes);
}

// Function to filter by rating
function handleRatingFilter() {
    const above45 = document.getElementById("above45").checked;
    const below40 = document.getElementById("below40").checked;

    if (above45) {
        const filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.5);
        renderRecipes(filteredRecipes);
    } else if (below40) {
        const filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
        renderRecipes(filteredRecipes);
    }
}

// Attach event listeners
document.getElementById("searchInput").addEventListener("input", handleSearch);
document.getElementById("showAll").addEventListener("click", () => renderRecipes(recipes));
document.getElementById("showVeg").addEventListener("click", () => handleFilter("veg"));
document.getElementById("showNonVeg").addEventListener("click", () => handleFilter("non-veg"));
document.querySelectorAll('input[name="ratingFilter"]').forEach((input) => {
    input.addEventListener("change", handleRatingFilter);
});

// Initial rendering of all recipes
renderRecipes(recipes);

document.querySelector('.menu-icon').addEventListener('click', () => {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
});
