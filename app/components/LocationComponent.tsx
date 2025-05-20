// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';
// import LocationService from '../services/locationService';
// import { LocationState } from '../interfaces';

// export const LocationComponent: React.FC = () => {
//   const [state, setState] = useState<LocationState>({ loading: false });

//   useEffect(() => {
//     const fetchLocation = async () => {
//       setState({ loading: true });
//       try {
//         const location = await LocationService.getCurrentLocation();
//         setState({
//           loading: false,
//           location: {
//             latitude: location.latitude,
//             longitude: location.longitude,
//             accuracy: location.accuracy,
//           },
//         });
//       } catch (error) {
//         setState({
//           loading: false,
//           error: error instanceof Error ? error.message : 'Unknown error',
//         });
//       }
//     };

//     fetchLocation();
//   }, []);

//   if (state.loading) {
//     return <ActivityIndicator size="large" />;
//   }

//   if (state.error) {
//     return <Text>Error: {state.error}</Text>;
//   }

//   return (
//     <View>
//       {state.location && (
//         <>
//           <Text>Latitude: {state.location.latitude}</Text>
//           <Text>Longitude: {state.location.longitude}</Text>
//           <Text>Accuracy: {state.location.accuracy} meters</Text>
//         </>
//       )}
//     </View>
//   );
// };