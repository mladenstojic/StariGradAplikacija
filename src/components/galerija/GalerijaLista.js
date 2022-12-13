import Slika1 from "../../slike/42.jpg";
import Slika2 from "../../slike/101.jpg";
import Slika3 from "../../slike/217.jpg";
import Slika4 from "../../slike/236.jpg";
import Slika5 from "../../slike/258.jpg";
import Slika6 from "../../slike/259.jpg";
import Slika7 from "../../slike/260.jpg";
import Slika8 from "../../slike/261.jpg";
import Slika9 from "../../slike/268.jpg";
import Slika10 from "../../slike/278.jpg";
import Slika11 from "../../slike/298.jpg";
import Slika12 from "../../slike/302.jpg";
import Slika13 from "../../slike/312.jpg";
import Slika14 from "../../slike/325.jpg";
import Slika15 from "../../slike/334.jpg";
import Slika16 from "../../slike/335.jpg";
import Slika17 from "../../slike/337.jpg";
import Slika18 from "../../slike/358.jpg";
import Slika19 from "../../slike/369.jpg";
import Slika20 from "../../slike/Grb-Vojinovica.png";
import Slika21 from "../../slike/stari-grad1.png";
import Slika22 from "../../slike/stari-grad2.jpg";
import Slika23 from "../../slike/nikola.jpg";
import Slika24 from  "../../slike/skica1.png";
import Slika25 from "../../slike/skica2.png";
import Slika26 from "../../slike/skica3.png";
import Slika27 from "../../slike/skica4.png";

const GalerijaLista = [
    {
        id: 1,
        slika: Slika1,
        tekst:"",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 2,
        slika: Slika2,
        tekst:"Стара хидроцентрала и Ужички град на фотографији са почетка 20. века",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 3,
        slika: Slika3,
        tekst:"Поглед на Ужички град и варош  са југозапада  на фотографији насталој између два светска рата",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 4,
        slika: Slika4,
        tekst:"Поглед на рушевине Водене куле Ужичког града, Стару хидроцентралу и варош са југозапада на фотографији са почетка 20. века",
        izvor:"Извор: Историјски архив Ужице",
        tip:"portret"

    },
    {
        id: 5,
        slika: Slika5,
        tekst:"",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 6,
        slika: Slika6,
        tekst:"Поглед на Стари град на фотографији насталој након изградње старог железничког моста насталој двадесетих година 20. века",
        izvor:"Извор: Историјски архив Ужице",
        tip:"portret"
    },
    {
        id: 7,
        slika: Slika7,
        tekst:"Поглед на Ужички град и варош на фотографији насталој тридесетих година 20. века",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 8,
        slika: Slika8,
        tekst:"Поглед на Стари град са истока на фотографији насталој током радова на изградњи железничког моста и новог Златиборског пута насталој двадесетих година 20. века",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 9,
        slika: Slika9,
        tekst:"",
        izvor:"Извор: Историјски архив Ужице",
        tip:"portret"
    },
    {
        id: 10,
        slika: Slika10,
        tekst:"",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
        
    },
    {
        id: 11,
        slika: Slika11,
        tekst:"Поглед на Ужички град са новог Златиборског пута фотографији насталој тридесетих година 20. века, Историјски архив Ужице",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 12,
        slika: Slika12,
        tekst:"",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 13,
        slika:Slika13,
        tekst:"",
        izvor:"Извор: Историјски архив Ужице",
        tip:"portret"
    },
    {
        id: 14,
        slika: Slika14,
        tekst:"Поглед на Ужички град са новог Златиборског пута фотографији из 1928. године",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 15,
        slika: Slika15,
        tekst:"",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 16,
        slika: Slika16,
        tekst:"Поглед на Ужички град са Читакове стене на фотографији насталој између два светска рата",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
    },
    {
        id: 17,
        slika: Slika17,
        tekst:"",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
        
    },
    {
        id: 18,
        slika: Slika18,
        tekst:"",
        izvor:"Извор: Историјски архив Ужице",
        tip:"portret"
    },
    {
        id: 19,
        slika: Slika19,
        tekst:"Ужички град са околином на цртежу Аустријанца Феликса Каница из 1860. године, поглед са јужне стране",
        izvor:"Извор: Историјски архив Ужице",
        tip:"landscape"
        
    },
    {
        id: 20,
        slika: Slika20,
        tekst:"Грб породице Војиновић, извор:",
        izvor: "wikipedija",
        src: "https://sr.wikipedia.org/wiki/%D0%92%D0%BE%D1%98%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%D1%9B%D0%B8",
        tip:"portret"
    },
    {
        id: 21,
        slika: Slika21,
        tekst:"Изглед Старог града Ужица пре реконструкције горњег града",
        izvor:"Извор: Ужички лексикон",
        tip:"portret"
    },
    {
        id: 22,
        slika: Slika22,
        tekst:"Цитадела са кулом након реконструкције горњег града Извор: ",
        izvor: "telegraf.rs",
        src: "https://www.telegraf.rs/putovanja/ja-volim-srbiju/3395701-simbol-uzica-dobija-novi-izgled-rekonstrukcija-i-konzervacija-grada sagradjenog-na-litici-iznad-reke-djetinje?galerija=1&amp;slika=2",
        tip:"landscape"
    },
    {
        id: 23,
        slika: Slika23,
        tekst:"Модел Николе Алтомановића израђен за потребе апликације",
        tip:"portret"
    },
    {
        id: 23,
        slika: Slika24,
        tekst:"Скица 1. Стари град Ужице у другој половини XIV века",
        izvor:" Извор: Поповић, М. (2004). Стари град Ужице, стр. 87",
        tip:"portret"
    },
    {
        id: 24,
        slika:Slika25,
        tekst:"Скица 2. Замишљени изглед цитаделе са кулом",
        izvor:"Извор: Поповић, М. (2004). Стари град Ужице, стр. 93",
        tip:"portret"
    },
    {
        id: 25,
        slika: Slika26,
        tekst:"Скица 3. Изглед цитаделе и унутрашњи пресек куле",
        izvor: "Извор: Поповић, М. (2004). Стари град Ужице, стр. 83",
        tip:"portret"
    },
    {
        id: 26,
        slika:Slika27,
        tekst:"Скица 4. Изглед полукружне куле",
        izvor:"Извор: ПоповићМ. (2004). Стари град Ужице, стр. 82",
        tip:"portret"
    }
  ];
  
  export default GalerijaLista;