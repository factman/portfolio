export type ThemeMode = 'light' | 'dark';

export type UserObject = {
    auth: boolean;
};

export type AppStore = {
    themeSwitch: { mode: ThemeMode };
    user: UserObject;
};

export enum ActionTypes {
    SET_THEME = 'SET_THEME',
    SET_USER = "SET_USER",
    REMOVE_USER = "REMOVE_USER",
}

export enum StorageKeys {
    Theme = 'theme',
    User = 'user',
}
