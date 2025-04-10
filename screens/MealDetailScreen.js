import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorite-context";

function MealDetailScreen({ route, navigation }) {
    const favoriteMealsCxt = useContext(FavoriteContext);
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealsCxt.ids.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            favoriteMealsCxt.removeFavorite(mealId);
        } else {
            favoriteMealsCxt.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavorite ? "star" : "star-outline"}
                        size={24}
                        color="white"
                        onPress={changeFavoriteStatusHandler}
                    />
                );
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.root}>
            <View>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetail
                    duration={selectedMeal.duration}
                    affordability={selectedMeal.affordability}
                    complexity={selectedMeal.complexity}
                    textStyle={styles.detailText}
                />
                <View style={styles.listOuterContainer}>
                    <View style={styles.listContainer}>
                        <View style={styles.subtitleContainer}>
                            <Text style={styles.subtitle}>Ingredients</Text>
                        </View>
                        {selectedMeal.ingredients.map((ingredient) => (
                            <View key={ingredient} style={styles.listItem}>
                                <Text style={styles.itemText}>{ingredient}</Text>
                            </View>
                        ))}
                        <View style={styles.subtitleContainer}>
                            <Text style={styles.subtitle}>Steps</Text>
                        </View>
                        {selectedMeal.steps.map((step) => (
                            <View key={step} style={styles.listItem}>
                                <Text style={styles.itemText}>{step}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    root: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    subtitleContainer: {
        padding: 6,
        margin: 4,
        marginHorizontal: 12,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        textAlign: 'center',
        color: '#351401'
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
});