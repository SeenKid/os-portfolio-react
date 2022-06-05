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
    faTerminal
} from "@fortawesome/free-solid-svg-icons";

const qualifications = [
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
            <NavbarLink title={"Études"} icon={faGraduationCap} toOpen={"studies"} active={"false"} window={"about"} />
        </>}>
            <OSTab id={"tab-presentation"} title={"About"}>
                <div className={"contentContainer"}>
                    <h5>Qui suis-je ?</h5>
                    <p>
                        Je suis un étudiant en informatique, passionné par la programmation. <br/><br/>
                        J'ai découvert la programmation à l'âge de 12 ans, et j'ai commencé à m'intéresser au développement.<br/>
                        J'ai eu l'occasion de travailler sur plusieurs projets, et ai pu découvrir de nouvelles technologies.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-studies"} title={"About"}>
                {itemsQualifications}
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

                    <h5>React</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "20%"}}/>
                    </div>

                    <h5>Tailwind CSS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "20%"}}/>
                    </div>

                    <h5>Bootstrap</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "30%"}}/>
                    </div>

                    <h5>VueJS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "10%"}}/>
                    </div>
                </div>
            </OSTab>
            <OSTab id={"tab-back-end"} >
                <div className={"contentContainer"}>
                    <h5>PHP</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "25%"}}/>
                    </div>

                    <h5>Laravel</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "10%"}}/>
                    </div>

                    <h5>NodeJS</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "60%"}}/>
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

                <div className={"contentContainer"}>
                    <h5>Lua</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
                </div>

                <div className={"contentContainer"}>
                    <h5>Python</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
                </div>

            </OSTab>
            <OSTab id={"tab-ide"} >
			<div className={"contentContainer"}>
                    <h5>Webstorm</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
			</div>
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
                    <h5>PyCharm</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>
				</div>
            </OSTab>
            <OSTab id={"tab-project-management"} >
                <div className={"contentContainer"}>
                    <h5>Git</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "50%"}}/>
                    </div>

                    <h5>GitHub</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "80%"}}/>
                    </div>

                    <h5>Trello</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "80%"}}/>
                    </div>

                    <h5>JIRA</h5>
                    <div className={"progressBarContainer"}>
                        <div className={"progressBar"} style={{width: "40%"}}/>
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
                        Fondé en 2021, ila grandi jusqu'à attendre 1100 membres en avril 2022.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Ma mission</h5>

                    <p>
                        Étant fondateur du projet, j'ai pour but de créer une communauté conviviale autour de sujets passionnants
						tels que les animés, le développement informatique ou encore la vie en général.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Durée de la mission</h5>

                    <p>
                        Je suis sur SpaceWatch depuis son ouverture, et j'y suis encore, étant un pillier du projet, je ne peux pas le quitter 
						du jour au lendemain.
                    </p>
                </div>
            </OSTab>
            <OSTab id={"tab-NPANEL"} >
                <div className={"contentContainer"}>
                    <h5>NPANEL</h5>

                    <p>
                        <a href={"https://npanel.tk/panel"} target={"_blank"}>NPANEL</a> est un panel ayant pour but de gérer vos serveurs de jeux facilement. Le projet à été abandonné car je n'ai pas encore les compétences pour faire un panel fonctionnel et beau.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Ma mission</h5>

                    <p>
                       J'étais le développeur principal et l'owner du projet, bien que j'étais l'un des seuls membres de l'équipe à travailler dessus.
                    </p>
                </div>

                <div className={"contentContainer"}>
                    <h5>Durée de la mission</h5>

                    <p>
                        J'ai travaillé sur ce projet pendant environ 2 mois et demi.
                    </p>
                </div>
            </OSTab>
            
        </OSWindow>
        <OSWindow title={"Expériences"} id={"experiences"} navbar={<>

            <NavbarCategory title={"Stages"}/>
            <NavbarLink title={"Migros"} toOpen={"Migros"} active={"true"} window={"experiences"}/>
        </>}>
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
                        Vous pouvez aussi m'ajouter sur Discord: <b>SeenKid#1010</b>
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
                    <h5>Adresse mail Pro</h5>
                    <p>
                        Si vous souhaitez me contacter par mail: <a href={"mailto:yann.berlemont@pm.me"}>yann.berlemont@pm.me</a>.
                    </p>
                </div>
            </OSTab>
        </OSWindow>
    </>);
}

export default MainContainer;
