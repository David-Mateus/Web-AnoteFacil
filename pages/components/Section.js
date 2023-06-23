import Link from "next/link";
export default function Section() {
    return(
        <section className="flex flex-col md:flex-row p-8 md:p-16 md:gap-8 h-auto md:h-96 mt-12 mb-16 justify-center items-center bg-gray-200 rounded-md">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-gray-700 font-bold text-3xl md:text-4xl leading-tight">
              Organize seu <br className="md:hidden" /> trabalho e vida,
              finalmente.
            </h1>
            <p className="text-gray-500 text-lg">
              Finalmente alcance o foco, a organização e a calma com o 
              <span className="text-indigo-700 font-semibold"> Anotefacil</span>.
            </p>
            <div className="flex flex-col md:flex-row">
              <Link
                href="/home"
                className="mt-4 md:mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Comece grátis
              </Link>
            </div>
          </div>
        </section>
    )
}