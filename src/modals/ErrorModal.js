import React from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import {connect} from 'react-redux';
import {resetErrorMessage} from '../redux/actions';

const ErrorModal = ({dispatch, visible, navigation}) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.modalView}>
        <View style={styles.modalInner}>
          <Text>Error Has Occured</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate('Download');
              dispatch(resetErrorMessage());
            }}>
            <Text style={styles.text}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    height: 100,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInner: {
    height: 100,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 25,
    marginTop: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
  },
});

export default connect()(ErrorModal);
