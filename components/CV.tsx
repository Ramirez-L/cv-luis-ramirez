import React from "react";

const CV = () => {
  return (
    <div className="text-black grid grid-cols-6 px-52 my-6">
      <div className=" col-span-5 my-2">
        <p>
          <b className="text-6xl font-bold">Hola,&nbsp;</b>{" "}
          <i className="gradient-text font-bold text-6xl text-transparent">
            Bienvenido
          </i>
        </p>
      </div>
      <div className="col-span-5 my-1">
        <h1 className="text-2xl">&nbsp;Mi nombre es Luis Ramírez</h1>
      </div>
      <div className="col-span-5 my-1">
        <p>Data Engineer | Full Stack</p>
      </div>
      <div className=" col-span-4">
        <p className="text-slate-800 text-justify text-2xl">
          Creando funcionalidades y soluciones basadas en datos para una mejor
          experiencia en herramientas digitales. Cerrando la brecha entre las
          necesidades de los usuarios, las posibilidades tecnológicas y los
          objetivos del negocio.
        </p>
      </div>
      <div className="grid grid-cols-subgrid col-span-6 gap-8 my-2 mt-10">
        <div className=" col-span-3">
          <div>
            <h2 className="font-bold">Acerca de Mi</h2>
          </div>
          <br />
          <div>
            <p className="text-slate-700 text-justify">
              Luis Ramírez es inteligente, altamente educado, enfocado,
              diligente, productivo, emprendedor, innovadora, amigable,
              visionario, colaborador, de mente abierta, crítico, lógico,
              curioso, práctico.
            </p>
          </div>
          <br />
          <div>
            <p className="text-slate-700 text-justify">
              Puedo crear soluciones basadas en la experiencia de usuario, en
              conjunto con los datos disponibles de la empresa o externos para
              poder obtimizar los recursos disponibles. Incluyendo la
              planificación a futuro de nuevas funcionalidades.
            </p>
          </div>
          <br />
          <div>
            <p className="text-slate-700 text-justify">
              Uno de mis puntos a favor es la basta experiencia en atención al
              cliente, donde la escucha activa permite la toma de decisiones
              acertivas para comunicar soluciones, convirtiendo contenido
              técnico en lenguaje apto para distintas personas.
            </p>
          </div>
          <br />
          <div className=" col-span-3">
            <div>
              <h2 className="font-bold">Contacto</h2>
            </div>
            <div>
              <p className="text-slate-700">
                &nbsp;&nbsp;luisramirezn95@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-3">
          <div>
            <div>
              <h2 className="font-bold">Mi enfoque del trabajo</h2>
            </div>
            <br />
            <div>
              <p className="text-slate-700 text-justify">
                Mi enfoque se basa en Agile y Scrum. Disfruto colaborando
                estrechamente con equipos multifuncionales, iterando en el
                proceso de desarrollo. Al aplicar los estándares de la
                industria, me esfuerzo constantemente por crear experiencias y
                productos que realmente tengan un impacto positivo en los
                usuarios. Para ello, mantengo los mejores enfoques para impulsar
                la satisfacción del cliente y los objetivos de las partes
                interesadas.
              </p>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-subgrid col-span-3 gap-1">
            <div className=" col-span-3">
              <div>
                <h2 className="font-bold">Mis Roles</h2>
              </div>
              <div>
                <p className="text-slate-700">
                  <b className="text-slate-700">&nbsp;-&nbsp;Fraud Analyst</b>{" "}
                  <i className="text-slate-600">
                    {" "}
                    | Binance P2P Team (Actual){" "}
                  </i>
                </p>
              </div>
              <div>
                <p className="text-slate-700">
                  <b className="text-slate-700">&nbsp;-&nbsp;Data Engineer</b>{" "}
                  <i className="text-slate-600">| Dinero Gelt </i>
                </p>
              </div>
              <div>
                <p className="text-slate-700">
                  <b className="text-slate-700">
                    &nbsp;-&nbsp;Data Analyst - Operaciones
                  </b>{" "}
                  <i className="text-slate-600"> | Glovo App</i>
                </p>
              </div>
            </div>
            <br />
            <div className=" col-span-3">
              <div>
                <h2 className="font-bold">Educación</h2>
              </div>
              <div>
                <p>
                  <b className="text-slate-700">
                    &nbsp;-&nbsp;Ingeniería Electrónica
                  </b>{" "}
                  <i className="text-slate-600">
                    | Universidad Simón Bolívar | Venezuela
                  </i>
                </p>
              </div>
              <br />
              <div>
                <p>
                  <b className="text-slate-700">
                    &nbsp;-&nbsp;Técnicatura en Redes y Ciberseguridad
                  </b>
                  <i className="text-slate-600">
                    {" "}
                    | IES 9012 en Informática | San Rafael (Cursando)
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
