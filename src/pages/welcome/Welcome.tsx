import { Navbar } from "../navbar/Navbar";
import style from "./Welcome.module.css";

const headerContent: string[] = [
  "18+ NSFW",
  "Gay man 🌲💚🤍💙🫐",
  "He / Him",
  "Pup - Pony - Furry 🐕🐴🐉",
  "Web Developer",
  "Often found in Manchester 🇬🇧 or Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "Trans rights! 🏳️‍⚧️",
  "Join a fucking union! 🌹",
];

export const Welcome = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <h1>Welcome ^w^</h1>
        <ul>{
            headerContent.map((str) => {
                return (
                    <li>{str}</li>
                )
            })
            }
            </ul>
      </header>
      <section /*grid container */>
        <section /*side bar */>

        </section>
        <section /*main content to right */>
        <p>
          {`Welcome ^w^, my name is Hiroji and I'm a weird queer animal person
    often found in Scotland, UK. 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🇬🇧`}
        </p>
        </section>
        {/*bits about myself, pride flag in  sidebar rent of content below title as a list to the right
    in mobile collapse to bar*/}
      </section>
      <footer>
        <p>{`This website was built using React with TypeScript.`}</p>
      </footer>
    </>
  );
};
