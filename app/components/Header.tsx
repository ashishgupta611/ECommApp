import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    onBackPress?: () => void;
    showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, onBackPress, showBackButton = false }) => {
    const navigation = useNavigation();
    
    const handleBackPress = useCallback(() => {
        console.log('Back button pressed');

        if (onBackPress) {
            onBackPress();
        } 
        else {
            navigation.goBack();
        }
    },[onBackPress]);

    return (
        <View style={styles.container}>
            {showBackButton && (
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <Text style={styles.backText}>{"<"}</Text>
                </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        height: 44,
        backgroundColor: '#6200EE',
    },
    backButton: {
        position: 'absolute',
        left: 16,
    },
    backText: {
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: 'bold',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});