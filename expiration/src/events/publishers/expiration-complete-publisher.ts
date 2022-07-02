import { Subjects, Publisher, ExpirationCompleteEvent } from "@vnvc/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
