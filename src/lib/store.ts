import { writable } from 'svelte/store';
import type { Booking, CocktailOrder } from '$lib/types/types';

export const booking = {
	guests: 0,
	hours: 0,
	totalPrice: 0,
	cocktailOrders: [] as CocktailOrder[]
} as Booking;

export const bookingStore = writable(booking);
