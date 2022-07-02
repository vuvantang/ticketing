import { Publisher, Subjects, TicketCreatedEvent } from "@vnvc/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
