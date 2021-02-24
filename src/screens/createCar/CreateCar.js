import {Formik} from 'formik';
import React from 'react';
import {Button, Dimensions, SafeAreaView, TextInput, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setCar} from '../../actions/carsAction';

class CreateCar extends React.Component {
  renderFormBody = (props) => {
    const {
      values,
      handleChange,
      handleSubmit,
    } = props;
    return (
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'stretch',
          paddingTop: 20,
          flex: 1,
        }}>
        <View style={{alignItems: 'stretch'}}>
          <TextInput
          placeholder='type'
          onChangeText={handleChange('type')}
          value={values.type}
          />
          <TextInput
          placeholder='fuelUsage'
          onChangeText={handleChange('fuelUsage')}
            value={values.fuelUsage}
          />
        </View>
        <View style={{alignItems: 'stretch'}}>
          <View
            style={{
              alignItems: 'stretch',
              borderColor: 'inputBorderColor',
              borderTopWidth: 2,
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}>
            <Button
              style={{alignItems: 'stretch'}}
              onPress={handleSubmit}
              title="Enter"
            />
          </View>
        </View>
      </View>
    );
  };

  onSubmit = async (values, {setSubmitting}) => {
    console.log("Valuesss",values);

    this.props.createCar({type:values.type,fuelUsage:values.fuelUsage})
    Navigation.pop(this.props.componentId);
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <SafeAreaView style={{width: Dimensions.get('window').width, flex: 1}}>
          <Formik
            initialValues={{
              type: '',
              fuelUsage: '',
            }}
            onSubmit={this.onSubmit}>
            {this.renderFormBody}
          </Formik>
        </SafeAreaView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createCar: bindActionCreators(setCar, dispatch),
});

export default connect(null,mapDispatchToProps)(CreateCar);
