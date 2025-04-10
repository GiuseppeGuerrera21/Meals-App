import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet } from "react-native";

function CategoryScreen({ navigation }) {
    function pressHandler(item) {
        navigation.navigate('MealsOverview',
            {
                categoryId: item.id,
            }
        );
    }
    return (
        <FlatList
            style={styles.root}
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
                <CategoryGridTitle
                    title={item.title}
                    color={item.color}
                    onPress={() => pressHandler(item)}
                />)}
            numColumns={2}

        />
    );
}

export default CategoryScreen;

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#3f2f25',
    }
});