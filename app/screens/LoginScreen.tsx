import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RootState } from '../store';
// import { styles } from '../styles/LoginStyle';
import { commonStyles } from '../styles/CommonStyle';
import { login, registering } from '../reducers/authSlice';
import MemoizedPicker from '../components/LanguagePicker';
import { REGEX, STRINGS } from '../constants';
import FormContainer from '../components/FormContainer';
import TextInputWithLabel from '../components/TextInputWithLabel';
import ButtonWithText from '../components/ButtonWithText';
import InlineActionText from '../components/InlineActionText';

const LoginScreen: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.rootReducer.user);

  const [email, setEmail] = useState<string>(user.email ?? STRINGS.EMPTY);
  const [password, setPassword] = useState<string>(user.password ?? STRINGS.EMPTY);

  const isEmailValid = useMemo(() => {
    return email === STRINGS.EMPTY ? true : REGEX.EMAIL.test(email);
  }, [email]);

  const isValidPassword = useMemo(() => REGEX.PASSWORD.test(password), [password]);

  const handleEmailTextChange = useCallback((email: string) => {
    setEmail(email);
  }, [email]);

  const handleLogin = useCallback(() => {
    if (isEmailValid && isValidPassword && user && user.email === email && user.password === password) {
      dispatch(login(user));
    }
  }, [email, password]);

  const handleRegistration = useCallback(() => {
    dispatch(registering(true));
  }, []);

  return (
    <View style={commonStyles.container}>
      <MemoizedPicker />
      <Text style={commonStyles.headerText}>{t('login')}</Text>
      <FormContainer style={commonStyles.formContainer}>
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
        <ButtonWithText title={t('submit')} onPress={handleLogin} disabled={!(isEmailValid && isValidPassword)} />
        <InlineActionText label={t('dont_have_account')} clickableText={t('register_caps')} onPress={handleRegistration} />
      </FormContainer>
    </View>
  );
};

export default LoginScreen;