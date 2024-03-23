import { Container } from "@/components/container";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions) //Pegando os dados da sessão

  //caso não esteja logado ou esteja sem dados do usuário, redireciona.
  if(!session || !session.user){
    redirect("/")
  }

  return (
    //Englobando todo o conteúdo na página em um componente para estilos especificados
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
}
