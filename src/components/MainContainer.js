import * as React from 'react'
import OSHeader from "./OSHeader";
import OSNavbar from "./OSNavbar";
import OSWindow from "./OSWindow";
import NavbarCategory from "./NavbarCategory";
import NavbarLink from "./NavbarLink";
import OSTab from "./OSTab";
import {
    faAlignLeft, faBrush,
    faCubes,
    faDatabase,
    faGraduationCap,
    faLaptopCode, faListCheck,
    faChess, faComputer,
    faTerminal
} from "@fortawesome/free-solid-svg-icons";

const qualifications = [
    {
        title: "Attestation de compétences générales",
        type: "Attestation",
        date: "2018",
    },
    {
        title: "Diplôme de fin de scolarité obligatoire",
        type: "Diplôme",
        date: "2019",
    },
    {
        title: "Diplôme Pré-apprentissage professionnel",
        type: "Diplôme",
        date: "2021",
    },
    {
        title: "Certificat Fédéral de capacité CFC - développement d’applications",
        type: "Certificat Fédéral",
        date: "Prévue en 2025",
    }
];

const MainContainer = () => {
    let itemsQualifications = [];

    for (const qualification of qualifications.entries()) {
        itemsQualifications.push(
            <div className={"contentContainer"} key={qualification[0]}>
                <h5>{qualification[1].title}</h5>
                <span>Type: {qualification[1].type}</span>
                <span>Obtention: {qualification[1].date}</span>
            </div>
        );
    }

    return (<>
        <OSHeader />
        <h1 id={"backgroundTitle"}>SeenKid</h1>
        <OSNavbar />
        <OSWindow title={"À propos"} id={"about"} navbar={<>
            <NavbarCategory title={"Général"}/>
            <NavbarLink title={"Présentation"} icon={faAlignLeft} toOpen={"presentation"} active={"true"} window={"about"} />
            <NavbarLink title={"Qualifications"} icon={faGraduationCap} toOpen={"studies"} active={"false"} window={"about"} />
            <NavbarLink title={"Occupations"} icon={faChess} toOpen={"Occupations"} active={"false"} window={"about"} />
        </>}>
            <OSTab id={"tab-presentation"} title={"About"}>
                <div className={"contentContainer"}>
                    <h5>Qui suis-je ?</h5>
                    <p>
                        Je suis Yann, un jeune étudiant Suisse de 18 ans. <br/><br/>
                        J'ai commencé à coder mes premières lignes assez tôt, j'ai eu, dès mon très jeune âge, un pc entre mes mains.
                        Cependant, j'ai réellement commencé à me mettre au développement vers mes 14 ans. <br/><br/>
                        Je suis aujourd'hui apprenti informaticien développeur, en alternance (entreprise/école professionnelle). <br/><br/>
                        Je passe beaucoup de mon temps libre à développer des petits projets ou à jouer aux jeux vidéos.<br/><br/>
                        Mon objectif serait d'aller jusqu'au Master en informatique, puis de fonder mon entreprise.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-studies"} title={"About"}>
                {itemsQualifications}
            </OSTab>
            <OSTab id={"tab-Occupations"} title={"About"}>
                <div className={"contentContainer"}>
                    <h5>Jeux vidéos</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "35%"}}/>
                    </div>

                    <h5>Révisions</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "32%"}}/>
                    </div>

                    <h5>Programmation</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "29%"}}/>
                    </div>

                    <h5>Musique</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "24%"}}/>
                    </div>

                    <h5>Sport</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "17%"}}/>
                    </div>
                </div>
            </OSTab>
        </OSWindow>
        <OSWindow title={"Compétences"} id={"skills"} navbar={<>
            <NavbarCategory title={"Développement Web"}/>
            <NavbarLink title={"Front-end"} icon={faBrush} toOpen={"front-end"} active={"true"} window={"skills"} />
            <NavbarLink title={"Back-end"} icon={faCubes} toOpen={"back-end"} active={"false"} window={"skills"} />
            <NavbarLink title={"Base de données"} icon={faDatabase} toOpen={"database"} active={"false"} window={"skills"} />

            <NavbarCategory title={"Programmation"}/>
            <NavbarLink title={"Langages"} icon={faTerminal} toOpen={"languages"} active={"false"} window={"skills"} />

            <NavbarCategory title={"Autres"}/>
            <NavbarLink title={"IDE"} icon={faLaptopCode} toOpen={"ide"} active={"false"} window={"skills"} />
            <NavbarLink title={"OS"} icon={faComputer} toOpen={"OS"} active={"false"} window={"skills"} />
            <NavbarLink title={"Gestion de projet"} icon={faListCheck} toOpen={"project-management"} active={"false"} window={"skills"} />
        </>}>
            <OSTab id={"tab-front-end"} >
                <div className={"contentContainer"}>
                    <h5>HTML5</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "90%"}}/>
                    </div>

                    <h5>CSS3</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "80%"}}/>
                    </div>

                    <h5>JavaScript</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "75%"}}/>
                    </div>

                    <h5>SCSS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>

                    <h5>Bootstrap</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "30%"}}/>
                    </div>

                    <h5>React</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "20%"}}/>
                    </div>

                    <h5>Tailwind CSS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "20%"}}/>
                    </div>

                    <h5>VueJS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "10%"}}/>
                    </div>
                </div>
            </OSTab>
            <OSTab id={"tab-back-end"} >
                <div className={"contentContainer"}>

                    <h5>NodeJS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "60%"}}/>
                    </div>

                    <h5>PHP</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "25%"}}/>
                    </div>

                    <h5>Laravel</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "10%"}}/>
                    </div>

                </div>
            </OSTab>
            <OSTab id={"tab-OS"} >
                <div className={"contentContainer"}>
                <div className={"contentContainer"}>
                    <h5>Windows</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "94%"}}/>
                    </div>
                    </div>
                    <div className={"contentContainer"}>
                    <h5>Linux</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
                    </div>
                    <div className={"contentContainer"}>
                    <h5>MacOS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "4%"}}/>
                    </div>
                    </div>
                </div>
            </OSTab>
            <OSTab id={"tab-database"} >
                <div className={"contentContainer"}>
                    <h5>MySQL</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "80%"}}/>
                    </div>

                    <h5>PostgreSQL</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "80%"}}/>
                    </div>
                </div>
            </OSTab>
            <OSTab id={"tab-languages"} >

            <div className={"contentContainer"}>
                    <h5>Java</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "55%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>Python</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>SQL</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>Lua</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>C#</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "45%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>PowerShell</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "40%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>Bash</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "30%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>C</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "25%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>C++</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "10%"}}/>
                    </div>
                </div>


            </OSTab>
            <OSTab id={"tab-ide"} >
			<div className={"contentContainer"}>
            <div className={"contentContainer"}>
                    <h5>Visual Studio Code</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "90%"}}/>
                    </div>
				</div>

                <div className={"contentContainer"}>
                    <h5>IntelliJ</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "65%"}}/>
                    </div>
				</div>

                <div className={"contentContainer"}>
                    <h5>PhpStorm</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "60%"}}/>
                    </div>
				</div>
                <div className={"contentContainer"}>
                    <h5>Webstorm</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
			    </div>

				<div className={"contentContainer"}>
                    <h5>PyCharm</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
				</div>
                </div>
            </OSTab>
            <OSTab id={"tab-project-management"} >
                <div className={"contentContainer"}>
                    
                <h5>GitHub</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "73%"}}/>
                    </div>

                    <h5>Trello</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "70%"}}/>
                    </div>

                    <h5>MS-Project</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "65%"}}/>
                    </div>

                    <h5>JIRA</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
                    
                    <h5>Git</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "46%"}}/>
                    </div>

                </div>
            </OSTab>
        </OSWindow>
        <OSWindow title={"Projets"} id={"projects"} navbar={<>
            <NavbarCategory title={"Web"}/>
            <NavbarLink title={"SpaceWatch"} toOpen={"SpaceWatch"} active={"true"} window={"projects"}/>
            <NavbarLink title={"NPANEL"} toOpen={"NPANEL"} active={"false"} window={"projects"}/>
        </>} >
            <OSTab id={"tab-SpaceWatch"} >
                <div className={"contentContainer"}>
                    <h5>SpaceWatch</h5>

                    <p>
                        <a href={"https://discord.gg/spacewatch"} target={"_blank"}>SpaceWatch</a> est un serveur discord.
                        Fondé en 2021, ila grandi jusqu'à attendre 1100 membres en avril 2022. A la base étant un serveur Roblox, il a rapidement
                        changé pour devenir un serveur communautaire un peu plus global.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Ma mission</h5>

                    <p>
                        Étant fondateur du projet, j'ai pour but de créer une communauté conviviale autour de sujets passionnants
						tels que les animés, le développement informatique ou encore la vie en général. Je veux créer un endroit
                        ou te le monde peut se sentir à l'aise de parler et de s'amuser.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Durée de la mission</h5>

                    <p>
                        Depuis le 14 Février 2021 et jusqu'à présent
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-NPANEL"} >
                <div className={"contentContainer"}>
                    <h5>NPANEL</h5>

                    <p>
                        <a href={"https://npanel.tk/panel"} target={"_blank"}>NPANEL</a> est un panel ayant pour but de gérer vos serveurs de jeux facilement. 
                        Le projet à été abandonné car je n'ai pas encore les compétences pour terminer le panel. Je reprendrai probablement le projet plus tard.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Ma mission</h5>

                    <p>
                       J'étais le développeur principal et l'owner du projet.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Durée de la mission</h5>

                    <p>
                        J'ai travaillé sur ce projet pendant environ 2 mois et demi sérieusement, puis le projet à été en suspend pendant quelques mois.
                    </p>
                </div>
            </OSTab>
            
        </OSWindow>
        <OSWindow title={"Expériences"} id={"experiences"} navbar={<>

            <NavbarCategory title={"Stages"}/>
            <NavbarLink title={"Borgeat"} toOpen={"Borgeat"} active={"true"} window={"experiences"}/>
            <NavbarLink title={"Migros"} toOpen={"Migros"} active={"true"} window={"experiences"}/>
            <NavbarCategory title={"Formations supérieures"}/>
            <NavbarLink title={"EPP"} toOpen={"EPP"} active={"true"} window={"experiences"}/>
            <NavbarLink title={"PAP"} toOpen={"PAP"} active={"true"} window={"experiences"}/>
            <NavbarLink title={"Apprentissage"} toOpen={"Apprentissage"} active={"true"} window={"experiences"}/>
        </>}>
        <OSTab id={"tab-Borgeat"} >
                <div className={"contentContainer"}>
                    <h5>Borgeat - Sierre</h5>
                    <p>
                        En 2019, j'ai pu travailler comme stagiaire dans une entreprise d'électriciens. J'y ai appris pleins de choses
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Travail réalisé</h5>
                    <p>
                        Remplacement de prises électriques, luminaires, changement de tableaux électriques...
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-Migros"} >
                <div className={"contentContainer"}>
                    <h5>Migros - Martigny</h5>
                    <p>
                        En 2020, j'ai pu effectuer 2 stages à la Migros dans le service informatique de leurs magasins.
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Travail réalisé</h5>
                    <p>
                        Remplacement de pc, gestion du materiel informatique.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-EPP"} >
                <div className={"contentContainer"}>
                    <h5>École Pre-Professionnelle</h5>
                    <p>
                        En 2019/2020, j'étais étudiant dans l'école pré-professionnelle de Sierre. Cette année de transition m'a permis d'effectuer plusieurs stages.
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Travail réalisé</h5>
                    <p>
                        Remplacement de pc, gestion du materiel informatique.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-PAP"} >
                <div className={"contentContainer"}>
                    <h5>Pré-Apprentissage Professionnel</h5>
                    <p>
                        En 2021, j'étais étudiant au Pré-Apprentissage Professionnel dans l'école des métiers de Martigny.
                        Ce semestre m'a permis de remonter mes notes et d'avoir un bulletin scolaire très bon.
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Travail réalisé</h5>
                    <p>
                       Révisions pour les cours (Mathématiques, Français, Informatique...)
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-Apprentissage"} >
                <div className={"contentContainer"}>
                    <h5>Apprentissage Informaticien développpeur</h5>
                    <p>
                        De Septembre 2021 jusqu'en Août 2025, je serai apprenti dans une entreprise d'informatique basée en Valais.
                        J'obtiendrais, si tout se passe bien, un Certificat Fédéral de capacité.
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Travail réalisé</h5>
                    <p>
                       Développement d'applicatications modèle-vue-controlleur, refonte de sites web, installation de serveurs...
                    </p>
                </div>
            </OSTab>
        </OSWindow>
        <OSWindow title={"Contact"} id={"contact"} navbar={<>
            <NavbarCategory title={"Réseaux sociaux"}/>
            <NavbarLink title={"Discord"} toOpen={"discord"} active={"true"} window={"contact"}/>
            <NavbarLink title={"Twitter"} toOpen={"twitter"} active={"false"} window={"contact"}/>
            <NavbarLink title={"Linktree"} toOpen={"linktree"} active={"false"} window={"contact"}/>

            <NavbarCategory title={"Autres"}/>
            <NavbarLink title={"Perso"} toOpen={"perso"} active={"false"} window={"contact"}/>
        </>}>
            <OSTab id={"tab-discord"} >
                <div className={"contentContainer"}>
                    <h5>Mon serveur</h5>
                    <p>
                        Vous pouvez rejoindre mon serveur Discord à cette adresse <a href={"https://discord.gg/spacewatch"} target={"_blank"}>https://discord.gg/spacewatch</a>.
                    </p>
                </div>
                <div className={"contentContainer"}>
                    <h5>Compte Discord</h5>
                    <p>
                        Vous pouvez m'ajouter sur Discord: <b>SeenKid#1010</b><br/><br/>
                        Si mon pseudo ne fonctionne pas, voici mon ID discord : <b>692521133345472595</b>
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-twitter"} >
                <div className={"contentContainer"}>
                    <h5>Compte Twitter</h5>
                    <p>
                        Suivez-moi sur mon compte <a href={"https://twitter.com/Seenkidbhop"} target={"_blank"}>Twitter</a>.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-linktree"} >
                <div className={"contentContainer"}>
                    <h5>Mon Linktree</h5>
                    <p>
                        Voici tous mes liens importants :  <a href={"https://linktr.ee/seenkid"} target={"_blank"}>linktree</a>.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-perso"} >
                <div className={"contentContainer"}>
                    <h5>Adresse e-mail</h5>
                    <p>
                        Si vous souhaitez me contacter par mail: <a href={"mailto:yann.berlemont@pm.me"}>yann.berlemont@pm.me</a>.
                    </p>
                </div>
            </OSTab>
        </OSWindow>
    </>);
}

export default MainContainer;
