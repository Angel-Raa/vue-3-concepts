import { defineStore } from 'pinia';
import { type Login, type Register, type User, type Response } from '@/types/index';

const API_BASE_URL = 'http://localhost:9000/api/v1';
const AUTH_URL = `${API_BASE_URL}/authentication`;
const USER_URL = `${API_BASE_URL}/user/profile`;

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const useAuth = defineStore('auth', {
  state: () => ({
    token: '',
  }),

  actions: {
    async login(login: Login): Promise<Response> {
      try {
        const response = await fetch(`${AUTH_URL}/login`, {
          method: 'POST',
          headers: DEFAULT_HEADERS,
          body: JSON.stringify(login),
        });

        const data = (await response.json()) as Response;
        if (data.status === true) {
          this.token = data.jwt;
        }

        return data;
      } catch (error) {
        console.error('Error during login:', error);
        throw error
      }
    },

    async register(sign: Register): Promise<Response> {
      try {
        const response = await fetch(`${AUTH_URL}/sign-profile`, {
          method: 'POST',
          headers: DEFAULT_HEADERS,
          body: JSON.stringify(sign),
        });

        const data = (await response.json()) as Response;
        if (data.status === true) {
          this.token = data.jwt;
        }

        return data;
      } catch (error) {
        console.error('Error during registration:', error);
        throw error
      }
    },

    async getAllUser(): Promise<Array<User>> {
      try {
        const response = await fetch(`${USER_URL}/profile/list`, {
          method: 'GET',
          headers: {
            ...DEFAULT_HEADERS,
            Authorization: `Bearer ${this.token}`,
          },
        });

        const data = (await response.json()) as User[];
        return data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        return [];
      }
    },
  },
});

export default useAuth;
