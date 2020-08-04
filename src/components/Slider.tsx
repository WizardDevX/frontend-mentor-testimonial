import React, { useState } from "react";
import { Testimonial } from "../interfaces";
import {
	SliderBox,
	ImageBox,
	ProfileBox,
	ButtonBox,
	Text,
	Img,
	Profile,
	Button,
} from "./styles";
import { johnImg, tanyaImg, prev, next } from "../assets/img";

const testimonials: Testimonial[] = [
	{
		name: "Tanya Sinclair",
		carrer: "UX Engineer",
		phrase:
			"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
		img: tanyaImg,
	},
	{
		name: "John Tarkpor",
		carrer: "Junior Front-end Developer",
		phrase:
			"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
		img: johnImg,
	},
];

const Slider = () => {
	const [testimonial, setTestimonial] = useState<Testimonial[]>(testimonials);
	const [current, setCurrent] = useState<number>(0);

	const changeProfile = (
		e: React.MouseEvent<HTMLDivElement>,
		nextProfile: number
	) => {
		e.preventDefault();

		nextProfile += current;

		if (nextProfile >= testimonial.length) nextProfile = 0;
		if (nextProfile < 0) nextProfile = testimonial.length - 1;

		setCurrent(nextProfile);
	};

	return (
		<SliderBox>
			<ProfileBox>
				<Text uppercase={true} colour={true} w={true} quotes={true}>
					{testimonial[current].phrase}
				</Text>
				<Profile>
					<Text as="span" weight="lg" colour size="1.5em">
						{testimonial[current].name}
					</Text>
					<Text as="span" weight="sm" size="1.5em">
						{testimonial[current].carrer}
					</Text>
				</Profile>
			</ProfileBox>
			<ImageBox>
				<Img src={testimonial[current].img} />
				<ButtonBox>
					<Button img={prev} onClick={e => changeProfile(e, -1)} />
					<Button img={next} onClick={e => changeProfile(e, 1)} />
				</ButtonBox>
			</ImageBox>
		</SliderBox>
	);
};

export default Slider;
