import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RootState } from '../store';
import { setLanguage } from '../reducers/settingsSlice';
import { LOCALIZATION_LANGUAGES } from '../constants';
import { handleLanguageChange } from '../helpers/LocalizationHelper';

export const LanguagePicker: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { language } = useSelector((state: RootState) => state.rootReducer.settings);

    const onLanguageChange = (lan: 'ar' | 'en') => {
        dispatch(setLanguage(lan));
        handleLanguageChange(lan);
    };

    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={language}
                onValueChange={onLanguageChange}
                style={styles.picker}
            >
                {Object.entries(LOCALIZATION_LANGUAGES).map(entry => (
                    <Picker.Item key={entry[0]} label={t(entry[1])} value={entry[0]} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  picker: {
    marginRight:20,
    height: 60,
    width:120,
    backgroundColor: 'white',
    marginTop: 60,
  },
});

const MemoizedPicker = memo(() => <LanguagePicker />);

export default MemoizedPicker;