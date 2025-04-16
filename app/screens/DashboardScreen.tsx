import React, { useState, useEffect, useMemo, JSX, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Product } from '../types';
import { styles } from '../styles/DashboardStyle';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from '../store';
import { RootStackParamList } from '../types';
import { NAVIGATION } from '../enums';
import { addItem, updateCart } from '../reducers/cartSlice';
import { TextInputWithButton } from '../components';
import { MultipurposeContent } from '../enums';
import { dummyProducts, mockProducts } from '../../dummy_data';

type OrderPlaceScreenNavigationProp = StackNavigationProp<RootStackParamList, typeof NAVIGATION.OrderPlace>;

type DashboardScreenProps = {
  navigation: OrderPlaceScreenNavigationProp;
};

const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.rootReducer.cart);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [products, setProducts] = useState<Product[]>(dummyProducts);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [multipurposeContent, setMultipurposeContent] = useState<MultipurposeContent>(MultipurposeContent.LatestOffers);

  // Fetch products (mock implementation)
  const fetchProducts = async (): Promise<void> => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      //setProducts([...products, ...mockProducts.slice((page - 1) * 10, page * 10)]);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleSearch = (): void => {
    // Implement search functionality
    //console.log(t('searching_for'), searchQuery);
  };

  const onSearchButtonPress = (): void => {

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
      onPress={() => navigateToOrderPlace(item)} >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <Text style={item.inStock ? styles.inStock : styles.outOfStock}>
          {item.inStock ? t('in_stock') : t('out_stock')}
        </Text>
      </View>
      <TouchableOpacity
        disabled={!item.inStock}
        style={styles.addToCart}
        onPress={() => { addToCart(item) }} >
        <Icon name="add-shopping-cart" size={24} color={item.inStock ? '#4CAF50' : '#ccc'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  
  const renderMultipurposeContent = (): JSX.Element => {
    switch (multipurposeContent) {
      case MultipurposeContent.LatestOffers:
        return (
          <View style={styles.multipurposeContent}>
            <Text style={styles.offerTitle}>{t('special_offer')}</Text>
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
      case MultipurposeContent.OrderStatus:
        return (
          <View style={styles.multipurposeContent}>
            <Text style={styles.offerTitle}>{t('order_status')}</Text>
            <Text>{t('orderMessage', {orderId: 12345})}</Text>
          </View>
        );
      default:
        return <></>;
    }
  };

  return (
    <View style={styles.container}>
      <TextInputWithButton
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
        placeholder={t('search_products')}
        onButtonPress={onSearchButtonPress} />
      {/* Multipurpose Window */}
      {renderMultipurposeContent()}

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => !loading && setPage(page + 1)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => loading && <Text>{t('loading_more_products')}</Text>}
      />
    </View>
  );
};

export default DashboardScreen;