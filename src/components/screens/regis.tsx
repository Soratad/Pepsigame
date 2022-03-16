import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Alert,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from '../nav/input/input';
import ClickButton from '../nav/buttons/clickbutton.signin';
import ClickButton1 from '../nav/buttons/Clickbutton1';
import TextButton from '../nav/buttons/TxButton';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button_white, Background,Button_off,} from '../../assets/images/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const phoneer =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const signInEr = Yup.object({
    phoneNumber: Yup.string()
      .required('Please enter phone number!')
      .min(9, 'Phone number must have at least 9 digits.')
      .max(12, 'Phone number must have at least 12 digits.')
      .matches(phoneer, 'invalid phone number!'),
    userName: Yup.string()
      .min(2, 'Name must have at least 2 characters')
      .max(100, 'Name must be up to 100 characters')
      .required('Please enter your name!'),
  });

  const regis: React.FC = (props: any) => {
    const {navigation} = props;
    const [Reader, setReader] = useState(false);
  
    const AllTrue = (Readd: boolean, formikValid: boolean) => {
      if (Readd === true || formikValid === true) {
        return true;
      }
      return false;
    };
  
    return (
      <View style={styles.fullScreenContainer}>
        <ImageBackground
          source={Background}
          resizeMode="cover"
          style={styles.fullScreenContainer}>
          <View style={styles.greetingContainer}>
            <Text style={styles.textTitle}>{'Pepsi Tết'}</Text>
          </View>
          <View style={styles.functionContainer}>
            <Text style={styles.textFunction}>{'Đăng ký'}</Text>
            <Formik
              initialValues={{phoneNumber: '', userName: ''}}
              validationSchema={signInEr}
              onSubmit={values => {
                // Alert.alert(
                //   `You signed up with information: ${values.phoneNumber} and ${values.userName}`,
                // );
                navigation.navigate('');
              }}>
              {formik => (
                <KeyboardAwareScrollView >
                  
                  <Input
                    errorLabel={formik.errors.phoneNumber}
                    placeholder="Nhập số điện thoại"
                    
                    numKeyboard={true}
                    inputProps={{
                      value: formik.values.phoneNumber,
                      onChangeText: (value: string) => {
                        formik.setFieldValue('phoneNumber', value, true);
                      },
                    }}
                  />
                  <Input
                    errorLabel={formik.errors.userName}
                    placeholder="Nhập họ tên"
                    inputProps={{
                      value: formik.values.userName,
                      onChangeText: (value: string) => {
                        formik.setFieldValue('userName', value, true);
                      },
                    }}
                  />
                  <View style={styles.checkboxContainer}>
                    <CheckBox
                      value={Reader}
                      onValueChange={() => setReader(!Reader)}
                      boxType={'square'}
                      onFillColor={'white'}
                    />
                    <Text style={styles.checkboxText}>
                      {'Tôi đã đọc và đồng ý với'}
                    </Text>
                    <TextButton
                      title=" thể lệ chương trình "
                      onPress={() => navigation.navigate('rules')}
                    />
                    <Text style={styles.checkboxText}>{'Pepsi Tết'}</Text>
                  </View>
                  
                  <ClickButton
                    onPress={formik.submitForm}
                    title="Lấy mã OTP"
                    activeStyle={styles.buttonSignUp}
                    
                  />
                  <Text style={styles.textOr}>{'Hoặc'}</Text>
                  <View style={styles.btnsgup}>
                    <ImageBackground source={Button_white}
                      style={styles.btnsgup}
                    >
                  <ClickButton1
                    title="Đăng nhập"
                    titleStyle={styles.titleSignUp}
                    activeStyle={styles.buttonSignUp}
                    onPress={() => navigation.navigate('login')}
                  />
                  </ImageBackground>
                  </View>
                </KeyboardAwareScrollView>
              )}
            </Formik>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    fullScreenContainer: {
      flex: 1,
      // backgroundColor: '#035efc',
      borderRadius: 20,
      flexDirection: 'column',
    },
    greetingContainer: {
      flex: 25,
      // backgroundColor: '#035efc',
      paddingTop: windowHeight * 0.1,
      alignItems: 'center',
    },
    functionContainer: {
      flex: 75,
      // backgroundColor: '#035efc',
      paddingHorizontal: windowWidth * 0.05,
    },
    textWelcome: {
      top:16,
      fontSize: 25,
      fontWeight: '400',
      color: '#3F8EF0',
    },
    textTitle: {
      fontSize: 40,
      top:50,
      fontWeight: 'bold',
      
      color: '#FFFFFF',
    },
    textFunction: {
      fontSize: 20,
      fontWeight: '400',
      marginBottom: 10,
      color: '#FFFFFF',
      alignSelf: 'center',
    },
    textOr: {
      color: '#3F8EF0',
      alignSelf: 'center',
    },
    txIp: {
      position: 'absolute',
      width: 370,
      height: 44,
      left: 17,
      top: 310,
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: '#fff',
    },
    buttonSignUp: {
      width: '100%',
      height: windowHeight * 0.10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf: 'center',
      marginVertical: windowHeight * 0.01,
    },
    titleSignUp: {
      color: '#3486eb',
      fontSize: 25,
      alignSelf: 'center',
      fontWeight: 'bold',
      top:8,
    },
    checkboxContainer: {
      flexDirection: 'row',
    },
    checkboxText: {
      fontSize: 12,
      color: 'white',
    },
    btnsgup2: {
      flex:1,
      alignSelf: 'center',
      height: 73,
      width:305,
    },
    btnsgup: {
      flex:1,
      alignSelf: 'center',
      height: 60,
      width:265,
    }
  });
  
  export default regis;