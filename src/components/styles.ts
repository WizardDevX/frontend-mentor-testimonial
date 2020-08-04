import styled from "styled-components";
import curve from "../assets/img/pattern-curve.svg";
import patternBg from "../assets/img/pattern-bg.svg";
import patternQuotes from "../assets/img/pattern-quotes.svg";
import { ComponentProps } from "../interfaces";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url(${curve}) left bottom no-repeat;
`;

export const SliderBox = styled.div`
	position: relative;
	width: 80%;
	height: 80%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: nowrap;

	@media screen and (max-width: 1024px) {
		flex-direction: column;
		row-gap: 4em;
	}
`;

export const ImageBox = styled.div`
	position: relative;
	width: calc(100% - 60%);
	height: 100%;

	&::before {
		content: "";
		position: absolute;
		width: 130%;
		height: 124%;
		top: -13%;
		left: -13%;
		background-image: url(${patternBg});
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
	}
	@media screen and (max-width: 1024px) {
		order: -1;
		width: 100%;
		height: 50%;
	}
`;

export const ProfileBox = styled.div`
	display: flex;
	width: calc(100% - 40%);
	height: 100%;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	@media screen and (max-width: 1024px) {
		width: 100%;
		height: 40%;
		row-gap: 2em;
		margin-top: 10px;
	}
`;

export const ButtonBox = styled.div`
	position: absolute;
	top: 85%;
	left: 20%;
	width: 90px;
	height: 50px;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 2em;
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media screen and (max-width: 1024px) {
		left: 50%;
		top: 100%;
	}
`;

export const Button = styled.div.attrs<ComponentProps>(({ img }) => ({
	img: img || "",
}))<ComponentProps>`
	display: inline-block;
	width: 20px;
	height: 20px;
	background-image: ${({ img }) => `url(${img})`};
	background-repeat: no-repeat;
	background-size: contain;
	object-fit: contain;
	background-position: center;
	cursor: pointer;
`;

export const Profile = styled.div`
	margin-top: 1em;
	display: flex;
	justify-content: space-between;
	column-gap: 10px;

	@media screen and (max-width: 1024px) {
		width: auto%;
		margin: 0 auto;
		flex-direction: column;
		row-gap: 3px;
		text-align: center;
	}
`;

export const Text = styled.p.attrs<ComponentProps>(({ theme, ...props }) => ({
	colour: props.colour || false,
	weight: props.weight || "lg",
	size: props.size || theme.size,
	w: props.w || false,
	uppercase: props.uppercase || false,
	quotes: props.quotes || false,
}))<ComponentProps>`
	position: relative;
	width: ${({ w }) => (w ? "120%" : "auto")};
	color: ${({ theme, colour }) =>
		colour ? theme.colors["primary"] : theme.colors["secondary"]};
	text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "")};
	font-size: ${({ size }: any) => size};
	font-weight: ${({ theme, weight }: any) => theme.weight[weight]};
	z-index: 1;

	${({ quotes }) =>
		quotes
			? `&::before {
		content: "";
		position: absolute;
		top: -20%;
		left: 10%;
		width: 10%;
		height: 40%;
		background-image: url(${patternQuotes});
		background-size: 100%;
		background-repeat: no-repeat;
	}`
			: ""}

	@media screen and (max-width: 1024px) {
		font-weight: 500;
		font-size: 24px;
		${({ w }) =>
			w
				? `width: 80%;
		margin: 0 auto;
		&::before {
			top: -10%;
			left: 40%;
		}`
				: ""}
	}

	@media screen and (max-width: 650px) {
		font-size: 1.2em;
	}
`;

export const Img = styled.img`
	position: absolute;
	width: 100%;
	height: 70%;
	background-position: center;
	background-repeat: no-repeat;
	box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.4);
	background-size: contain;
	border-radius: 5px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media screen and (max-width: 1024px) {
		width: 80%;
		height: 100%;
	}
`;
