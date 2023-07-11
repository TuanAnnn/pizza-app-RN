import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import CMenu from "../../src/components/CMenu";

const data = [
  {
    id: "0",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-n_NBXmFXRWT7iGC-THljTXxeSLHJsV9kg&usqp=CAU",
  },
  {
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyUHaJAMXYPvV6a_-_XqE0YhhDGpCPofVOQ&usqp=CAU",
  },
  {
    id: "2",
    image:
      "https://i0.wp.com/www.promotionsinuae.com/wp-content/uploads/2018/07/Buy-Any-Medium-or-Large-Pizza-Get-The-2nd-Pizza-Free-Order-Online-Only..jpg?fit=552%2C287&ssl=1",
  },
  {
    id: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEcz7DVk3uBX_33FZVdPjiCvgpKsmx_9eSh7x4GrTyeMsQixOTd7SHXByKmdibQSQF94&usqp=CAU",
  },
  {
    id: "4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEez8xQZfPxqFsk250_vhXqgRz5Nv8NsHayohTjVexmQwLwhsFUxnElS6bkxLb7gTvHTM&usqp=CAU",
  },
  {
    id: "5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyDcZ1Y3GcIx0CB9Qd8MGw5IE6eASPzwWVIs-yklFqqd7O3bfXj5egUmREG0dUK6M6o8&usqp=CAU",
  },
];

const HomeScreen = () => {
  const renderItem = ({ item, index }) => (
    <View key={index} style={{ margin: 10 }}>
      <Image
        style={{ width: 200, height: 90 }}
        source={{ uri: item.image }}
      ></Image>
    </View>
  );
  return (
    <SafeAreaView>
      <FlatList horizontal data={data} renderItem={renderItem}/>
      <CMenu/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
