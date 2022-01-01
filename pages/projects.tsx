import Head from "next/head";
import styles from "styles/Projects.module.scss";
const AllProjects = [
  {
    name: "Tracker Website",
    description: `A site which I made when I was learning JavaScript which can tell
            the information about user's device.`,
    visitUrl: "https://tracker-website.vercel.app",
    githubUrl: "https://github.com/PhantomKnight287/Tracker-Website",
  },
  {
    name: "Chat App",
    description:
      "An App made using React Native and firebase. You can install this app in your android device and talk with someone in real time.",
    visitUrl:
      "https://drive.google.com/file/d/1OYia-6pMIxtyf9wdyKSs2wjRrPLcMuUM/view?usp=sharing",
    githubUrl: "https://github.com/PhantomKnight287/ReactNative",
  },
  {
    name: "PhantomKnight",
    description:
      "A Discord Bot made using Typescript and Discord.js. It has Automoderation Commands,Leveling,Image Manipulation,Music Commands. You can create Your Own playlist.",
    visitUrl: "https://top.gg/bot/838686966387965992",
    githubUrl: "https://github.com/PhantomKnight287/PhantomKnight",
  },
];
const OtherProjects = [
  {
    name: "Hackarmour Landing",
    visitUrl: "https://ha-landing.pages.dev/",
    githubUrl: "https://github.com/Hackarmour/hackarmour-landing",
  },
  {
    name: "Discord Assistant Js",
    githubUrl: "https://github.com/hackarmour/discord-assistant-js",
  },
  {
    name: "Discord Assistant Py",
    githubUrl: "https://github.com/hackarmour/discord-assistant-py",
  },
  {
    name: "Kek Blogs",
    githubUrl: "https://github.com/kekwlabs/kek-blogs",
    visitUrl: "https://kekblogs.pages.dev/",
  },
];
function Projects() {
  return (
    <div>
      <Head>
        <title>Gurpal Singh | Projects</title>
      </Head>
      <div className={styles.projectsContainer}>
        <div className={styles.heading}>
          <h1>Projects</h1>
        </div>
        <p className={styles.head}>
          I&apos;ve made few things and you can find them on my
          <a
            href="https://github.com/PhantomKnight287"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
        </p>
        {AllProjects.map((project, index) => {
          return (
            <div className={styles.projectDiv} key={index}>
              <h3 className={styles.h3}>{project.name}</h3>
              <p className={styles.p}>{project.description}</p>
              <div>
                <button className={styles.button}>
                  <a
                    href={`${project.visitUrl}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                </button>
                <button className={styles.button}>
                  <a
                    href={`${project.githubUrl}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </button>
              </div>
            </div>
          );
        })}
        <div className={styles.heading} style={{ fontSize: "1.2rem" }}>
          <h1>Other Projects On Which I&apos;ve Worked</h1>
        </div>
        {OtherProjects.map((project, index) => {
          return (
            <div className={styles.otherProjectDiv} key={index}>
              <h3 className={styles.otherH3}>{project.name}</h3>
              <div>
                {project.visitUrl && (
                  <button className={styles.button}>
                    <a
                      href={`${project.visitUrl}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit
                    </a>
                  </button>
                )}
                <button className={styles.button}>
                  <a
                    href={`${project.githubUrl}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
