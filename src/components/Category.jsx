import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const productsCategory = [
	{
		id: 1,
		title: "Stethoscope",
		price: 15000,
		category: "equipment",
		image:
			"https://kartikhospital.com/wp-content/uploads/2020/12/Rectangle-15.jpg",
		review: "15.5K",
		rating: {
			rate: 3.9,
			count: 120,
		},
	},
	{
		id: 2,
		title: "Stethoscope",
		price: 15000,
		category: "equipment",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRqTMOkbLPuZIctCqiieElTz3t89ZDUA8IVET2lESguns1Bf00e-Fxgf7oiSMXV1oiLo&usqp=CAU",
		review: "15.5K",
		rating: {
			rate: 3.9,
			count: 120,
		},
	},
	{
		id: 3,
		title: "Stethoscope",
		price: 15000,
		category: "equipment",
		image:
			"https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2020/12/close-up-of-COVID-19-vaccine-vial-being-held-by-a-person-wearing-a-blue-PPE-glove-shutterstock_1678629760_Fotor-16x9-1.jpg",
		review: "15.5K",
		rating: {
			rate: 3.9,
			count: 120,
		},
	},
	{
		id: 4,
		title: "Stethoscope",
		price: 15000,
		category: "equipment",
		image:
			"https://www.medilexonline.com/wp-content/uploads/2020/10/Prices-for-medical-equipment-1280x720.png",
		review: "15.5K",
		rating: {
			rate: 3.9,
			count: 120,
		},
	},
	{
		id: 5,
		title: "Stethoscope",
		price: 15000,
		category: "equipment",
		image:
			"https://www.verywellhealth.com/thmb/lV6ctZOUpPXwfUf9QXRjG3VEzQc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-521982493-56b5145c3df78c0b135449cc.jpg",
		review: "15.5K",
		rating: {
			rate: 3.9,
			count: 120,
		},
	},
	{
		id: 6,
		title: "Stethoscope",
		price: 15000,
		category: "equipment",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERa5NKqZv5xec8dqmT53NaBq1C1F6YHpJeQ&usqp=CAU",
		review: "15.5K",
		rating: {
			rate: 3.9,
			count: 120,
		},
	},
];

const Category = () => {
	const slider = useRef(null);

	function slideNext() {
		slider?.current?.slickNext();
	}

	function slidePrev() {
		slider?.current?.slickPrev();
	}

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		pauseOnHover: true,
		nextArrow: <></>,
		prevArrow: <></>,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="mx-10 mb-10">
			<h1 className="font-bold text-2xl text-brand">Category</h1>

			<div className="">
				<div className={`flex py-2 justify-end gap-4 px-5 relative`}>
					<ChevronLeftIcon
						onClick={() => slidePrev()}
						className={
							"flex items-center justify-center bg-brand p-2 rounded-full h-10 w-10  text-white text-lg cursor-pointer absolute z-10 left-[-15px] top-[7rem]"
						}
					></ChevronLeftIcon>
					<ChevronRightIcon
						onClick={() => slideNext()}
						className={
							"flex items-center justify-center bg-brand p-2 rounded-full h-10 w-10  text-white text-lg cursor-pointer absolute z-10 right-[-15px] top-[7rem]"
						}
					></ChevronRightIcon>
				</div>
				<Slider ref={slider} {...settings}>

					{productsCategory.map((item, id) => {
						return (
							<div
								key={id}
								className="border border-solid border-black-600 p-2 bg-white w-[200px] 
								h-[200px] lg:h-[250px] md:w-[200px] md:h-[250px] cursor-pointer relative"
							>
								<img src={item.image} alt="logo" className="w-full h-full" />
							</div>
						);
					})}

				</Slider>
			</div>
		</div>
	);
};

export default Category;
