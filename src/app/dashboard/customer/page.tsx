import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Customer() {
  const session = await getServerSession(authOptions); //Pegando os dados da sessão

  //caso não esteja logado ou esteja sem dados do usuário, redireciona.
  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <Container>
      <main>
        <div>
          <h1>Meus clientes</h1>
        </div>
      </main>
    </Container>
  );
}
