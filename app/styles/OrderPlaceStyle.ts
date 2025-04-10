import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 15,
    },
    section: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 15,
      marginBottom: 15,
      elevation: 2,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    input: {
      backgroundColor: '#f9f9f9',
      borderRadius: 6,
      padding: 12,
      marginBottom: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    halfInput: {
      width: '48%',
    },
    cartItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    itemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: 16,
    },
    itemPrice: {
      fontSize: 14,
      color: '#666',
    },
    itemTotal: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    totalAmount: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#4CAF50',
    },
    paymentOption: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    paymentText: {
      marginLeft: 10,
      fontSize: 16,
    },
    placeOrderButton: {
      backgroundColor: '#4CAF50',
      borderRadius: 8,
      padding: 15,
      alignItems: 'center',
      marginTop: 10,
    },
    placeOrderText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });