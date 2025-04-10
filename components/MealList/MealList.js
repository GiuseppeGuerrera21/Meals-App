import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealList({ dataItem }) {
    function renderMealItem(itemData) {
        const item = itemData.item

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItem {...mealItemProps} />
    }
    return (
        <View style={styles.container}>
            <FlatList data={dataItem} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}

export default MealList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#3f2f25'
    }
});