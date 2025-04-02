import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

function CategoryScreen({ navigation }) {
    function pressHandler() {
        navigation.navigate('MealsOverview');
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
                <CategoryGridTitle
                    title={item.title}
                    color={item.color}
                    onPress={pressHandler}
                />)}
            numColumns={2}

        />
    );
}

export default CategoryScreen;