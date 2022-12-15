import PropTypes from "prop-types";
import "../naslovnaslika/naslovna.css";
import "./istorijat.css";
import Tip3 from "../sadrzaj/Tip3.js";
import Tip4 from "../sadrzaj/Tip4.js";
import Naslovna from "../naslovnaslika/Naslovna.js";
import NaslovnaSlika from "../../slike/369.jpg";
import audioRs from "../../audio/MP3_srp/NAltomanovic.mp3";
import audioEng from "../../audio/MP3-eng/NAltmanovic_eng.mp3";
import audioGer from "../../audio/MP3-nem/NAltomanovic_nem.mp3";
import audioRus from "../../audio/MP3-rus/Никола Алтомановић.mp3";
import { useTranslation } from "react-i18next";

function Nikolaaltomanovic({ nemaSlika, jezik }) {
  const { t } = useTranslation();

  return (
    <>
      <Naslovna
        jezik={jezik}
        audioRs={audioRs}
        audioEng={audioEng}
        audioGer={audioGer}
        audioRus={audioRus}
        title={t('naltomanovic_main_title')}
        subtitle={t('naltomanovic_main_subtitle')}
        naslovnaSlika={NaslovnaSlika}
      />
      <article className="pozadina">
        <Tip3
          naslov={t("naltomanovic_title1")}
          tekst={t("naltomanovic_subtitle1")}
          nemaSlika={nemaSlika}
        />
        <Tip4 tekst={t("naltomanovic_subtitle2")} nemaSlika={nemaSlika} />
        <Tip3 tekst={t("naltomanovic_subtitle3")} nemaSlika={nemaSlika} />
        <Tip4 tekst={t("naltomanovic_subtitle4")} nemaSlika={nemaSlika} />
        <Tip3 tekst={t("naltomanovic_subtitle5")} nemaSlika={nemaSlika} />
        <Tip4 tekst={t("naltomanovic_subtitle6")} nemaSlika={nemaSlika} />
        <Tip3
          naslov={t("naltomanovic_title2")}
          tekst={t("naltomanovic_subtitle7")}
          nemaSlika={nemaSlika}
        />
        <Tip4 tekst={t("naltomanovic_subtitle8")} nemaSlika={nemaSlika} />
        <Tip3 tekst={t("naltomanovic_subtitle9")} nemaSlika={nemaSlika} />
        <Tip4 tekst={t("naltomanovic_subtitle10")} nemaSlika={nemaSlika} />
        <Tip3 tekst={t("naltomanovic_subtitle11")} nemaSlika={nemaSlika} />
        <Tip4 tekst={t("naltomanovic_subtitle12")} nemaSlika={nemaSlika} />
        <Tip3 tekst={t("naltomanovic_subtitle13")} nemaSlika={nemaSlika} />
        <Tip4 tekst={t("naltomanovic_subtitle14")} nemaSlika={nemaSlika} />
        <Tip3
          naslov={t("naltomanovic_title3")}
          tekst={t("naltomanovic_subtitle15")}
          nemaSlika={nemaSlika}
        />
        <Tip4 tekst={t("naltomanovic_subtitle16")} nemaSlika={nemaSlika} />
        <Tip3 tekst={t("naltomanovic_subtitle17")} nemaSlika={nemaSlika} />
        <Tip4 tekst={t("naltomanovic_subtitle18")} nemaSlika={nemaSlika} />
        <Tip3 tekst={t("naltomanovic_subtitle19")} nemaSlika={nemaSlika} />
        <Tip4 tekst={t("naltomanovic_subtitle20")} nemaSlika={nemaSlika} />
        <Tip3 tekst={t("naltomanovic_subtitle21")} nemaSlika={nemaSlika} />
        <Tip4 tekst={t("naltomanovic_subtitle22")} nemaSlika={nemaSlika} />
        <Tip3 tekst={t("naltomanovic_subtitle23")} nemaSlika={nemaSlika} />
        <ol className="izvor">
          {t("naltomanovic_literatura")}
          <li>{t("naltomanovic_literatura1")}</li>
          <li>{t("naltomanovic_literatura2")}</li>
          <li>{t("naltomanovic_literatura3")}</li>
          <li>{t("naltomanovic_literatura4")}</li>
          <li>{t("naltomanovic_literatura5")}</li>
          <li>{t("naltomanovic_literatura6")}</li>
          <li>{t("naltomanovic_literatura7")}</li>
          <li>{t("naltomanovic_literatura8")}</li>
        </ol>
      </article>
    </>
  );
}

Nikolaaltomanovic.defaultProps = {
  tekst: {},
  nemaSlika: false,
};

Nikolaaltomanovic.propTypes = {
  tekst: PropTypes.object,
  nemaSlika: PropTypes.bool,
};

export default Nikolaaltomanovic;
