import { writable } from 'svelte/store';
import type { Booking, CocktailOrder } from '$lib/types/types';

export const booking = {
	guests: 2,
	hours: 3,
	totalPrice: 0,
	cocktailOrders: [] as CocktailOrder[]
} as Booking;

export const bookingStore = writable(booking);
