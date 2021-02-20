import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Item, Input, Label, Button, Text} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import {connect} from 'react-redux';
import {handleDownloadSong} from '../redux/actions';

const DownloadScreen = ({dispatch}) => {
  const [textValue, setTextValue] = useState('');

  const downloadSong = () => {
    dispatch(handleDownloadSong(textValue));
  };

  return (
    <Container>
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
    gotSong: state.downloadReducer,
  };
};

export default connect(mapStateToProps)(DownloadScreen);
