import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import StudentDetails from './StudentDetails';

const windowWidth = Dimensions.get('window').width;

const students = [
  {"id":1,"first_name":"Naruto","last_name":"Uzumaki","nick_name":"Naruto","course":"BSIT","year":1},
  {"id":2,"first_name":"Sasuke","last_name":"Uchiha","nick_name":"Sasuke","course":"BSIT","year":2},
  {"id":3,"first_name":"Sakura","last_name":"Haruno","nick_name":"Sakura","course":"BSIT","year":3},
  {"id":4,"first_name":"Kakashi","last_name":"Hatake","nick_name":"Kakashi","course":"BSIT","year":4},
  {"id":5,"first_name":"Hinata","last_name":"Hyuga","nick_name":"Hinata","course":"BSIT","year":1},
  {"id":6,"first_name":"Shikamaru","last_name":"Nara","nick_name":"Shikamaru","course":"BSIT","year":2},
  {"id":7,"first_name":"Ino","last_name":"Yamanaka","nick_name":"Ino","course":"BSIT","year":3},
  {"id":8,"first_name":"Choji","last_name":"Akimichi","nick_name":"Choji","course":"BSIT","year":4},
  {"id":9,"first_name":"Neji","last_name":"Hyuga","nick_name":"Neji","course":"BSIT","year":1},
  {"id":10,"first_name":"Rock Lee","last_name":"Rock Lee","nick_name":"Rock Lee","course":"BSIT","year":2},
  {"id":11,"first_name":"Tenten","last_name":"Tenten","nick_name":"Tenten","course":"BSIT","year":3},
  {"id":12,"first_name":"Kiba","last_name":"Inuzuka","nick_name":"Kiba","course":"BSIT","year":4},
  {"id":13,"first_name":"Hidan","last_name":"Hidan","nick_name":"Hidan","course":"BSIT","year":1},
  {"id":14,"first_name":"Kisame","last_name":"Hoshigaki","nick_name":"Kisame","course":"BSIT","year":2},
  {"id":15,"first_name":"Deidara","last_name":"Deidara","nick_name":"Deidara","course":"BSIT","year":3},
  {"id":16,"first_name":"Itachi","last_name":"Uchiha","nick_name":"Itachi","course":"BSIT","year":4},
  {"id":17,"first_name":"Gaara","last_name":"Gaara","nick_name":"Gaara","course":"BSIT","year":1},
  {"id":18,"first_name":"Temari","last_name":"Temari","nick_name":"Temari","course":"BSIT","year":2},
  {"id":19,"first_name":"Sai","last_name":"Sai","nick_name":"Sai","course":"BSIT","year":3},
  {"id":20,"first_name":"Tsunade","last_name":"Tsunade","nick_name":"Tsunade","course":"BSIT","year":4},
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedItem(item)} style={styles.item}>
      <Text style={{ fontSize: 16 }}>{item.nick_name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={students}
          renderItem={renderItem}
          keyExtractor={(item) => item.nick_name}
        />
      </ScrollView>
      {selectedItem && (
        <StudentDetails
          visible={true}
          onClose={() => setSelectedItem(null)}
          data={selectedItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: 16,
    borderColor: 'orange',
    borderStyle: 'solid',
    borderWidth: 2,
    width: windowWidth - 40, // Adjust width to fit the screen
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
