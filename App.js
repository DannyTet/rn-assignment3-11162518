import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState([
    { name: 'Mobile App Development', key: '1' },
    { name: 'Web Development', key: '2' },
    { name: 'Push Ups', key: '3' },
    { name: 'Texting', key: '4' },
    { name: 'Accessories', key: '5' },
    { name: 'Touring', key: '6' },
    { name: 'Novels', key: '7' },
    { name: 'Short films', key: '8' },
    { name: 'Paintings', key: '9' },
    { name: 'Crypto Currencies', key: '10' },
    { name: 'Dropshipping', key: '11' },
    { name: '', key: '12' },
    { name: 'Whether Report', key: '13' },
    { name: 'Checks and Balances', key: '14' },
    { name: 'Gists', key: '15' },
    
  ]);

  const data = [
    { id: '1', title: 'Exercise', image: require('./exercise.png') },
    { id: '2', title: 'Cooking', image: require('./study.png') },
    { id: '3', title: 'Drawing', image: require('./exercise.png') },
    { id: '4', title: 'Code', image: require('./exercise.png') },
    { id: '5', title: 'Washing', image: require('./study.png') },
    { id: '6', title: 'Soccer', image: require('./exercise.png') },
    { id: '7', title: 'Basketball', image: require('./exercise.png') },
    { id: '8', title: 'Games', image: require('./study.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> Hello, Devs </Text>
        <View style={styles.ellipse}>
          <Image source={require('./userimage.png')} style={styles.userImage} />
        </View>
      </View>
      <View style={styles.searchFlexView}>
        <TextInput
          style={styles.searchInput}
          placeholder={'Search...'}
        />
        <Button title="Sort" style={styles.sortButton} />
      </View>

      <Text style={styles.categories}> Categories</Text>
      <View>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={styles.categories}> Ongoing Task</Text>

      <ScrollView style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
        {task.map((item2) => (
          <View key={item2.key}>
            <Text style={styles.item2}>{item2.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#45566',
  },
  item: {
    margin: 10,
    backgroundColor: '#8999',
    padding: 10,
  },
  userImage: {
    width: 40,
    height: 30,
  },
  categories: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#900',
    marginLeft: 10,
  },
  sortButton: {
    width: 10,
    height: 10,
  },
  searchFlexView: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  searchInput: {
    width: 200,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  ellipse: {
    width: 38,
    height: 38,
    borderRadius: 50,
    overflow: 'hidden',
    marginLeft: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  container: {
    flex: 1,
    backgroundColor: '#4556',
  },
  item2: {
    marginTop: 10,
    paddingHorizontal: 70,
    borderRadius: 10,
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    paddingVertical: 30,
    backgroundColor: '#ffffff',
  },
});
