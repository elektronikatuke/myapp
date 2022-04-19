import React, { useEffect } from 'react';
import Fractions from '../../komponenty/Fractions';
import '../../App.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import Example_2_4 from '../../examples/examples_2/Stvrta/example_2_4';
import Example_2_4_1 from '../../examples/examples_2/Stvrta/example_2_4_1';
import Example_2_4_2 from '../../examples/examples_2/Stvrta/example_2_4_2';
import Example_2_4_3 from '../../examples/examples_2/Stvrta/example_2_4_3';
import Example_2_4_4 from '../../examples/examples_2/Stvrta/example_2_4_4';




const Week_2_example_4 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return(
        <div>
            <h1 className="nadpis"> 
                    Príklad č. 3
            </h1>


            <div data-aos="fade" className="flex_left">

                <p>
                Sieť podľa obr. 2.1 je navrhnutá tak, aby obmedzila napätie na 20 V počas kladnej časti aplikovaného napätia a na 0 V pre zápornú odchýlku aplikovaného napätia. Skontrolujte jeho činnosť a zakreslite priebeh napätia naprieč systémom pre použitý signál. Predpokladajme, že systém má veľmi vysoký vstupný odpor, takže neovplyvní správanie siete.
                </p>
                {Example_2_4()}
                {Example_2_4_1()}
                <p>Fig. 2.1</p>
            
            </div>

            <div data-aos="fade-left" className="flex_left">
                <h2>Riešnie</h2>
                <p>Pre kladné aplikované napätie menšie ako Zenerov potenciál 20 V bude Zenerova dióda v stave približne otvoreného obvodu a vstupný signál sa jednoducho rozdelí medzi prvky, pričom väčšina ide do systému, pretože má takú vysokú úroveň odporu.</p>
                <p>Keď napätie na Zenerovej dióde dosiahne <b>20 V</b>, Zenerova dióda sa zapne, ako je znázornené na obr. 2.2a, a napätie v systéme sa zablokuje na <b>20 V.</b> Ďalšie zvýšenia aplikovaného napätia sa jednoducho objavia na sériovom rezistore, pričom napätie naprieč systémom a predpätá dióda zostane pevne nastavená na <b>20 V a 0,7 V</b>. Napätie v systéme je pevne stanovené na <b>20 V</b>, ako je znázornené na obr. 2.2a, pretože <b>0,7 V</b> diódy nie je medzi definovanými výstupnými svorkami. Systém je preto bezpečný pred akýmkoľvek ďalším zvýšením použitého napätia.</p>
                <p>Pre zápornú oblasť aplikovaného signálu je kremíková dióda spätne predpätá a predstavuje otvorený obvod pre sériovú kombináciu prvkov. Výsledkom je, že celý záporne aplikovaný signál sa objaví cez diódu s otvoreným obvodom a záporné napätie v systéme je uzamknuté na 0 V, ako je znázornené na obr. 2.2b.</p>
            
            </div>

            <div data-aos="fade-right" className="flex_left">
                
                {Example_2_4_2()}
                <p>Fig. 2.2 a)</p>
                {Example_2_4_3()}
                <p>Fig. 2.2 b)</p>


            </div>

            <div data-aos="fade-left" className="flex_left">

                <p>Napätie v systéme bude preto vyzerať tak, ako je znázornené na obr. 2.2c.</p>
                {Example_2_4_4()}
                
            </div>
        </div>
    );
}

export default Week_2_example_4;