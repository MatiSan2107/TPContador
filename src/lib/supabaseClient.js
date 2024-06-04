'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function getNumero() {
  const numero = await prisma.NC.findUnique({
    where: { id: 1 } // Suponiendo que el número que deseas obtener tiene id 1
  });
  return numero;
}
export async function updateNumero(newNumero) {
    try {
      // Actualiza el número en la base de datos utilizando el cliente de Prisma
      const updatedNumero = await prisma.NC.update({
        where: { id: 1 }, // Suponiendo que el número que deseas actualizar tiene id 1
        data: { Numero: newNumero } // Actualiza el campo 'Numero' con el nuevo valor
      });
      
      return updatedNumero;
    } catch (error) {
      console.error('Error al actualizar el número:', error);
      throw error;
    }
}