import "./globals.css";
import style from "./page.module.css";
import { Hanken_Grotesk } from "next/font/google";
import dados from "@/assets/data.json";
import Image from "next/image";
import Icones from "public/images/Icones";

const font = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

export default function Home() {
  return (
    <main className={style.main}>
      <div className={font.className}>
        <div className={style.card}>
          <section className={style.bloco_azul}>
            <h2>Seu Resultado</h2>
            <div className={style.circulo}>
              <h3>76</h3>
              <p>de 100</p>
            </div>
            <h3>Muito bom!</h3>
            <p>
              Sua pontuação foi maior que 65% das que participaram dos testes.
            </p>
          </section>
          <section className={style.container_resumo}>
            <h4 className={style.resumo}>Resumo</h4>
            <ul className={style.lista}>
              {dados.map((e) => (
                <li key={e.category} style={{ backgroundColor: e.color }}>
                  <Icones imagem={e.icon} />
                  <p className={style.categoria} style={{ color: e.texto }}>
                    {e.category}
                  </p>
                  <p className={style.score}>{e.score}</p>
                  <p className={style.score_total}>/100</p>
                </li>
              ))}
              <button className={style.botao_continuar}>Continuar</button>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
