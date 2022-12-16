import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./naslovna.css";

function Podmenu({ audioRs, audioEng, audioGer, audioRus }) {
  const [audio, setAudio] = useState();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    const getAudio = async () => {
      if (currentLang === "rs") {
        setAudio(audioRs);
      } else if (currentLang === "en") {
        setAudio(audioEng);
      } else if (currentLang === "de") {
        setAudio(audioGer);
      } else if (currentLang === "ru") {
        setAudio(audioRus);
      }
    };

    getAudio();
  }, [currentLang]);

  return (
    <div className="sec-nav">
      <audio controls src={audio} />
    </div>
  );
}

export default Podmenu;
