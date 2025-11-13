import { Text, View, Button, Alert, Image, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

function MyApp() {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
//hello
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>
                    Guess the Country Quiz
                </Text>

                <Image source={require('./img/Japan.png')} style={{ width: '100%', height: 150, marginBottom: 10 }} />
                <Picker selectedValue={ans1} onValueChange={(value) => setAns1(value)}>
                    <Picker.Item label="Choose a country..." value="" />
                    <Picker.Item label="Japan" value="Japan" />
                    <Picker.Item label="China" value="China" />
                    <Picker.Item label="Korea" value="Korea" />
                </Picker>

                <Image source={require('./img/France.png')} style={{ width: '100%', height: 150, marginBottom: 10 }} />
                <Picker selectedValue={ans2} onValueChange={(value) => setAns2(value)}>
                    <Picker.Item label="Choose a country..." value="" />
                    <Picker.Item label="France" value="France" />
                    <Picker.Item label="Spain" value="Spain" />
                    <Picker.Item label="Italy" value="Italy" />
                </Picker>

                <Image source={require('./img/Italy.png')} style={{ width: '100%', height: 150, marginBottom: 10 }} />
                <Picker selectedValue={ans3} onValueChange={(value) => setAns3(value)}>
                    <Picker.Item label="Choose a country..." value="" />
                    <Picker.Item label="Italy" value="Italy" />
                    <Picker.Item label="Greece" value="Greece" />
                    <Picker.Item label="Portugal" value="Portugal" />
                </Picker>

                <Button
                    title="Submit"
                    onPress={() => {
                        if (ans1 === 'Japan' && ans2 === 'France' && ans3 === 'Italy') {
                            Alert.alert('Result', 'You passed! 🎉');
                        } else {
                            Alert.alert('Result', 'You failed. Try again!');
                        }
                    }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: '#fff' },
});

export default MyApp;
