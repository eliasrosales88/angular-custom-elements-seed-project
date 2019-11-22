import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ue-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // Disabling zones in the particular component 
  encapsulation: ViewEncapsulation.ShadowDom
})
export class GalleryComponent implements OnInit, AfterViewInit {
  constructor( private el: ElementRef, private cd: ChangeDetectorRef) { }
  
  @Input() src: string;
  @Input() header: string = "true";
  @ViewChildren("slide") slide: QueryList<any>;
  testJSON: any = {
    "type": "album",
    "url": "https://www.marca.com/tiramillas/cine-tv/album/2019/10/31/5db71cbd268e3eb9028b45db.html",
    "id": "5db71cbd268e3eb9028b45db",
    "titulo": "24 películas cuyo final te sorprenderá porque no es el esperado",
    "breadcrumb": {
    "path": "/portada/tiramillas",
    "types": [
    "b",
    "c",
    "mb",
    "mc",
    "mt"
    ],
    "name": "miga.html"
    },
    "texto": "",
    "indexable": false,
    "antetitulo": "",
    "cintillo": "Cine y TV",
    "cintilloUrl": "",
    "entradilla": "Hay películas cuyas tramas son previsibles y mediocres, pero también hay verdaderas obras maestras que rompen estándares y te mantienen en vilo hasta que suena la música final mientras en la pantalla aparecen los créditos del filme.",
    "firmas": [
    {
    "name": "Redacción TIRAMILLAS",
    "location": "",
    "link": ""
    }
    ],
    "sectionId": "tiramillas/cine-tv",
    "model": "cine-tv",
    "seccion": "",
    "multimedia": [
    {
    "titulo": "",
    "descripcion": "",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722821934786",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722821934786.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Déjà vu",
    "descripcion": "Que el nombre de una película coincida con su significado principal y ninguna traducción pueda estropearlo dice mucho de un filme. Parece que la humanidad sigue avanzando y el director y el guionista están escudriñando cada vez más la realidad de los juegos con el tiempo y vuelos hacia el futuro y el pasado. En pocas palabras, una buena trama de acción con los elementos de una ciencia ficción cercana a la vida real.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722808695233",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722808695233.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "El caso Slevin",
    "descripcion": "Slevin no tiene suerte. Perdió su casa y su chica lo dejó por otro. Su amigo Nick le ofrece vivir en un apartamento vacío en Nueva York. En ese momento, una importante autoridad criminal, apodada El Jefe, quiere vengarse por el asesinato de su hijo. Por eso, pide que se 'encarguen' del heredero de su exsocio 'El Rabino'.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722806647188",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722806647188.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "El club de la lucha",
    "descripcion": "Desgarrado por el insomnio crónico y desesperado, tratando de escapar de una vida terriblemente aburrida, un empleado de oficina conoce a Tyler Durden, un carismático vendedor de jabón con una filosofía retorcida. Al final de la película, un sorprendente descubrimiento les espera a todos, lo que acabará desencadenando escenas impredecibles.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722779885558",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722779885558.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "El truco final",
    "descripcion": "La película se desarrolla en un mundo lleno de misticismo. El foco de la historia está en los trucos de magia. Robert y Alfred son viejos amigos ilusionistas, pero la carrera de magos los obliga a convertirse en rivales. Ellos sabotean las actuaciones de todos los demás, aprenden secretos el uno del otro. Son dos amigos que se han convertido en enemigos. Una película para los fans de una trama nada trivial y aficionados a los giros inesperados.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722794241950",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722794241950.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "El juego",
    "descripcion": "Los giros dinámicos e inesperados de la trama en combinación con la atmósfera original de la película la convierten en un thriller de calidad y claramente emocionante. El final puede parecer predecible, pero no por ello resulta menos interesante de ver. Además, las formas con las que el director nos lleva al final del filme son a veces muy poco convencionales.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722806264868",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722806264868.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Guía del autoestopista galáctico",
    "descripcion": "Un día aparecieron en la Tierra enormes naves espaciales de extraterrestres que anunciaron a los humanos que su planeta natal iba a ser destruido y en su lugar se establecería una autopista interestelar. Hay algo de qué reírse y mucho en qué pensar con esta película. Después de todo, en cada broma, encontramos una parte de verdad. Y en toda verdad, una parte de broma.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722785110959",
    "width": 1280,
    "height": 720,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722785110959.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Infiltrados",
    "descripcion": "Dos de los mejores graduados de la academia de policía se encuentran en los lados opuestos de las barricadas: uno de ellos es un agente de la mafia alistado en las filas de las fuerzas del orden y el otro es un 'topo', introducido en la mafia. Todo el mundo considera que su deber es descubrir y destruir al enemigo, pero una vida constante en realidades distorsionadas cambiará el mundo interior de estos personajes.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722786038901",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722786038901.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Shutter Island",
    "descripcion": "Dos agentes son enviados a una de las islas en el estado de Massachusetts para investigar la desaparición de una paciente en una clínica de delincuentes con problemas mentales. Durante la investigación, tendrán que enfrentarse a una red de mentiras, un huracán y una mortífera rebelión de los pacientes. El  final da lugar a la imaginación.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722781521806",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722781521806.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "La llave del mal",
    "descripcion": "Imagina que tienes una llave que abre todas las puertas. Pareciera que esto te ofrece grandes oportunidades, pero... ¿no tendrías miedo de abrir todas las puertas?",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722812006793",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722812006793.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "La mejor oferta",
    "descripcion": "La película tiene una estructura narrativa completamente estándar y directa. Y el espectador, sin esforzarse particularmente en los giros de la trama, inmediatamente podrá entender cuál es su esencia. Pero el filme, a diferencia de otras cintas, difiere ligeramente por sus trucos y por cómo el director, hábilmente, confunde los hilos invisibles del argumento, engañando a todos los que lo rodean.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722789388445",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722789388445.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "La niebla",
    "descripcion": "Esta dramática película de terror de Frank Darabont se basa en el libro de Stephen King, pero se diferencia de éste en lo más importante: la escena final. Después de ver la película, el escritor estaba completamente satisfecho con el final de la misma. De hecho dijo que es exactamente lo que se suponía en el libro.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722784535077",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722784535077.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "La ventana secreta",
    "descripcion": "Johnny Depp y basado en la novela de Stephen King son las dos frases claves que deberían hacerte disfrutar de esta película. Vale la pena posponer todos los asuntos importantes e irrelevantes para más adelante y disfrutar del filme.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722810756620",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722810756620.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "La vida de David Gale",
    "descripcion": "Un intelectual respetable, firme defensor de la abolición de la pena de muerte, cae en la amarga ironía del destino y acaba en el corredor de la muerte por el asesinato de un compañero. Un drama inteligente que revela cómo la justicia puede fatalmente cometer errores y algunas personas, en la lucha por una idea, fácilmente cruzarán todos los límites.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722788554693",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722788554693.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Looper: Asesinos del futuro",
    "descripcion": "Se trata de una película de acción muy confusa sobre el futuro, en el que algunos criminales aprendieron a enviar a las personas indeseables al pasado. Al igual que todas las películas basadas en viajar en el tiempo, ésta tiene su lógica frágil en la que, sin embargo, es mejor no pensar.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722799759772",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722799759772.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Los otros",
    "descripcion": "La película atrae al espectador por un gran guión cuyo final es simplemente increíble. El paisaje y la interpretación de los actores borran la ilusión de que estás viendo una película y parece que estás inmerso en la vida de los personajes principales, tratando de llegar a la verdad junto a ellos.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722796267613",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722796267613.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Memento",
    "descripcion": "Leonard se viste de forma exquisita y costosa, conduce un Jaguar nuevo, pero vive en moteles baratos. Su meta en la vida es encontrar al asesino de su esposa. Su problema es que sufre una extraña amnesia, una pérdida de la memoria corta: lo recuerda todo antes del asesinato, pero no es capaz de recordar lo que sucedió hace 15 minutos.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722800513625",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722800513625.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Moon",
    "descripcion": "El contrato de Sam está llegando a su fin tras pasar tres años en la Luna controlando una estación espacial para la extracción de un extraño gas. Tres largos años, en completa soledad, salvo que contemos con el robot que habla, GERTY, su único compañero. Tanto tiempo allí puede cambiar a cualquiera. Dos semanas antes de regresar a la Tierra, Sam conoce a su sustituto.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722814581638",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722814581638.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Origen",
    "descripcion": "Si te gusta el cine tranquilo, medido y fácil, esta película no es para ti. Pero si te gusta pensar en la trama y quieres pasar dos horas y media en tensión incesante y cuando acabe, por lo menos, media hora, quedarte postrado en el sofá saboreando el filme, tienes que verlo.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722812870518",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722812870518.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Seven",
    "descripcion": "Un thriller bastante cruel sobre un psicópata que castiga a sus víctimas por sus pecados capitales. Antes de que la película fuera producida, los jefes del estudio instaron a cambiar ligeramente el guión, es decir, a reescribir el final. Nadie sabe cómo hubiera sido la película si no fuera por Brad Pitt, que se negó a participar en ella si alguien osaba a manipular el final.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722777847779",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722777847779.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Sexto sentido",
    "descripcion": "Una película sobre el destino terrible que un niño tendrá que afrontar con tan sólo 9 años. ¿Pero qué puede hacer un niño de esta edad? Solo, nada. Pero cuando un excelente especialista acude en su ayuda, un psicólogo que no lo considera psicótico, que no lo ve, a diferencia de los demás, como un enfermo, el camino del pequeño se vuelve menos espinoso. Él le cuenta más cosas a este médico que a su propia madre.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722787029117",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722787029117.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Sospechosos habituales",
    "descripcion": "Una banda de delincuentes asalta un banco con otra banda y, después del choque, sólo hay un superviviente. Él es la única pista para el investigador que quiere desesperadamente encontrar al cerebro que se esconde detrás de toda la operación, un misterioso villano llamado Keyser Söze. Ésta es una gran oportunidad de jugar a ser detective para aquellos que no han visto la película todavía.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722798281395",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722798281395.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Un ciudadano ejemplar",
    "descripcion": "El fiscal del distrito llegó a un trato con los criminales y los liberó de prisión. Entonces, un hombre cuya esposa e hijo murieron a manos de esos asesinos liberados decide vengarse del fiscal, tomándose la justicia por su mano. Es detenido y encarcelado, pero inesperadamente realiza un ultimátum: matará sin salir de la celda si sus demandas no se cumplen. Una declaración que aparenta ser poco seria hasta que, de pronto, comienzan las muertes.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722792705981",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722792705981.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Una mente maravillosa",
    "descripcion": "De la fama mundial a las profundidades pecaminosas, John Nash aprendió todo esto en su propia piel. Un genio de las matemáticas que, al principio de su carrera, hizo enormes contribuciones al mundo con la teoría de juegos, que le generó su reputación internacional. Sin embargo, este arrogante y exitoso mujeriego, sufre un golpe del destino que cambiará su vida.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722795355906",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722795355906.jpg",
    "clipImg": [
    640
    ]
    },
    {
    "titulo": "Vanilla Sky",
    "descripcion": "A veces, la vida sorprende a una persona: todo comienza con un día habitual y termina en un saco con hielo, mientras que la mente disfruta de un cielo vainilla brillando sobre su cabeza. ¿Acaso él se esperaba un destino así? Es cierto que todo puede cambiar en cualquier momento por culpa de algún pormenor.",
    "autor": "",
    "type": "image",
    "position": "",
    "id": "2019-10-28-15722809986388",
    "width": 990,
    "height": 557,
    "url": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/28/15722809986388.jpg",
    "clipImg": [
    640
    ]
    }
    ],
    "firstPublishedAt": "Thu, 31 Oct 2019 08:07:46 +0100",
    "publishedAt": "Thu, 31 Oct 2019 08:07:48 +0100",
    "tags": [
    {
    "nameTag": "Tiramillas",
    "relevance": "100",
    "autocoverUrl": "https://www.marca.com/tiramillas.html",
    "idTag": "tiramillas"
    },
    {
    "nameTag": "Cine y TV",
    "relevance": "100",
    "autocoverUrl": "https://www.marca.com/tiramillas/cine-tv.html",
    "idTag": "cine-y-tv"
    }
    ],
    "relacionadosUrl": "https://e00-marca.uecdn.es/tiramillas/cine-tv/album/last_albums.json",
    "cintilloSEO": "Cine y TV"
  };

  gallery: any = this.testJSON;
  state = {
    isGalleryStarted: false,
    activeItem: 0,  // || localStorage.getItem("activeItem");
    loadedSlides: [],
    transition: ""
  }

  private setState(key, value){
    this.state = {...this.state, [key]: value};
    
    // Detecting changes manually to update the state property in the html template
    this.cd.detectChanges();
  }

  
  /**
   * Function to fetch data 
   * @param src URL string
   */
  async fetchData(src){
    // const config = { 
    //   method: 'GET',
    //   headers: {},
    //   mode: 'cors',
    //   cache: 'default' 
    // }
    
    try {
      const response = await fetch(src, { mode:"cors" });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();

      return data;
      
    } catch (error) {
      console.log("There has been a problem with your fetch operation: ", error.message);
    }
    
  }

  loadContent(slidesToLoad: number){
    this.setState("loadedSlides", []);
    let maxSlides = slidesToLoad;
    // Here will go the fetched data
    let loadedSlides = this.state.loadedSlides; // || localStorage
    
      for (let i = maxSlides; i > 0; i--) {
        loadedSlides.push(this.gallery.multimedia[maxSlides - i]);
      }
       
      this.setState("loadedSlides", loadedSlides);
      
  }

  onStartGallery($event){
    this.loadContent(4);
    this.setState("isGalleryStarted", true);
  }

  onRestartGallery(){
    this.setState("isGalleryStarted", false);
    this.setState("loadedSlides", []);
    this.loadContent(4);
  }
 
  
  nextAction(){
    console.log("nextAction");
    let activeItem = this.state.activeItem;
    
    ++activeItem;

    console.log("activeItem", activeItem);
    
    if (activeItem >= this.gallery.multimedia.length) {
      activeItem = this.gallery.multimedia.length;
      this.setState("activeItem", --activeItem);
      return;
    }

    let loadedSlides = this.state.loadedSlides;
    
    console.log(activeItem + 2);
    

    if(typeof this.gallery.multimedia[activeItem + 2] !== 'undefined') {
      if (activeItem > 1) {
        this.setState("transition", "next");

      }else this.setState("transition", "next-first");
      
      setTimeout(() => {
        this.setState("activeItem", activeItem);
        if (activeItem > 1) {
          console.log(!loadedSlides.includes(this.gallery.multimedia[activeItem + 2]));
          
          // if has element dont add it again
          if (!loadedSlides.includes(this.gallery.multimedia[activeItem + 2])) {
            loadedSlides.push(this.gallery.multimedia[activeItem + 2]);
            loadedSlides.shift();
          }
          this.setState("transition", "current");
        }
        console.log(this.gallery.multimedia[activeItem + 2]);
        console.log(this.gallery.multimedia);
        console.log(this.state.loadedSlides.length);
        console.log(this.state.loadedSlides);
      }, 710);

    }else {
      if (activeItem !== this.gallery.multimedia.length ) {
        this.setState("transition", "next")
        setTimeout(() => {
          this.setState("activeItem", activeItem);
          loadedSlides.push({});
          loadedSlides.shift();
          console.log(this.gallery.multimedia[activeItem + 3]);
          console.log(this.gallery.multimedia);
          console.log(this.state.loadedSlides.length);
          console.log(this.state.loadedSlides);
          this.setState("transition", "current")
        }, 710);
        
      }

    }

    


  }
  
  previousAction(){
    let loadedSlides = this.state.loadedSlides;
    console.log("previousAction");
    let activeItem = this.state.activeItem;
    --activeItem ;

   

    console.log("previous activeItem", activeItem);
    
    
    
    if (activeItem >= 0) {
      
      setTimeout(() => {
        // if has element dont add it again
        if (!loadedSlides.includes(this.gallery.multimedia[activeItem])) {
          loadedSlides.unshift(this.gallery.multimedia[activeItem]);
          loadedSlides.pop();
        }
        this.setState("transition", "previous");
        
      }, 10);


      setTimeout(() => {
        this.setState("activeItem", activeItem);
        console.log(this.gallery.multimedia[activeItem]);
        console.log(this.gallery.multimedia);
        console.log(this.state.loadedSlides.length);
        console.log(this.state.loadedSlides);
        this.setState("transition", "")
      }, 700);
    } else {
        this.onRestartGallery();
        this.setState("transition", "");
        return;
        
    }

    
    this.setState("loadedSlides", loadedSlides);
    console.log(this.state.loadedSlides);

  }


  refresh() {
    console.log("check!");
    
    this.cd.detectChanges();
  }

  ngOnInit() {
    // this.fetchData(this.src).then((response => this.gallery = response));
    this.loadContent(4);
    console.log(this.state.loadedSlides);
  }
  
  ngAfterViewInit(){
  }

  
  
}



