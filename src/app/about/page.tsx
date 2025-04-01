
import { Stats } from "@/src/components/About/stats"
import Header from "../../components/About/header"
import Team from "../../components/About/team"
import Values from "../../components/About/values"



export default async function About() {


  return (
    <>
   <div>
    <Header/>
     <Values/>
     <Stats/>
     <Team/>
    </div> 
    </>
  )
}
