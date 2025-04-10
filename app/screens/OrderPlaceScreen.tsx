import React, { JSX, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CartItem,  Address} from '../types';
import { styles } from '../styles/OrderPlaceStyle';
import { RootState } from '../store';

type PaymentMethod = 'creditCard' | 'paypal' | 'cashOnDelivery';

type OrderPlaceScreenProps = {
  route?: any;
  navigation?: any;
};


const OrderPlaceScreen: React.FC<OrderPlaceScreenProps> = ({ navigation, route }) => {
  const { cartItems } = useSelector((state: RootState) => state.rootReducer.cart);

  const [address, setAddress] = useState<Address>({
    fullName: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('creditCard');

  const handleInputChange = (name: keyof Address, value: string): void => {
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const handlePlaceOrder = (): void => {
    // Implement order placement logic
    console.log('Order placed:', { address, paymentMethod, cartItems });
    // navigation.navigate('OrderConfirmation');
  };

  const renderCartItem = ({ item }: { item: CartItem }): JSX.Element => (
    <View style={styles.cartItem}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.product.name}</Text>
        <Text style={styles.itemPrice}>${item.product.price.toFixed(2)} x {item.quantity}</Text>
      </View>
      <Text style={styles.itemTotal}>${(item.product.price * item.quantity).toFixed(2)}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Address Form */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={address.fullName}
          onChangeText={(text) => handleInputChange('fullName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Street Address"
          value={address.street}
          onChangeText={(text) => handleInputChange('street', text)}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="City"
            value={address.city}
            onChangeText={(text) => handleInputChange('city', text)}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="State"
            value={address.state}
            onChangeText={(text) => handleInputChange('state', text)}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="ZIP Code"
            value={address.zipCode}
            onChangeText={(text) => handleInputChange('zipCode', text)}
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Phone Number"
            value={address.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {/* Cart Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Order</Text>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.product.id.toString()}
          scrollEnabled={false}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>${calculateTotal().toFixed(2)}</Text>
        </View>
      </View>

      {/* Payment Method */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <TouchableOpacity 
          style={styles.paymentOption}
          onPress={() => setPaymentMethod('creditCard')}
        >
          <Icon 
            name={paymentMethod === 'creditCard' ? 'radio-button-checked' : 'radio-button-unchecked'} 
            size={24} 
            color="#4CAF50" 
          />
          <Text style={styles.paymentText}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.paymentOption}
          onPress={() => setPaymentMethod('paypal')}
        >
          <Icon 
            name={paymentMethod === 'paypal' ? 'radio-button-checked' : 'radio-button-unchecked'} 
            size={24} 
            color="#4CAF50" 
          />
          <Text style={styles.paymentText}>PayPal</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.paymentOption}
          onPress={() => setPaymentMethod('cashOnDelivery')}
        >
          <Icon 
            name={paymentMethod === 'cashOnDelivery' ? 'radio-button-checked' : 'radio-button-unchecked'} 
            size={24} 
            color="#4CAF50" 
          />
          <Text style={styles.paymentText}>Cash on Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Place Order Button */}
      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OrderPlaceScreen;