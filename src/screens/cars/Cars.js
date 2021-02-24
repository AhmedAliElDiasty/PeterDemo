import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CarComponent from '../../components/carComponent/CarComponent';
import {Navigation} from 'react-native-navigation';

class Cars extends Component {
  render() {
    console.log("iueiuhiufhuiefhuhdfuhduhdfuhdifudfhudfhudhf",this.props.cars);

    return (
        <SafeAreaView style={{flex: 1}}>
          <View padding={5} stretch style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'createCar',
                  },
                });
              }}>
              <Text>create</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={this.props.cars}
            renderItem={({item}) => (
              <CarComponent type={item.type} fuelUsage={item.fuelUsage} />
            )}
          />
        </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  cars: state.cars.cars,
});

export default connect(mapStateToProps)(Cars);
