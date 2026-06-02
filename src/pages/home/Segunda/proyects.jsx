import { Textos } from "../../../components/text/textos" //Con los .. voy volviendo para atras de las carpetas 
import { Cajas } from "../../../components/cajas/cajas"
import { SkillMe } from "../../../components/skill/skill"

export function Proyect() {
    return(
        <section className="projects">
            <section className="projects__section"> 
                <header className="projects__header">
                <Textos 
            text="[ Proyectos ]" 
            subtitle="Aquí tienes una muestra de mi trabajo: código sólido aplicado a ideas creativas"/>
            </header>

            <section className="projects__cards">
                <Cajas
            title="PokeScan" 
            subtitle="Permite explorar Pokémon, ver sus tipos y estadísticas de forma interactiva y responsive." 
            text="Demo 🡵"
             href="https://fedebarrazaa.github.io/pokemon-api-app/" //pasar el link
            />        

                <Cajas
            title="Text Scrambler" 
            subtitle="Una herramienta interactiva para desordenar palabras y frases." 
            text="Demo 🡵"
             href="https://fedebarrazaa.github.io/text-scrambler/" //pasar el link
            />   

                <Cajas
            title="Troki IA" 
            subtitle="Un chat con IA para recolectar informacion." 
            text=" 🡵"
            href="https://ai-content-generator-beta-sable.vercel.app/" //pasar el link
            />    

                <Cajas
            title="Task Flow" 
            subtitle="Ordena tus tareas a tu manera." 
            text=" 🡵"
            href="#" //pasar el link
            /> 
            </section>
            </section>
            
            <section className="skills">
                <header className="skills__header">
                <Textos 
            text="[ Skills ]" 
            subtitle="Estas son las herramientas y lenguajes que utilizo para transformar ideas en experiencias digitales funcionales y escalables."/>
            </header>
            <section className="skills__list">   
            <SkillMe />
            </section>
            </section>
        </section>
    )
}