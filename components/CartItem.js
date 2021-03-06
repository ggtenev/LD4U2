//CART ITEM COMPONENT THAT WILL BE USED FOR DISPLAYING PODUCTS

import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function CartItem({ price, title, quantity, deleteItem, deletable }) {
  return (
    <View style={styles.cart}>
      <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
        <Text style={styles.quantity}>   Qty: {quantity}</Text>
      </View>
      {/* Displaying the price and delete button */}
      <View style={styles.rightItems}>
        <Text style={styles.title}>Total:£{(price * quantity).toFixed(2)}</Text>
        {deletable && <TouchableOpacity style={styles.deleteButton} onPress={deleteItem}>
          <Ionicons name="md-trash" size={23} color={Platform.OS === 'android' ? 'red' : '#888'} />
        </TouchableOpacity>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cart:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    alignItems:'center',
    marginVertical:5,
    borderRadius:5
  },
  info:{
    flexDirection:'row',
    alignItems:'center'
  },
  quantity:{
 
    color:'black',
    fontSize:16,
    marginHorizontal:5
  },
  title:{

    fontSize:16
  },
  deleteButton:{
    marginHorizontal:20
  },
  rightItems:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:20
  }


})