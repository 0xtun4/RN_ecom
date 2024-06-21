// import React from 'react';
// import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
// import style from '../../shared/style';
// const CartItem = props => {
//   const data = props.data.product;
//   // const [quantity, setQuantity] = React.useState(props.data.quantity);
//   return (
//     <View key={data.product} style={styles.listCartItems}>
//       <Image
//         style={styles.image}
//         resizeMode={'contain'}
//         source={{
//           uri: data.image
//             ? data.image
//             : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
//         }}
//       />
//       <View style={styles.body}>
//         <Text style={style.text}>{data.name}</Text>
//         <Text style={style.text}>${data.price}</Text>
//       </View>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   listCartItems: {
//     borderBottomWidth: 0.5,
//     borderStyle: 'dotted',
//     borderColor: 'gray',
//     flexDirection: 'row',
//     alignItems: 'center',
//     position: 'relative',
//     bottom: 0,
//     left: 0,
//   },
//
//   body: {
//     width: Dimensions.get('window').width - 90,
//     flexDirection: 'row',
//     position: 'relative',
//     justifyContent: 'space-between',
//     right: 0,
//   },
//   image: {
//     width: 90,
//     height: 90,
//   },
// });
// export default CartItem;
