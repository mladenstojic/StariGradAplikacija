import Slika from "../sadrzaj/Slika.js";
import PropTypes from "prop-types";
import Tip3 from "../sadrzaj/Tip3.js";
import Tip4 from "../sadrzaj/Tip4.js";
import Naslovna from "../naslovnaslika/Naslovna.js";
import NaslovnaSlika from "../../slike/369.jpg";
import PorodicnoStablo from "../../slike/porodicno-stablo.PNG";
import audioRs from "../../audio/MP3_srp/Vojinovici.mp3";
import audioEng from "../../audio/MP3-eng/VojinovicFamily_eng.mp3";
import audioGer from "../../audio/MP3-nem/Vojinovici_nem.mp3";
import audioRus from "../../audio/MP3-rus/Породица Војиновић.mp3";
import { useTranslation } from "react-i18next";

function Porodicavojinovic({ tekst, nemaSlika, jezik }) {
  const { t } = useTranslation();

  return (
    <>
      <Naslovna
        jezik={jezik}
        audioRs={audioRs}
        audioEng={audioEng}
        audioGer={audioGer}
        audioRus={audioRus}
        naslovnaSlika={NaslovnaSlika}
        title={t("porodica_vojinovic_main_title")}
        subtitle={t("porodica_vojinovic_main_subtitle")}
      />
      <article className="pozadina">
        <Tip3
          naslov={t("porodica_vojinovic_title1")}
          tekst={t("porodica_vojinovic_subtitle1")}
          nemaSlika={nemaSlika}
        />
        <Slika slika={PorodicnoStablo} usko={true} />
        <Tip3 tekst={t("porodica_vojinovic_subtitle2")} nemaSlika={nemaSlika} />
        <Tip4
          orjentacija="row-reverse"
          tekst={t("porodica_vojinovic_subtitle3")}
          nemaSlika={nemaSlika}
        />
        <Tip3
          naslov={t("porodica_vojinovic_title2")}
          tekst={t("porodica_vojinovic_subtitle4")}
          nemaSlika={nemaSlika}
        />
        <Tip4 tekst={t("porodica_vojinovic_subtitle5")} nemaSlika={nemaSlika} />
        <Tip3 tekst={t("porodica_vojinovic_subtitle6")} nemaSlika={nemaSlika} />
        <Tip4
          orjentacija="row-reverse"
          tekst={t("porodica_vojinovic_subtitle7")}
          nemaSlika={nemaSlika}
        />
        <Tip3 tekst={t("porodica_vojinovic_subtitle8")} nemaSlika={nemaSlika} />
        <ol className="izvor">
          {t("porodica_vojinovic_literatura")}
          <li>{t("porodica_vojinovic_literatura1")}</li>
          <li>{t("porodica_vojinovic_literatura2")}</li>
          <li>{t("porodica_vojinovic_literatura3")}</li>
          <li>{t("porodica_vojinovic_literatura4")}</li>
          <li>{t("porodica_vojinovic_literatura5")}</li>
          <li>{t("porodica_vojinovic_literatura6")}</li>
          <li>{t("porodica_vojinovic_literatura7")}</li>
          <li>{t("porodica_vojinovic_literatura8")}</li>
        </ol>
      </article>
    </>
  );
}

Porodicavojinovic.defaultProps = {
  tekst: {},
  nemaSlika: false,
};

Porodicavojinovic.propTypes = {
  tekst: PropTypes.object,
  nemaSlika: PropTypes.bool,
};

export default Porodicavojinovic;
