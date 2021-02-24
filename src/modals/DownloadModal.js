import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';

const DownloadModal = ({visible}) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.modalView}>
        <View style={styles.modalInner}>
          <Text>Downloading....</Text>
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
});

export default DownloadModal;
