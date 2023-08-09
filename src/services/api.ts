import axios from "axios";
import Cookies from "js-cookie";
import { Client } from "../models/client.model";
// ID del bin desde una cookie o asignar uno por defecto
const binId = Cookies.get("binId") || "64d3354cb89b1e2299cdbff3";

// Clave maestra desde una variable de entorno o asignar una por defecto
const masterKey =
  import.meta.env.VITE_MASTER_KEY ||
  "$2b$10$TB7Nvgqst8gFtuSRZHONfOgUUwCrgOZCzOaEMHvDR79e/f9o/oivK";

// URL base de la API
const baseUrl = "https://api.jsonbin.io/v3/b";

export async function getClients() {
  try {
    // Bin actual con los clientes existentes
    const response = await axios.get(`${baseUrl}/${binId}`, {
      headers: {
        "X-Master-Key": masterKey,
      },
    });

    const clients = response.data.record.clients;
    return clients;
  } catch (error) {
    console.error(error);
  }
}
export async function createClient(name: string, email: string) {
  try {
    const response = await axios.get(`${baseUrl}/${binId}`, {
      headers: {
        "X-Master-Key": masterKey,
      },
    });

    const clients = response.data.record.clients;

    const nextId =
      clients.length > 0
        ? Math.max(...clients.map((c: Client) => c.id)) + 1
        : 1;

    const newClient = {
      id: nextId,
      name,
      email,
    };
    clients.push(newClient);
    await axios.put(
      `${baseUrl}/${binId}`,
      {
        clients,
      },
      {
        headers: {
          "X-Master-Key": masterKey,
          "Content-Type": "application/json",
        },
      }
    );

    Cookies.set("binId", binId);

    return newClient;
  } catch (error) {
    console.error(error);
  }
}
export async function updateClient(id: number, name: string, email: string) {
  try {
    const response = await axios.get(`${baseUrl}/${binId}`, {
      headers: {
        "X-Master-Key": masterKey,
      },
    });

    const clients = response.data.record.clients;

    const index = clients.findIndex((client: Client) => client.id === id);
    if (index !== -1) {
      clients[index].name = name;
      clients[index].email = email;

      await axios.put(
        `${baseUrl}/${binId}`,
        {
          clients,
        },
        {
          headers: {
            "X-Master-Key": masterKey,
            "Content-Type": "application/json",
          },
        }
      );

      return clients[index];
    } else {
      throw new Error("Cliente no encontrado");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function deleteClient(id: number) {
  try {
    const response = await axios.get(`${baseUrl}/${binId}`, {
      headers: {
        "X-Master-Key": masterKey,
      },
    });

    const clients = response.data.record.clients;

    const index = clients.findIndex((client: Client) => client.id === id);

    if (index !== -1) {
      const deletedClient = clients.splice(index, 1)[0];

      await axios.put(
        `${baseUrl}/${binId}`,
        {
          clients,
        },
        {
          headers: {
            "X-Master-Key": masterKey,
            "Content-Type": "application/json",
          },
        }
      );

      return deletedClient;
    } else {
      throw new Error("Cliente no encontrado");
    }
  } catch (error) {
    console.error(error);
  }
}
