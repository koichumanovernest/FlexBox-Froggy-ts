export interface Props {
	ForexampleText: {
		text: string;
		spanText: string;
		endText: string;
	};
	spaceAroundText: {
		BeautifulText_5: string;
		NearText_5: string;
	};

	spaceBetweenText: {
		BeautifulText_4: string;
		NearText_4: string;
	};
	centerText: {
		BeautifulText_3: string;
		NearText_3: string;
	};
	flexEndText: {
		BeautifulText_2: string;
		NearText_2: string;
	};
	newText: {
		BeautifulText_1: string;
		NearText_1: string;
	};
	text: {
		Greetings: string;
		spanText: string;
		endText: string;
		andText: string;
	};
	AndText: {
		andText: string;
	}
	Pond: {
		name: string;
		text: string;
		endText: string;
	};

	Title: {
		title1: string;
	};
	styles: object | undefined;
	handleNextLevel: (() => void) | undefined
	currentLevel: number;
	inputValue: string;
	solution:string;

}
