import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInputWithButtonProps } from '../interfaces';

export const TextInputWithButton: React.FC<TextInputWithButtonProps> = ({style, disabled, onButtonPress, ...rest }) => {
    return (
        <View style={[styles.searchContainer, style]}>
            <TextInput
                style={styles.searchInput}  
                {...rest} />
            <TouchableOpacity disabled={disabled} style={styles.locationButton} onPress={onButtonPress}>
                <Icon name="location-on" size={24} color="#333" />
            </TouchableOpacity>
        </View>
    );
};

export const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
        elevation: 2,
    },
    locationButton: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 2,
    },
});