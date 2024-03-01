import { PrismaClient } from "@prisma/client";
import { fakerES as faker } from "@faker-js/faker";
import { eventCategories } from "./data/eventCategory.js";
import { eventsData } from "./data/eventsData.js";

const prisma = new PrismaClient();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  // Crear y guardar las categorías
  for (const category of eventCategories) {
    await prisma.category.create({ data: category });
  }
  console.log("✅ Categorías insertadas.");

  // Generar 100 eventos (o el número de eventos que tengas predefinidos)
  const eventPromises = eventsData.map(async (currentEvent) => {
    // Crear ubicación
    const locationData = faker.location;
    const location = await prisma.location.create({
      data: {
        address: locationData.streetAddress(),
        city: locationData.city(),
        country: "España",
      },
    });

    // Crear evento usando los datos del evento actual
    const event = await prisma.event.create({
      data: {
        name: currentEvent.name,
        dateTime: faker.date.future(),
        description: currentEvent.description,
        imageUrl: currentEvent.imageUrl,
        categoryId: currentEvent.categoryId,
        locationId: location.id,
      },
    });

    // Crear entradas para el evento
    const tickets = Array.from({ length: getRandomInt(1, 3) }).map(() => ({
      eventId: event.id,
      priceCents: getRandomInt(5000, 50000), // Precio entre 5 y 50 euros
      stock: getRandomInt(20, 500), // Stock entre 20 y 500 tickets
    }));

    // Insertar las entradas utilizando Promise.all
    await Promise.all(
      tickets.map((ticket) => prisma.ticket.create({ data: ticket }))
    );
  });

  await Promise.all(eventPromises);
  console.log("✅ Eventos insertados.");
  console.log("✅ Tickets insertados.");
  console.log("✅ Localizaciones insertadas.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
