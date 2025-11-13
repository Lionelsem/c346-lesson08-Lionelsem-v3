import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },

    wrapper: {
        padding: 10,
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        backgroundColor: 'steelblue',
        color: 'white',
        padding: 50,
        borderRadius: 5,
        textAlign: 'center',
        textTransform: 'uppercase',
        elevation: 10,
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4,
        overflow: 'hidden',
    },

        cardImage: {
            width: '100%',
            height: 220,
            resizeMode: 'contain',
            backgroundColor: '#fff',

    },

    cardContent: {
        padding: 12,
        alignItems: 'center',
    },

    cardTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 8,
    },

    cardDesc: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginTop: 4,
    },

    label: {
        fontSize: 20,
        marginBottom: 5,
        backgroundColor: 'blue',
        color: 'white',
        padding: 4,
        borderRadius: 4,
    },

    picker: {
        marginBottom: 1,
        borderWidth: 1,
        borderColor: 'fff',
    },
});
