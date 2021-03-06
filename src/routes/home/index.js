import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						Learn Salesforce from basic and get all solution.
					</div>
					<div class={style.author}>- Jyoti</div>
				</div>
			</div>
			<div class={style.bio}>
				<p class={style.bioleft}>
					
				</p>
				<p class={style.bioright}>
					
				</p>
			</div>
		</div>
	);
};

export default Home;
