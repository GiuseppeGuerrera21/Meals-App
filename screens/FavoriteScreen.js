import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorite-context";

function FavoriteScreen() {
    const favoriteMealsCxt = useContext(FavoriteContext);
    const favoriteMeals = MEALS.filter((meal) => favoriteMealsCxt.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.root}>
                <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
            </View>
        );
    }

    return <MealList dataItem={favoriteMeals} />
}

export default FavoriteScreen

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f2f25'
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})    