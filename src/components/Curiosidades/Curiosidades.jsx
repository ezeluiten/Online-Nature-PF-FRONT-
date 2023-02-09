import React from "react";
import style from "./Curiosidades.module.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import img1 from "./plantarunarbol.png";
import img2 from "./pandas.png";
import img3 from "./donar.png";

const Curiosidades = () => {
	return (
		<div className={style.bodyy}>
			<Navbar />
			<div className={style.contenedor}>
				<div className={style.cuadro}>
					<div>
						<img src={img1} alt="" className={style.dibujitos} />
					</div>
					<h2>Plant a tree!</h2>
					<h3 className={style.parrafos}>
						Planting a tree can help reduce air pollution and improve air
						quality. In addition, planting a tree can also improve biodiversity
						and the environment in many other ways. Here are some interesting
						trivia about planting trees: Planting trees can improve air quality
						by reducing the amount of carbon dioxide in the air. The trees use
						the carbon dioxide during photosynthesis and convert it to oxygen,
						which helps improve air quality. plant trees can Help prevent soil
						erosion. tree roots help hold soil in place and prevent soil erosion
						soil, especially in areas with heavy rain. trees can help improve
						water quality. The leaf litter and the roots of the Trees help
						filter impurities in the water and maintain the water quality in
						nearby streams and rivers. plant trees can help reduce the heat
						island effect. The cities with a dense tree cover have fewer
						problems with the effect of heat island compared to treeless cities,
						which means that cities with more trees are cooler and more nice to
						live. Trees are important for biodiversity. Trees provide home and
						food for a variety of animal and plant species, which contributes to
						the biodiversity and ecological balance. Planting trees can improve
						mental and physical health. Studies have shown that spending time in
						the outdoors, especially in green areas, can reduce stress and
						improve mental and physical health. Planting trees can be a
						long-term investment. A young tree can grow to be a large and
						valuable tree in a relatively short period of time, which which
						makes it a long-term investment for people who they plant trees.
						Planting trees can be a way to mitigate the climate change.
					</h3>
				</div>
				<div className={style.cuadro}>
					<div>
						<img src={img2} alt="" className={style.dibujitos} />
					</div>
					<h2>Adopt an animal!</h2>
					<h3 className={style.parrafos}>
						Adopting an endangered animal can virtually help support the
						conservation and protection efforts of that species. With today's
						advanced technology, it can be easy and rewarding to adopt an
						endangered animal, even from the comfort of your home. Here are some
						interesting trivia on virtual adoption of endangered animals: The
						virtual adoption can help fund conservation projects. By virtually
						adopting an animal, your money can be used to finance conservation
						projects that protect and help restore populations of that
						endangered species. adoption virtual can help educate the public
						about conservation. To the adopt a virtual animal, you will also
						receive information about the adopted species, including their
						habitats, behaviors, and challenges of conservation. This
						information can help increase the awareness and support for the
						conservation of that species. adoption virtual is an easy way to
						help. Does not require any commitment additional time or resources,
						and can be a simple and effective way to make a difference in the
						life of an endangered animal extinction. Virtual adoption can be a
						fun and education to get involved with conservation. adopt an animal
						virtual can be a fun and educational way to learn more on
						conservation and endangered species, and on get involved in the
						protection of these species. virtual adoption It can be a meaningful
						gift for a friend or loved one. To the virtually adopt an endangered
						animal on behalf of someone else, it can be a meaningful gift that
						shows your Commitment to conservation and the environment. adoption
						virtual life can be an effective way to help species that are not
						accessible for physical adoption. Some species in endangered may
						live in remote or dangerous places, which that makes it impossible
						for most people to adopt them in a physical way. Virtual adoption
						can be an effective way to help those species and support
						conservation.
					</h3>
				</div>
				<div className={style.cuadro}>
					<div>
						<img src={img3} alt="" className={style.dibujitos} />
					</div>
					<h2>Donate = Save!</h2>
					<h3 className={style.parrafos}>
						Donating to a species conservation organization can help fund
						projects to protect and research endangered animals and trees. In
						addition to being an act of generosity, the donation can have a real
						impact on the conservation of endangered species and their habitat.
						Here are some interesting trivia about virtual donation of
						endangered animals and trees: The donation can help fund
						conservation projects. Conservation organizations rely on donations
						to carry out critical conservation projects, from research to
						habitat protection and species recovery. The donation can help save
						endangered species. With each donation, a key project or initiative
						can be funded that protects an endangered animal or tree and its
						habitat. Donating can be a way to get involved with conservation. By
						donating, you can learn more about the species and projects you're
						supporting, and stay on top of conservation progress and
						achievements. Donating can be an easy and convenient way to help.
						With modern technology, it's easy to donate online and support
						conservation organizations from the comfort of your home. The
						donation can be a meaningful gift to a friend or loved one. By
						donating on behalf of someone else, you can be a meaningful gift
						that shows your commitment to conservation and the environment.
						Donating can be an effective way to support species that are not
						accessible for physical adoption. Some endangered species can live
						in remote or dangerous locations, making it impossible for most
						people to physically adopt or donate them. Virtual donation can be
						an effective way to support those species and support conservation.
						The donation can help protect the habitat of the species. In
						addition to directly supporting the species, the donation can also
						help protect the habitat in which it lives, including natural
						resources and ecosystems.
					</h3>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Curiosidades;
