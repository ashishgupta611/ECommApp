import React, { useState, memo, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
// import { RootState } from '../store';
import { commonStyles } from '../styles/CommonStyle';
import { styles } from '../styles/RegistrationStyle';
import { setCredentials } from '../reducers/userSlice';
import { register, registering } from '../reducers/authSlice';
import MemoizedPicker from '../components/LanguagePicker';
import { REGEX, STRINGS } from '../constants';
import FormContainer from '../components/FormContainer';
import TextInputWithLabel from '../components/TextInputWithLabel';
import ButtonWithText from '../components/ButtonWithText';
import InlineActionText from '../components/InlineActionText';
import { UserState } from '../interfaces';

const RegistrationScreen: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  //const user = useSelector((state: RootState) => state.rootReducer.user);
  const [firstName, setFirstName] = useState<string>(STRINGS.EMPTY);
  const [lastName, setLastName] = useState<string>(STRINGS.EMPTY);
  const [phone, setPhone] = useState<string>(STRINGS.EMPTY);
  const [email, setEmail] = useState<string>(STRINGS.EMPTY);
  const [password, setPassword] = useState<string>(STRINGS.EMPTY);
  const [confirmPassword, setConfirmPassword] = useState<string>(STRINGS.EMPTY);

  const isEmailValid = useMemo(() => {
    return email === STRINGS.EMPTY ? true : REGEX.EMAIL.test(email);
  }, [email]);

  const isValidPassword = useMemo(() => REGEX.PASSWORD.test(password), [password]);

  const handleEmailTextChange = useCallback((email: string) => {
    setEmail(email);
  }, [email]);

  const handleRegistration = useCallback(() => {
    if (isEmailValid && isValidPassword && confirmPassword && isValidConfirmPassword() && firstName) {
      const user: UserState = { firstName, lastName, phone, email, password };
      dispatch(setCredentials(user));
      dispatch(register(user));
    }
  }, [email, password, confirmPassword, firstName]);

  const handleLogin = useCallback(() => {
    dispatch(registering(false));
  }, []);

  const isValidConfirmPassword = (): boolean => {
    if (password && confirmPassword && password !== confirmPassword) {
      return false;
    }
    return true;
  };

  return (
    <View style={commonStyles.container}>
      <MemoizedPicker />
      <Text style={commonStyles.headerText}>{t('register')}</Text>
      <FormContainer style={commonStyles.formContainer}>
        <View style={styles.nameContainer}>
          <TextInputWithLabel
            label={t('name')}
            placeholder={t('first_name')}
            value={firstName}
            onChangeText={setFirstName}
          />
          <View style={styles.spacer} />
          <TextInputWithLabel
            label={t(STRINGS.EMPTY)}
            placeholder={t('last_name')}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <TextInputWithLabel
          label={t('phone')}
          placeholder={t('enter_phone')}
          value={phone}
          onChangeText={setPhone}
        />
        <TextInputWithLabel
          label={t('email')}
          placeholder={t('enterEmail')}
          value={email}
          onChangeText={handleEmailTextChange}
          keyboardType="email-address"
          autoCapitalize="none"
          error={isEmailValid ? STRINGS.EMPTY : t('enter_valid_email')}
        />
        <TextInputWithLabel
          label={t('password')}
          placeholder={t('enterPassword')}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInputWithLabel
          label={t('confirm_password')}
          placeholder={t('confirm_your_password')}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          error={isValidConfirmPassword() ? STRINGS.EMPTY :  t('password_not_match')}
          secureTextEntry
        />
        <ButtonWithText title={t('submit')} onPress={handleRegistration} disabled={!(isEmailValid && isValidPassword)} />
        <InlineActionText label={t('have_account_already')} clickableText={t('login_caps')} onPress={handleLogin} />
      </FormContainer>
    </View>
  );
};

export default RegistrationScreen;