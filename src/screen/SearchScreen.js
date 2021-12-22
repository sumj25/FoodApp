//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackgroundComponent,
} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import {filterData2} from '../utils/Data';
import {windowWidth} from '../utils/Dimensions';
import {colors} from '../utils/styles';
// create a component
const SearchScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, marginBottom: 10, paddingTop: 20}}>
      <SearchComponent />
      <View style={{marginTop: 10}}>
        <View>
          <FlatList
            style={{}}
            data={filterData2}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('SearchResultScreen', {item: item.name});
                }}>
                <View style={styles.imageView}>
                  <ImageBackground
                    style={styles.image}
                    source={{uri: item.image}}>
                    <View style={styles.textView}>
                      <Text style={{color: colors.cardbackground}}>
                        {item.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal={false}
            showsverticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={
              <Text style={styles.listHeader}>Top Categories</Text>
            }
            ListFooterComponent={<Footer />}
          />
        </View>
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={{marginTop: 20, marginBottom: 30}}>
      <View style={{}}>
        <FlatList
          style={{marginBottom: 10}}
          data={filterData2}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('SearchResultScreen', {item: item.name});
              }}>
              <View style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={{uri: item.image}}>
                  <View style={styles.textView}>
                    <Text style={{color: colors.cardbackground}}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsverticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={styles.listHeader}>More categories</Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.4475,
    height: windowWidth * 0.4475,
    marginLeft: windowWidth * 0.035,
    marginBottom: windowWidth * 0.035,
  },

  image: {
    height: windowWidth * 0.4475,
    width: windowWidth * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },

  textView: {
    height: windowWidth * 0.4475,
    width: windowWidth * 0.4475,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52,0.3)',
  },
});
//make this component available to the app
export default SearchScreen;
