import React from 'react'
import BigImgCard from '../../cards/BigImgCard'
import ProcessLayout from '../../common/ProcessLayout'
import SpecCard from '../../common/SpecCard'
import Layout from '../../Layout'
import { AiOutlineRight } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { GrFormCheckmark } from 'react-icons/gr'
import News from '../../common/News'

const Producten = () => {
  const img =
    'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2916&q=80'
  return (
    <Layout
      customHeight={'min-h-[20rem]  lg:min-h-[28rem]  max-h-[50vh]'}
      noHero
      img="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2916&q=80"
    >
      <div className="flex items-center justify-center min-h-[16rem] z-[999]">
        <h1 className="text-white z-[9999] text-[5vw] md:text-[4vw] font-[300]">
          De producten van Sunnygreen
        </h1>
      </div>
      
         

        <div>
          {[
            {
              title: `Zakelijk zonnepanelen leasen`,
              content: [
                `Een totaaloplossing`,
                `Met MKB ZonneLeasen kies je voor een moderne, duurzame energievoorziening. Daar hoef je geen cent voor te investeren. Je bent altijd zeker van service, onderhoud, garanties, verzekering en financiering.`,
                `Met de combinatie van zonnepanelen, een laadpaal en accu’s ben je gegarandeerd goedkoper of kostenneutraal uit. Een win-win. Het is één van de concepten waarmee we zonnepanelen zakelijk aantrekkelijk maken.`,
              ], 
              btns: [],
              img: `	https://images.unsplash.com/photo-1617269778723-73a40cf299bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`,
            },
            {
              title: `Slim en onafhankelijk`,
              content: [
                `Heb je een wagenpark met elektrische auto’s en wil je graag iets extra’s bieden aan je werknemers? Met zonne-energie van eigen dak ben je 100% in-control. Zakelijk zonnepanelen leasen betekent op een reguliere werkdag energie opwekken én efficiënt inzetten. Is er meer opgewekt dan je hebt verbruikt? Dan sla je de energie op in accu’s – de thuisbatterij- om het te gebruiken wanneer de zon niet schijnt.`,
                `Daarnaast geniet je van alle voordelen van lease:sunnygreen.nl blijft gedurende de lease overeenkomst verantwoordelijk voor reparaties, onderhoud en garanties. Wel zo prettig.`,
              ],
              btns: [],
              img: `https://www.enie.nl/wp-content/uploads/2022/12/screenshot-2022-12-12-at-090746.png`,
            },
          ].map((x, y) => (
            <BigImgCard data={x} i={y} />
          ))}
        </div>

      
        </div>

        <ProcessLayout
          steps={4}
          data={{
            steps: [
              {
                title: `Van grondstoffen tot producten`,
                text: `Grondstoffen van over de hele wereld worden in verschillende fabrieken in het oosten van China verwerkt tot eindproducten.`,
              },
              {
                title: `De oversteek`,
                text: `Deze producten komen samen in de haven van Shanghai en worden op grote containerschepen naar Rotterdam verscheept.`,
              },
              {
                title: `Klaar voor actie`,
                text: `We slaan de producten op in ons magazijn in Rosmalen. Hier liggen ze klaar om per vrachtwagen te worden vervoerd naar de verschillende installateurs door heel Nederland.`,
              },
            ],
          }}
        />

        <div className="flex items-start lg:items-center mt-6 mx-auto lg:max-w-[900px] lg:justify-center flex-col gap-y-6">
          <h2 className="text-3xl lg:text-4xl font-normal">Onze omvormers</h2>
          <p className="font-[100] text-lg">
            De omvormer vormt het hart van de installatie. Het zorgt ervoor dat
            de energie uit de zonnepanelen omgevormd wordt naar bruikbare
            stroom. Vanwege deze essentiële rol zijn wij kritisch in het
            keuzeproces van de juiste leverancier. De grootte en het gewicht van
            de omvormer zijn afhankelijk van het aantal zonnepanelen. Hieronder
            de specificaties voor een systeem van 12 zonnepanelen.
          </p>
        </div>

        <div className="flex flex-col w-full mt-4 gap-y-8 max-w-[900px] mx-auto items-center justify-center">
          {[
            {
              img: 'https://www.enie.nl/wp-content/uploads/2021/11/growatt-tl-xe-serie.jpg',
              title: 'Growatt omvormer',
              afm: '27,1 x 26,7 x 14,2 cm',
              gew: '8,8 kg',
              antaldb:
                'Stil (minder dan 25dB) doordat er geen mechanische koeling is (natuurlijke koeling via convectie).',
              prod: '10 jaar Download de product sheet',
            },
            {
              img: 'https://www.enie.nl/wp-content/uploads/2022/12/enphase-568x568.png',
              title: 'Enphase micro-omvormer (parallel geschakeld)',
              afm: '21,2 x 17,5 mm x 3,2 cm',
              antaldb:
                'Stil (minder dan 25dB) en geen ventilatoren (natuurlijke koeling via convectie).',
              prod: '25 jaar',
              gew: '1,08 kg',
            },
          ].map(({ title, img, afm, antaldb, prod, gew }) => (
            <SpecCard
              img={img}
              title={title}
              afm={afm}
              antaldb={antaldb}
              prod={prod}
              gew={gew}
            />
          ))}
        </div>

        <div className="flex flex-col lg:items-center max-w-[900px] mx-auto mt-20 lg:justify-center gap-y-6">
          <h2 className="font-normal text-4xl">Montagemateriaal</h2>
          <p className="font-[100] text-lg leading-8">
            Het montagemateriaal is natuurlijk net zo belangrijk als alle andere
            onderdelen van het zonne-energiesysteem. We hebben de materialen
            uitvoerig getest op kwaliteit, duurzaamheid en weersinvloeden. Voor
            schuine daken maken wij gebruik van het merk Esdec ClickFit EVO. In
            het geval van platte daken werken wij met FlatFix Fusion van
            dezelfde leverancier. Al het materiaal heeft een garantie van 20
            jaar.
          </p>
          <img
            src="	https://www.enie.nl/wp-content/uploads/2019/02/schermafbeelding-2019-02-19-om-12-11-05-1200x335.png"
            alt=""
          />
        </div>

        
      

        <div className="flex items-center flex-col min-h-screen justify-center">
          <News />
        </div>
      </div>

     

          <div className="flex bg-white relative flex-col px-5 py-5 gap-y-3 shadow-xl rounded-lg max-w-[330px] min-h-[430px] col-span-1  w-full">
            <h2 className="text-3xl">Het beste voorstel</h2>
            <p className="font-[100] text-sm">
              Er zijn veel aanbieders van zonnepanelen. Wat maakt Sunnygreen zo
              uniek?
            </p>

          
              ))}
            </div>

         
          </div>
       
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Producten
