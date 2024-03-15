import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  //Quando não estiver em produção, use desta forma, recomendado pela doc do prisma
  //No ambiente de desenvolvimento, o código garante que apenas uma instância do PrismaClient 
  //seja criada e compartilhada entre os diferentes módulos do aplicativo, evitando assim a sobrecarga 
  //de conexões desnecessárias ao banco de dados. Isso é feito usando uma variável global para armazenar a instância, 
  //garantindo que ela seja criada apenas uma vez e que todos os módulos possam acessá-la de forma consistente.
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };

  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }

  prisma = globalWithPrisma.prisma;
}

export default prisma;
