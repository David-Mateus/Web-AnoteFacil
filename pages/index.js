import Section from "./components/Section";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* <NavHeader/> */}
      <Head>
        <title>Anote Fácil - Anotações Diárias</title>
        <meta
          name="description"
          content="Um site para ajudar você a fazer anotações diárias de forma fácil e organizada."
        />
        <link rel="icon" href="/Icon.png" />
      </Head>
      <div className="flex justify-center items-center bg-indigo-500 min-h-screen  ">
        <Section/>
      </div>
    </>
  );
}
