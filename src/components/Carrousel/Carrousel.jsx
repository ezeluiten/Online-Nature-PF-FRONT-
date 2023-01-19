import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpgA3NSY3vff7oKDCre7m5MkpuhZlEkTw0w&usqp=CAU"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
						quia culpa fugit saepe atque, exercitationem nesciunt. Sapiente
						voluptates temporibus a.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCe28NcjgwiclVPZrMWXmmbRhoiWQ9rdrjNQ&usqp=CAU"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
						quia culpa fugit saepe atque, exercitationem nesciunt. Sapiente
						voluptates temporibus a.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bawkqxY1xdWWIPnVPwspp4mmsvvPUq_wbg&usqp=CAU"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
						quia culpa fugit saepe atque, exercitationem nesciunt. Sapiente
						voluptates temporibus a.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFadeExample;
