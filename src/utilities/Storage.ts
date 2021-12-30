import {StorageKeys} from "./types";

export default class Storage {
    static getItem<T, D>(key: StorageKeys, defaultValue?: D): T | D {
        const data = localStorage.getItem(key);
        if (data) {
            return (JSON.parse(data)) as T;
        }
        return (defaultValue || null) as any;
    }

    static setItem<T>(key: StorageKeys, value: T): void {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
    }

    static removeItem(key: StorageKeys) {
        localStorage.removeItem(key);
    }
}
