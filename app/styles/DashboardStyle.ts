import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  multipurposeContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  offerTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  offerCard: {
    width: 200,
    height: 100,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  productItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productPrice: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  inStock: {
    color: 'green',
  },
  outOfStock: {
    color: 'red',
  },
  addToCart: {
    justifyContent: 'center',
    padding: 10,
  },
});
