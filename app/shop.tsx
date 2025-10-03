import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import { ArrowLeft, ShoppingCart } from 'lucide-react-native';

const SHOP_ITEMS = [
  {
    id: 1,
    name: 'Hyrox Performance Shirt',
    price: '49.99€',
    image: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sportkleidung',
  },
  {
    id: 2,
    name: 'Hyrox Training Shorts',
    price: '39.99€',
    image: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sportkleidung',
  },
  {
    id: 3,
    name: 'Hyrox Trinkflasche',
    price: '19.99€',
    image: 'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Trinkflaschen',
  },
  {
    id: 4,
    name: 'Hyrox Schweißband Set',
    price: '14.99€',
    image: 'https://images.pexels.com/photos/3989818/pexels-photo-3989818.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Schweißband',
  },
  {
    id: 5,
    name: 'Hyrox Hoodie',
    price: '69.99€',
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Sportkleidung',
  },
  {
    id: 6,
    name: 'Hyrox Sport Trinkflasche Pro',
    price: '24.99€',
    image: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Trinkflaschen',
  },
];

export default function ShopScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color={Colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hyrox Shop</Text>
        <TouchableOpacity style={styles.cartButton}>
          <ShoppingCart color={Colors.text} size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Merchandising</Text>
        <Text style={styles.sectionSubtitle}>Offizielle Hyrox Produkte</Text>

        <View style={styles.grid}>
          {SHOP_ITEMS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.categoryText}>{item.category}</Text>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>In den Warenkorb</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: Colors.text,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  sectionSubtitle: {
    color: Colors.gray,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 25,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#2a2a2a',
  },
  productInfo: {
    padding: 12,
  },
  categoryText: {
    color: Colors.accent,
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  productName: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    height: 36,
  },
  productPrice: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: Colors.background,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
