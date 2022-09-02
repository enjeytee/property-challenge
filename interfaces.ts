import { Countries, Price } from "./aliases.js";
import { Permissions, LoyaltyUser } from "./enums.js";
export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
};
export interface You {
    firstName: string;
    lastName: string;
    age: number;
    isReturning: boolean;
    stayedAt: string[];
    permissions: Permissions;   
    isLoggedIn: boolean; 
};
export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstline: string;
        townCity: string;
        postZipCode: number | string;
        country: Countries;
    }
    contact: [number, string];
    available: boolean
};