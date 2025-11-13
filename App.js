import { Text, View, Button, Alert, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import styles from './styles';

function MyApp() {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');

    return (
        <ScrollView style={styles.container}>
                <Text style={styles.header}>Guess the Country Quiz</Text>
            <View style={styles.wrapper}>


                <View style={styles.card}>
                    <Image
                        source={require('./img/Japan.png')}
                        style={styles.cardImage}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.label}>Guess the country</Text>
                <Picker selectedValue={ans1} onValueChange={setAns1} style={styles.picker}>
                    <Picker.Item label="Choose a country..." value="" />
                    <Picker.Item label="Japan" value="Japan" />
                    <Picker.Item label="China" value="China" />
                    <Picker.Item label="Korea" value="Korea" />
                </Picker>

                <View style={styles.card}>
                    <Image
                        source={require('./img/France.png')}
                        style={styles.cardImage}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.label}>Guess the country</Text>
                <Picker selectedValue={ans2} onValueChange={setAns2} style={styles.picker}>
                    <Picker.Item label="Choose a country..." value="" />
                    <Picker.Item label="France" value="France" />
                    <Picker.Item label="Spain" value="Spain" />
                    <Picker.Item label="Italy" value="Italy" />
                </Picker>

                <View style={styles.card}>
                    <Image
                        source={require('./img/Italy.png')}
                        style={styles.cardImage}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.label}>Guess the country</Text>
                <Picker selectedValue={ans3} onValueChange={setAns3} style={styles.picker}>
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

export default MyApp;
