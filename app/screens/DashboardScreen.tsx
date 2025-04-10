import React, { useState, useEffect, useMemo, JSX, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CartItem, Product} from '../types';
import { styles } from '../styles/DashboardStyle';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from '../store';
import { RootStackParamList } from '../types';
import { NAVIGATION } from '../enums';
import { addItem, updateCart, deleteItem } from '../reducers/cartSlice';

type OrderPlaceScreenNavigationProp = StackNavigationProp<RootStackParamList, typeof NAVIGATION.OrderPlace>;

type DashboardScreenProps = {
  navigation: OrderPlaceScreenNavigationProp;
};

const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.rootReducer.cart);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [multipurposeContent, setMultipurposeContent] = useState<'latestOffers' | 'orderStatus'>('latestOffers');

  // Mock data for products
  const mockProducts: Product[] = Array(20).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 100) + 10,
    image: 'https://via.placeholder.com/150',
    description: `Product ${i + 1}`,
    category: 'Category1',
    inStock: Math.random() > 0.2
  }));

  // Fetch products (mock implementation)
  const fetchProducts = async (): Promise<void> => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setProducts([...products, ...mockProducts.slice((page-1)*10, page*10)]);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleSearch = (): void => {
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const navigateToOrderPlace = (item: Product) => {
    navigation.navigate(NAVIGATION.OrderPlace, item);
  };

  const addToCart = useCallback((item: Product) => {
    const existingItem = cartItems.find(cartItem => cartItem.product.id === item.id);
  
    if (existingItem) {
      const updatedItems = cartItems.map(cartItem => 
        cartItem.product.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      dispatch(updateCart(updatedItems));
    } else {
      // Add new item
      dispatch(addItem({ product: item, quantity: 1 }));
    }
  }, [cartItems]);

  const renderProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity 
      style={styles.productItem}
      onPress={() => navigateToOrderPlace(item)}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <Text style={item.inStock ? styles.inStock : styles.outOfStock}>
          {item.inStock ? 'In Stock' : 'Out of Stock'}
        </Text>
      </View>
      <TouchableOpacity style={styles.addToCart}
      onPress={() => {addToCart(item)}}
      >
        <Icon name="add-shopping-cart" size={24} color="#4CAF50" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderMultipurposeContent = (): JSX.Element => {
    switch(multipurposeContent) {
      case 'latestOffers':
        return (
          <View style={styles.multipurposeContent}>
            <Text style={styles.offerTitle}>Special Offers</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.offerCard}>
                <Text>20% Off on all electronics</Text>
              </View>
              <View style={styles.offerCard}>
                <Text>Buy 1 Get 1 Free on selected items</Text>
              </View>
            </ScrollView>
          </View>
        );
      case 'orderStatus':
        return (
          <View style={styles.multipurposeContent}>
            <Text style={styles.offerTitle}>Your Order Status</Text>
            <Text>Order #12345 is on its way</Text>
          </View>
        );
      default:
        return <></>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.locationButton}>
          <Icon name="location-on" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Multipurpose Window */}
      {renderMultipurposeContent()}

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => !loading && setPage(page + 1)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => loading && <Text>Loading more products...</Text>}
      />
    </View>
  );
};

export default DashboardScreen;