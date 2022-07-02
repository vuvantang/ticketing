import { Publisher, OrderCreatedEvent, Subjects } from "@vnvc/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
