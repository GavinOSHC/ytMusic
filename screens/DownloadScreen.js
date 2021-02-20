import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Item, Input, Label, Button, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

const DownloadScreen = () => {
  const [textValue, setTextValue] = useState('');

  console.log(textValue);

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
              <Button primary style={styles.button}>
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

export default DownloadScreen;
