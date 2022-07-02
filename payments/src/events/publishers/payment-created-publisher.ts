import { Subjects, Publisher, PaymentCreatedEvent } from "@vnvc/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
