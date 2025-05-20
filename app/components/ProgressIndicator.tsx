import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface ProgressIndicatorProps {
    progress: number;
    color?: string;
    text?: string;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
    progress,
    color = '#007AFF',
    text,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <View
                    style={[
                        styles.progressFill,
                        { width: `${progress}%`, backgroundColor: color }
                    ]}
                />
            </View>
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: '#333333',
    },
    progressBar: {
        height: 10,
        width: '80%',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
    },
});