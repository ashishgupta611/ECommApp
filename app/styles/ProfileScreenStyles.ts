import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  sectionContainer: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333333',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666666',
    width: '30%',
  },
  infoValue: {
    fontSize: 16,
    color: '#333333',
    width: '65%',
    fontWeight: '500',
  },
  addressContainer: {
    marginTop: 8,
  },
  addressTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444444',
    marginBottom: 5,
  },
  addressText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});

export default styles;