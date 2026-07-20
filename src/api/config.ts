import { Platform } from 'react-native';

// Android emulator can't reach the host machine via `localhost`; it must use
// the special alias `10.0.2.2`. iOS simulator and physical devices on the
// same network can use `localhost` / the machine's LAN IP respectively.
const DEV_HOST = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

export const API_BASE_URL = `http://${DEV_HOST}:8000/api/v1`;

export const API_TIMEOUT_MS = 15000;
