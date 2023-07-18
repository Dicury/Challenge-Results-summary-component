import reaction from "public/images/icon-reaction.svg";
import memory from "public/images/icon-memory.svg";
import verbal from "public/images/icon-verbal.svg";
import visual from "public/images/icon-visual.svg";
import Image from "next/image";

export default function Icones({ imagem }) {
  const lista = [reaction, memory, verbal, visual];
  const caminho = lista[imagem];
  return <Image src={caminho} width={20} height={20} alt="" />;
}
