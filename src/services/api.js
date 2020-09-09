import axios from 'axios';

const api = axios.create({
    _baseURL: '192.168.1.6',
    get baseURL() {
        return this._baseURL;
    },
    set baseURL(value) {
        this._baseURL = value;
    },
});

export default api;


/**
 * IOS com emulador: localhost
 * IOS com físico: IP da máquina
 * 
 * Android com emulador: localhost (adb reverse)
 * Android com emulador: 10.0.2.2 (Android Studio)
 * Android com emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 * 
 */