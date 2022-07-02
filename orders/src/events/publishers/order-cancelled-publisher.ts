import { Subjects, Publisher, OrderCancelledEvent } from "@vnvc/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
