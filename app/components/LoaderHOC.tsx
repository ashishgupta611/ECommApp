import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

type WithLoaderProps = {
    isLoading: boolean;
};

// HOC function
function LoaderHOC<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function WithLoaderComponent(props: P & WithLoaderProps) {
    const { t } = useTranslation();

    const {isLoading, ...restProps} = props;
    if (isLoading) {
      return <Text>{t('Loading ...')}</Text>;
    }
    return <WrappedComponent {...(restProps as P)} />;
  };
};

export default LoaderHOC;

