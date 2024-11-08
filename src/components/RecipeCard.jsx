import "./RecipeCard.css";

const Recipe = ({image, title, cals}) => {
    return (
        <>
            <div class="recipeCard">
                <img src={image}></img>
                <div class="recipeText">
                    <h2>{title}</h2>
                    <p> <b> Calories: </b> {cals}</p>
                </div>
            </div>
        </>
    );
}

export default Recipe;