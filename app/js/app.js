function addRecipe() {
    const name = document.getElementById("recipeName").value;
    const ingredients = document.getElementById("recipeIngredients").value;

    fetch('/api/recipes', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, ingredients })
    })
    .then(res => res.json())
    .then(data => {
        alert("Recipe Added!");
        location.reload();
    });
}
