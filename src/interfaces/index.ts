export interface Colors {
	primary: string;
	secondary: string;
}

export interface Weight {
	sm: string;
	md: string;
	lg: string;
}

export interface Theme {
	colors: Colors;
	size: string;
	weight: Weight;
}

export interface Testimonial {
	name: string;
	carrer: string;
	phrase: string;
	img: string;
}

export interface ComponentProps {
	theme?: Theme;
	colour?: boolean;
	size?: string;
	w?: boolean;
	weight?: string;
	uppercase?: boolean;
	img?: string;
	quotes?: boolean;
}
