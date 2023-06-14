import type { PricingPackage } from '$lib/types/types';

export const premixed = {
	label: 'Færdigblandet',
	features: ['Professionelle bartendere', 'Mobil bar', 'Transport (sjælland)']
} as PricingPackage;

export const unlimited = {
	label: 'Fri bar',
	price: '85 kr. /time inklusiv moms',
	priceDescription: 'Min. pris 9500 kr. inkl. moms.',
	features: [
		'Professionelle bartendere',
		'Mobil bar',
		'Transport (sjælland)',
		'3 - 5 timer',
		'4 - 6 cocktails'
	]
} as PricingPackage;

export const fixed = {
	label: 'Fast antal',
	price: 'Fra 9500 kr. eksklusiv moms',
	priceDescription:
		'Minimum 200 cocktails - 47,50 kr. /stk. Extra cocktails fra. 25 kr. /stk. ekskl. moms.',
	features: [
		'Professionelle bartendere',
		'Mobil bar',
		'Transport (sjælland)',
		'2 - 3 timer',
		'2 - 4 cocktails'
	]
} as PricingPackage;

export const availablePricingPackages = [unlimited, fixed, premixed] as PricingPackage[];
