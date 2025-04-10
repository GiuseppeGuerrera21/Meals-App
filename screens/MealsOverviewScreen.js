import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

function MealsOverviewScreen({route, navigation}) {
    const catID = route.params.categoryId;
    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catID) >= 0
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catID).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catID, navigation]);

    return <MealList dataItem={displayedMeals} />
}

export default MealsOverviewScreen;

