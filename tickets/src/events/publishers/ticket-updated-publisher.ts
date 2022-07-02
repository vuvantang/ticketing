import { Publisher, Subjects, TicketUpdatedEvent } from "@vnvc/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
