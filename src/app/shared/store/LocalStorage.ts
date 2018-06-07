import { User } from '../models/interfaces';

export class LocalStorage {

  static loadAuth(): User {
    try {
      let user: User = null;
      const serializeAuth = localStorage.getItem('auth');
      if (serializeAuth) {
         user = JSON.parse(serializeAuth);
      }
      return user;
    } catch (error) {
      return null;
    }
  }

  static saveAuth(user: User) {
    if (!user) {
      return localStorage.clear();
    }
    try {
      const serializeAuth = JSON.stringify(user);
      localStorage.setItem('auth', serializeAuth);
    } catch (error) {
      console.log('local storage not available', error);
    }
  }
}
