import { PermissionsAndroid, Platform } from 'react-native';
import React, { BackHandler } from 'react-native';
const perms = async () => {
    try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Permiso de Ubicación',
              message: 'RutMaps necesita tu ubicación para funcionar correctamente.',
              buttonNeutral: 'Preguntar luego',
              buttonNegative: 'Cancelar',
              buttonPositive: 'OK',
            }
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            throw new Error('Permiso de ubicación denegado');
          }
        }
    } catch (error) {
        BackHandler.exitApp();
    }
}
export default perms;

