"use client";

import { useState, useEffect } from 'react';
import { Shirt, Clock, ConciergeBell, Waves, Car, Briefcase, Bike, Umbrella, Sun, Coffee, Snowflake, Bath, Tv, LockKeyhole, Phone, Wifi, BatteryCharging } from 'lucide-react';

const canaliTV = Array.from({ length: 40 }, (_, idx) => ({
  numero: idx + 1,
  nome: `Canale ${idx + 1}`,
  lingua: ['Italiano', 'Inglese', 'Tedesco'][idx % 3],
}));

export default function Home() {
  const [openServiceCamera, setOpenServiceCamera] = useState(null);
  const [openServiceHotel, setOpenServiceHotel] = useState(null);
  const [activeTab, setActiveTab] = useState('hotel'); // Per gestire le tab: hotel, camera, tv, contatti

  const translations = {
    it: {
      camera: "Servizi in Camera",
      hotel: "Servizi dell'Hotel",
      tv: "Elenco Canali TV",
      contact: "Contatti",
      // Section IDs translation - Italian
      orarioPasti: "Orario Pasti",
      asciugamaniSpiaggia: "Asciugamani da spiaggia",
      orarioCheckInOut: "Orario Check-in e Check-out",
      lavanderia: "Lavanderia",
      servizioCamera: "Servizio in camera",
      piscinaEsterna: "Piscina esterna",
      garage: "Garage",
      servizioBagagli: "Servizio bagagli",
      noleggioBici: "Noleggio Golf kart e biciclette",
      servizioSpiaggia: "Servizio in spiaggia",
      solariumNaturale: "Solarium naturale"
    },
    en: {
      camera: "Room Services",
      hotel: "Hotel Services",
      tv: "TV Channels List",
      contact: "Contact",
      // Section IDs translation - English
      orarioPasti: "Meal Times",
      asciugamaniSpiaggia: "Beach Towels",
      orarioCheckInOut: "Check-in and Check-out Times",
      lavanderia: "Laundry Service",
      servizioCamera: "Room Service",
      piscinaEsterna: "Outdoor Pool",
      garage: "Garage",
      servizioBagagli: "Luggage Service",
      noleggioBici: "Golf Cart and Bicycle Rental",
      servizioSpiaggia: "Beach Service",
      solariumNaturale: "Natural Solarium"
    },
    de: {
      camera: "Zimmerausstattung",
      hotel: "Hoteldienstleistungen",
      tv: "TV Senderliste",
      contact: "Kontakt",
      // Section IDs translation - German
      orarioPasti: "Essenszeiten",
      asciugamaniSpiaggia: "Strandtücher",
      orarioCheckInOut: "Check-in und Check-out Zeiten",
      lavanderia: "Wäscheservice",
      servizioCamera: "Zimmerservice",
      piscinaEsterna: "Außenpool",
      garage: "Garage",
      servizioBagagli: "Gepäckservice",
      noleggioBici: "Golfwagen- und Fahrradverleih",
      servizioSpiaggia: "Strandservice",
      solariumNaturale: "Natürliches Solarium"
    }
  };

  const [lang, setLang] = useState('it');

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    if (['it', 'en', 'de'].includes(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  const serviziHotel = [
    {
      id: 'orarioPasti',
      nome: translations[lang].orarioPasti,
      icona: <Coffee size={18} />,
      dettagli: {
        it: (
          <div>
            <p>Il servizio ristorazione è disponibile ai seguenti orari:</p>
            <p><strong>Colazione:</strong> 7:30 – 10:30</p>
            <p><strong>Pranzo:</strong> 12:30 – 13:30</p>
            <p><strong>Cena:</strong> 19:30 – 20:30</p>
          </div>
        ),
        en: (
          <div>
            <p>The restaurant service is available at the following times:</p>
            <p><strong>Breakfast:</strong> 7:30 – 10:30</p>
            <p><strong>Lunch:</strong> 12:30 – 13:30</p>
            <p><strong>Dinner:</strong> 19:30 – 20:30</p>
          </div>
        ),
        de: (
          <div>
            <p>Das Restaurant ist zu folgenden Zeiten geöffnet:</p>
            <p><strong>Frühstück:</strong> 7:30 – 10:30</p>
            <p><strong>Mittagessen:</strong> 12:30 – 13:30</p>
            <p><strong>Abendessen:</strong> 19:30 – 20:30</p>
          </div>
        )
      }
    },
    {
      id: 'asciugamaniSpiaggia',
      nome: translations[lang].asciugamaniSpiaggia,
      icona: <Sun size={18} />,
      dettagli: {
        it: (
          <div>
            <p>Sono disponibili presso la Reception, presentando i buoni che vi sono stati consegnati al check-in. È possibile cambiarli una volta al giorno, riconsegnando l'asciugamano usato in Reception.</p>
            <p className="mt-4 font-semibold">Uso dei lettini in piscina</p>
            <p>Per rispetto di tutti gli ospiti, vi chiediamo gentilmente di non riservare i lettini lasciando gli asciugamani se non siete presenti.</p>
            <p>La Direzione si riserva, in casi eccezionali, il diritto di rimuovere gli asciugamani utilizzati in modo continuativo per prenotare i lettini.</p>
          </div>
        ),
        en: (
          <div>
            <p>Available at the reception by showing the voucher you received at check-in. Towels can be exchanged once per day by returning the used one.</p>
            <p className="mt-4 font-semibold">Use of pool sunbeds</p>
            <p>To respect all guests, please do not reserve sunbeds with towels if you are not present.</p>
            <p>The management reserves the right, in exceptional cases, to remove towels used continuously to reserve sunbeds.</p>
          </div>
        ),
        de: (
          <div>
            <p>Erhältlich an der Rezeption gegen Vorlage des beim Check-in erhaltenen Gutscheins. Einmal täglich kann das benutzte Handtuch ausgetauscht werden.</p>
            <p className="mt-4 font-semibold">Benutzung der Poolliegen</p>
            <p>Bitte reservieren Sie keine Liegen mit Handtüchern, wenn Sie nicht anwesend sind, um Rücksicht auf andere Gäste zu nehmen.</p>
            <p>Die Hotelleitung behält sich in Ausnahmefällen das Recht vor, Handtücher zu entfernen, die dauerhaft zum Reservieren von Liegen verwendet werden.</p>
          </div>
        )
      }
    },
    {
      id: 'orarioCheckInOut',
      nome: translations[lang].orarioCheckInOut,
      icona: <Clock size={18} />,
      dettagli: {
        it: (
          <div>
            <h3 className="font-semibold">Arrivo e check-in</h3>
            <p>Le camere saranno a tua completa disposizione a partire dalle 14:00, ma facciamo il possibile per consegnarle in anticipo.</p>
            <h3 className="font-semibold mt-2">Partenza e check-out</h3>
            <p>Il check-out va effettuato entro le 10:00, così da permetterci di preparare al meglio la stanza per gli ospiti successivi.</p>
          </div>
        ),
        en: (
          <div>
            <h3 className="font-semibold">Arrival and Check-in</h3>
            <p>Rooms are available from 2:00 PM, but we do our best to make them ready earlier.</p>
            <h3 className="font-semibold mt-2">Departure and Check-out</h3>
            <p>Check-out must be completed by 10:00 AM so we can prepare the room for the next guests.</p>
          </div>
        ),
        de: (
          <div>
            <h3 className="font-semibold">Anreise und Check-in</h3>
            <p>Die Zimmer stehen ab 14:00 Uhr zur Verfügung, wir bemühen uns jedoch, sie früher bereitzustellen.</p>
            <h3 className="font-semibold mt-2">Abreise und Check-out</h3>
            <p>Der Check-out muss bis 10:00 Uhr erfolgen, damit wir das Zimmer für die nächsten Gäste vorbereiten können.</p>
          </div>
        )
      }
    },
    {
      id: 'lavanderia',
      nome: translations[lang].lavanderia,
      icona: <Shirt size={18} />,
      dettagli: {
        it: 'Per usufruire del servizio lavanderia consegnare al personale delle pulizie, oppure contattare la reception (9). La biancheria pulita verrà restituita il giorno successivo.',
        en: 'To use the laundry service, please hand your items to the cleaning staff or contact reception (9). Clean laundry will be returned the next day.',
        de: 'Um den Wäscheservice zu nutzen, geben Sie Ihre Wäsche bitte dem Reinigungspersonal oder kontaktieren Sie die Rezeption (9). Saubere Wäsche erhalten Sie am nächsten Tag zurück.'
      }
    },
    {
      id: 'servizioCamera',
      nome: translations[lang].servizioCamera,
      icona: <ConciergeBell size={18} />,
      dettagli: {
        it: 'Servizio in camera 24 ore su 24 chiamando la reception al numero 9. Il costo del servizio è di Euro 7.',
        en: 'Room service is available 24 hours a day by calling reception at number 9. The service costs €7.',
        de: 'Zimmerservice ist 24 Stunden über die Rezeption unter der Nummer 9 erreichbar. Die Servicegebühr beträgt 7 €.'
      }
    },
    {
      id: 'piscinaEsterna',
      nome: translations[lang].piscinaEsterna,
      icona: <Waves size={18} />,
      dettagli: {
        it: 'La piscina è aperta dalle 7:30 alle 19:00. Vi preghiamo di non occupare i lettini con gli asciugamani quando non presenti.',
        en: 'The pool is open from 7:30 AM to 7:00 PM. Please do not reserve sunbeds with towels if you are not present.',
        de: 'Der Pool ist von 7:30 bis 19:00 Uhr geöffnet. Bitte belegen Sie keine Liegen mit Handtüchern, wenn Sie nicht anwesend sind.'
      }
    },
    {
      id: 'garage',
      nome: translations[lang].garage,
      icona: <Car size={18} />,
      dettagli: {
        it: 'Servizio parcheggio e portabagagli 24 ore su 24. Per accedere al garage rivolgersi alla reception. Per evitare inutili tempi di attesa vi preghiamo di chiedere l\'auto con almeno 5 minuti di anticipo.',
        en: 'Valet and luggage service available 24/7. To access the garage, please contact reception. To avoid unnecessary waiting times, please request your car at least 5 minutes in advance.',
        de: 'Park- und Gepäckservice rund um die Uhr verfügbar. Um auf die Garage zuzugreifen, wenden Sie sich bitte an die Rezeption. Um unnötige Wartezeiten zu vermeiden, bestellen Sie Ihr Auto bitte mindestens 5 Minuten im Voraus.'
      }
    },
    {
      id: 'servizioBagagli',
      nome: translations[lang].servizioBagagli,
      icona: <Briefcase size={18} />,
      dettagli: {
        it: 'Assistenza bagagli disponibile alla reception 24 ore su 24. Contattare la reception (9).',
        en: 'Luggage assistance is available at the reception 24/7. Please contact reception (9).',
        de: 'Gepäckhilfe ist rund um die Uhr an der Rezeption verfügbar. Bitte kontaktieren Sie die Rezeption (9).'
      }
    },
    {
      id: 'noleggioBici',
      nome: translations[lang].noleggioBici,
      icona: <Bike size={18} />,
      dettagli: {
        it: `L'hotel mette a disposizione dei propri clienti biciclette a noleggio gratuito. È possibile richiedere il lucchetto per la bici alla reception. Non vengono accettate prenotazioni. Le golf kart sono gratuite la prima ora, dalle ore successive €20 all'ora. Non sono accettate prenotazioni.`,
        en: 'The hotel offers free bicycle rental for its guests. You can request a bike lock at the reception. Reservations are not accepted. Golf carts are free for the first hour, after which the cost is €20 per hour. Reservations are not accepted.',
        de: 'Das Hotel bietet seinen Gästen kostenlose Fahrräder zur Miete an. Ein Fahrradschloss kann an der Rezeption angefragt werden. Reservierungen werden nicht entgegengenommen. Golfkarts sind die erste Stunde kostenlos, danach kostet jede weitere Stunde 20 €. Reservierungen sind nicht möglich.'
      }
    },
    {
      id: 'servizioSpiaggia',
      nome: translations[lang].servizioSpiaggia,
      icona: <Umbrella size={18} />,
      dettagli: {
        it: 'Ombrellone e lettini inclusi nel soggiorno dal giorno di arrivo al giorno prima della partenza.',
        en: 'Sun umbrellas and sun loungers are included in your stay from the day of arrival until the day before departure.',
        de: 'Sonnenschirme und Liegestühle sind während Ihres Aufenthalts vom Anreisetag bis zum Tag vor der Abreise inbegriffen.'
      }
    },
    {
      id: 'solariumNaturale',
      nome: translations[lang].solariumNaturale,
      icona: <Sun size={18} />,
      dettagli: {
        it: 'Area solarium naturale con vista mare.',
        en: 'Natural solarium area with a sea view.',
        de: 'Natürlicher Solariumbereich mit Meerblick.'
      }
    }
  ];

  // Qui continua il resto del tuo componente con la UI che utilizza le traduzioni
  const Icon = ({ children }) => <span className="inline-block mr-2 align-middle">{children}</span>;

  // Servizi in camera
  const serviziCamera = [
    {
      id: 'minibar',
      nome: 'Minibar',
      icona: <Snowflake size={18} />,
      dettagli: {
        it: 'Il minibar è rifornito quotidianamente. Le consumazioni verranno addebitate sul conto.',
        en: 'The minibar is refilled daily. Consumptions will be charged to your account.',
        de: 'Die Minibar wird täglich aufgefüllt. Konsumationen werden Ihrem Konto belastet.'
      }
    },
    {
      id: 'caffeCialde',
      nome: 'Caffè in cialde',
      icona: <Coffee size={18} />,
      dettagli: {
        it: 'Macchina per caffè con cialde disponibile in camera. Rifornimento giornaliero di cialde di diversi tipi (caffè, tè, tisane).',
        en: 'Coffee pod machine available in the room. Daily supply of different types of pods (coffee, tea, herbal teas).',
        de: 'Kaffeemaschine mit Kaffeepads im Zimmer verfügbar. Tägliche Versorgung mit verschiedenen Arten von Pads (Kaffee, Tee, Kräutertees).'
      }
    },
    {
      id: 'bagno',
      nome: 'Bagno',
      icona: <Bath size={18} />,
      dettagli: {
        it: 'Set di cortesia completo con prodotti di qualità, asciugacapelli potente, accappatoio e ciabattine.',
        en: 'Complete courtesy set with quality products, powerful hairdryer, bathrobe, and slippers.',
        de: 'Komplettes Höflichkeitsset mit Qualitätsprodukten, leistungsstarkem Haartrockner, Bademantel und Hausschuhen.'
      }
    },
    {
      id: 'televisione',
      nome: 'Televisione',
      icona: <Tv size={18} />,
      dettagli: {
        it: 'Smart TV con canali nazionali e internazionali. Accesso a piattaforme streaming con il proprio account.',
        en: 'Smart TV with national and international channels. Access to streaming platforms with your own account.',
        de: 'Smart-TV mit nationalen und internationalen Sendern. Zugang zu Streaming-Plattformen mit Ihrem eigenen Konto.'
      }
    },
    {
      id: 'cassaforte',
      nome: 'Cassaforte',
      icona: <LockKeyhole size={18} />,
      dettagli: {
        it: 'Cassaforte elettronica di dimensioni adeguate per laptop e oggetti di valore.',
        en: 'Electronic safe suitable for laptops and valuables.',
        de: 'Elektronischer Safe geeignet für Laptops und Wertsachen.'
      }
    },
    {
      id: 'telefono',
      nome: 'Telefono',
      icona: <Phone size={18} />,
      dettagli: {
        it: 'Per chiamate interne digitare 9 per la reception. Per chiamate esterne rivolgersi alla reception.',
        en: 'For internal calls dial 9 for reception. For external calls please contact reception.',
        de: 'Für interne Anrufe wählen Sie 9 für die Rezeption. Für externe Anrufe wenden Sie sich bitte an die Rezeption.'
      }
    },
    {
      id: 'wifi',
      nome: 'Wi-Fi',
      icona: <Wifi size={18} />,
      dettagli: {
        it: 'Connessione Wi-Fi gratuita in tutta la struttura. Nome rete: Hotel_Guest / Password: welcome2023',
        en: 'Free Wi-Fi connection throughout the facility. Network name: Hotel_Guest / Password: welcome2023',
        de: 'Kostenlose WLAN-Verbindung im gesamten Gebäude. Netzwerkname: Hotel_Guest / Passwort: welcome2023'
      }
    },
    {
      id: 'ricarica',
      nome: 'Punti di ricarica',
      icona: <BatteryCharging size={18} />,
      dettagli: {
        it: 'Prese USB e standard in vari punti della stanza per la ricarica dei dispositivi.',
        en: 'USB and standard outlets at various points in the room for charging devices.',
        de: 'USB- und Standardsteckdosen an verschiedenen Stellen im Zimmer zum Aufladen von Geräten.'
      }
    }
  ];

  // Aggiungo le traduzioni per i servizi in camera
  const cameraTranslations = {
    it: {
      minibar: "Minibar",
      caffeCialde: "Caffè in cialde",
      bagno: "Bagno",
      televisione: "Televisione",
      cassaforte: "Cassaforte",
      telefono: "Telefono",
      wifi: "Wi-Fi",
      ricarica: "Punti di ricarica"
    },
    en: {
      minibar: "Minibar",
      caffeCialde: "Coffee Pods",
      bagno: "Bathroom",
      televisione: "Television",
      cassaforte: "Safe",
      telefono: "Telephone",
      wifi: "Wi-Fi",
      ricarica: "Charging Points"
    },
    de: {
      minibar: "Minibar",
      caffeCialde: "Kaffeepads",
      bagno: "Badezimmer",
      televisione: "Fernseher",
      cassaforte: "Safe",
      telefono: "Telefon",
      wifi: "W-LAN",
      ricarica: "Ladestationen"
    }
  };

  // Aggiorno le translations con i valori per i servizi in camera
  Object.keys(cameraTranslations).forEach(language => {
    Object.keys(cameraTranslations[language]).forEach(key => {
      translations[language][key] = cameraTranslations[language][key];
    });
  });

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header con logo e selettore lingua */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            {/* Logo */}
            <div className="mr-3 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
              HM
            </div>
            <div className="text-3xl font-bold text-indigo-800">
              <span className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">Hotel Miramare</span>
            </div>
          </div>
          <div className="bg-white rounded-full shadow-md p-1 flex items-center space-x-1">
            {['it', 'en', 'de'].map((l) => (
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  lang === l 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-indigo-100'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
            {['hotel', 'camera', 'tv', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-all ${
                  activeTab === tab
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {translations[lang][tab]}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content based on active tab */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mb-8">
          {activeTab === 'hotel' && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{translations[lang].hotel}</h2>
              <div className="space-y-4">
                {serviziHotel.map((servizio) => (
                  <div key={servizio.id} className="border border-gray-100 rounded-xl overflow-hidden transition-shadow hover:shadow-md">
                    <div 
                      className={`flex justify-between items-center p-4 cursor-pointer transition-all ${
                        openServiceHotel === servizio.id ? 'bg-indigo-50' : 'bg-white hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        if (openServiceHotel === servizio.id) {
                          setOpenServiceHotel(null);
                        } else {
                          setOpenServiceHotel(servizio.id);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <span className="inline-flex items-center justify-center mr-3 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600">
                          {servizio.icona}
                        </span>
                        <span className="font-medium text-gray-800">{servizio.nome}</span>
                      </div>
                      <span className={`text-lg transition-transform ${openServiceHotel === servizio.id ? 'transform rotate-180' : ''}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                    
                    {openServiceHotel === servizio.id && (
                      <div className="p-4 bg-white border-t border-gray-100">
                        {typeof servizio.dettagli[lang] === 'string' ? (
                          <p className="text-gray-600">{servizio.dettagli[lang]}</p>
                        ) : (
                          <div className="text-gray-600">{servizio.dettagli[lang]}</div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
          
          {activeTab === 'camera' && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{translations[lang].camera}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviziCamera.map((servizio) => (
                  <div key={servizio.id} className="border border-gray-100 rounded-xl overflow-hidden transition-shadow hover:shadow-md">
                    <div 
                      className={`flex justify-between items-center p-4 cursor-pointer transition-all ${
                        openServiceCamera === servizio.id ? 'bg-indigo-50' : 'bg-white hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        if (openServiceCamera === servizio.id) {
                          setOpenServiceCamera(null);
                        } else {
                          setOpenServiceCamera(servizio.id);
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <span className="inline-flex items-center justify-center mr-3 w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                          {servizio.icona}
                        </span>
                        <span className="font-medium text-gray-800">{translations[lang][servizio.id]}</span>
                      </div>
                      <span className={`text-lg transition-transform ${openServiceCamera === servizio.id ? 'transform rotate-180' : ''}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                    
                    {openServiceCamera === servizio.id && (
                      <div className="p-4 bg-white border-t border-gray-100">
                        <p className="text-gray-600">{servizio.dettagli[lang]}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
          
          {activeTab === 'tv' && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{translations[lang].tv}</h2>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        #
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {lang === 'it' ? 'Nome' : lang === 'en' ? 'Name' : 'Name'}
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {lang === 'it' ? 'Lingua' : lang === 'en' ? 'Language' : 'Sprache'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {canaliTV.map((canale) => (
                      <tr key={canale.numero} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {canale.numero}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {canale.nome}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {canale.lingua}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
          
          {activeTab === 'contact' && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{translations[lang].contact}</h2>
              <div className="bg-indigo-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-indigo-800">Reception</h3>
                    <p className="text-gray-700 mb-4">
                      {lang === 'it' ? 'Disponibile 24 ore su 24' : 
                       lang === 'en' ? 'Available 24 hours a day' : 
                       'Rund um die Uhr verfügbar'}
                    </p>
                    <div className="flex items-center mb-2">
                      <Phone size={16} className="mr-2 text-indigo-600" />
                      <span>9 ({lang === 'it' ? 'da telefono interno' : 
                              lang === 'en' ? 'from hotel phone' : 
                              'vom Hoteltelefon'})</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2 text-indigo-600" />
                      <span>+39 123 456 7890</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-indigo-800">
                      {lang === 'it' ? 'Orari' : 
                       lang === 'en' ? 'Hours' : 
                       'Öffnungszeiten'}
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Check-in:</strong> 14:00</p>
                      <p><strong>Check-out:</strong> 10:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>© 2025 Hotel Miramare - {
            lang === 'it' ? 'Tutti i diritti riservati' : 
            lang === 'en' ? 'All rights reserved' : 
            'Alle Rechte vorbehalten'
          }</p>
        </div>
      </div>
    </div>
  );
}