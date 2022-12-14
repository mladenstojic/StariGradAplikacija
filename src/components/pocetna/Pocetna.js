import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tip1 from "../sadrzaj/Tip1.js";
import Tip2 from "../sadrzaj/Tip2.js";
import StariGrad from "../../slike/naslovna.jpg";
import GrbVojinovica from "../../slike/Grb-Vojinovica.png";
import Nikola from "../../slike/nikola.jpg";
import Carousel from "../carousel/Carousel.js";

function Pocetna({ tekst }) {
  const [pocetnaTekst, setPocetnaTekst] = useState([]);

  useEffect(() => {
    const getTekst = async () => {
      const izvuciTekst = await tekst;
      setPocetnaTekst(izvuciTekst);
    };

    getTekst();
  }, [tekst]);
  return (
    <>
      <Carousel tekst={pocetnaTekst} dugme={true} />
      <article className="pocetna-strana">
        <Tip1 naslov={pocetnaTekst.Naslov1} tekst={pocetnaTekst.Tekst1} />
        <Tip2
          dugme={pocetnaTekst.Dugme}
          tekst={pocetnaTekst.Tekst3}
          naslov={pocetnaTekst.Naslov3}
          slika={Nikola}
          lokacija="/history/nikola-altomanovic"
        />
        <Tip2
          dugme={pocetnaTekst.Dugme}
          orjentacija="row-reverse"
          tekst={pocetnaTekst.Tekst2}
          naslov={pocetnaTekst.Naslov2}
          slika={StariGrad}
          lokacija="/history/citadel"
        />
        <Tip2
          dugme={pocetnaTekst.Dugme}
          tekst={pocetnaTekst.Tekst4}
          slika={GrbVojinovica}
          naslov={pocetnaTekst.Naslov4}
          lokacija="/history/vojinovic-family"
        />
      </article>
      <section className="footer-container mapa-wrapper">
        <div className="footer-element-wrapper">
          <form>
            <input className="form-input-field" placeholder="Име" />
            <input className="form-input-field" placeholder="Имејл" />
            <textarea
              className="form-text-area"
              placeholder="Унесите Ваш коментар"
            />
            <button disabled className="form-button">ПОШАЉИ</button>
          </form>
        </div>
        <div className="footer-element-wrapper mapa">
          <iframe
            className="mapa"
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4068.917448845321!2d19.827266194963762!3d43.852530518751976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759d335037add3d%3A0xe658d6968fc644d3!2z0KHRgNC_0YHQutCwINGC0LLRgNGS0LDQstCwINCh0YLQsNGA0Lgg0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1670294091746!5m2!1ssr!2srs"
            width=""
            height=""
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

Pocetna.defaultProps = {
  tekst: {},
};

Pocetna.propTypes = {
  tekst: PropTypes.object,
};

export default Pocetna;
