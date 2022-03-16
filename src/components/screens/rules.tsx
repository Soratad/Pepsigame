import React from "react";
import {
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Dimensions,
  } from 'react-native';
import { Background } from "../../assets/images";
  
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  
  const textt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.ellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. orem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.'
  
  

  const rules: React.FC = () => {  
    return (
      <SafeAreaView style={styles.Container}>
        <ScrollView style={styles.scrollTx}>
          <Text style={styles.tx2}>Thể lệ chương trình</Text>
          <Text style={styles.tx1}>{textt}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      borderRadius: 20,
    },
    scrollTx: {
      marginHorizontal: windowWidth * 0.05,
      marginVertical: windowHeight * 0.01,
    },
    tx1: {
      fontSize: 12,
      fontWeight: '400',
      color: 'black',
    },
    tx2:{
      fontSize:30,
      fontWeight: "bold",
      color: 'black '
    }
  });
  
  export default rules;