import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Container, Item, Input, Label, Button, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";



const DownloadScreen = () => {

    const [textValue, setTextValue] = useState('');

    console.log(textValue);

    return (
        <Container>
            <Grid>
                <Row size={1} style={{ backgroundColor: '#F7FAFF', alignItems: 'center' }}>
                    <Item stackedLabel style={{ marginLeft: 10, width: '100%', height: '10%', paddingRight: 25, borderColor: 'transparent' }}>
                        <Label>Youtube URL</Label>
                        <Item style={{ borderColor: 'transparent' }}>
                            <Input placeholder="https://youtube...." onChangeText={(text) => setTextValue(text)} style={{ borderBottomWidth: 1, borderColor: '#595959', flex: 2, marginRight: 10 }} />
                            <Button primary style={{ flex: 1 }}><Text>Download</Text></Button>
                        </Item>
                    </Item>
                </Row>
            </Grid>
        </Container>
    );
};

const styles = StyleSheet.create({
});

export default DownloadScreen;