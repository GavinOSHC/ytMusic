import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Item, Input, Label, Button, Text} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import {connect} from 'react-redux';
import {handleDownloadSong, resetErrorMessage} from '../redux/actions';

import DownloadModal from '../modals/DownloadModal';
import ErrorModal from '../modals/ErrorModal';

const DownloadScreen = ({dispatch, reduxState, navigation}) => {
  const [textValue, setTextValue] = useState('');

  console.log(reduxState);

  const downloadSong = () => {
    dispatch(handleDownloadSong(textValue));
  };

  return (
    <Container>
      <DownloadModal visible={reduxState.inProgress} />
      <ErrorModal visible={reduxState.error} navigation={navigation} />
      <Grid>
        <Row size={1} style={styles.row}>
          <Item stackedLabel style={styles.itemContainer}>
            <Label>Youtube URL</Label>
            <Item style={styles.inputContainer}>
              <Input
                placeholder="https://youtube...."
                onChangeText={(text) => setTextValue(text)}
                style={styles.input}
              />
              <Button primary style={styles.button} onPress={downloadSong}>
                <Text>Download</Text>
              </Button>
            </Item>
          </Item>
        </Row>
      </Grid>
    </Container>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#F7FAFF',
    alignItems: 'center',
  },
  itemContainer: {
    marginLeft: 10,
    width: '100%',
    height: '10%',
    paddingRight: 25,
    borderColor: 'transparent',
  },
  inputContainer: {
    borderColor: 'transparent',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#595959',
    flex: 2,
    marginRight: 10,
  },
  button: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    reduxState: state.downloadReducer,
  };
};

export default connect(mapStateToProps)(DownloadScreen);
