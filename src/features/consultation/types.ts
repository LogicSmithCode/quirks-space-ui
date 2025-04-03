export interface ConsultationFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  category?: string;
}

export interface ConsultationBenefit {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

export interface CategoryMap {
  [key: string]: string;
}

export interface CalendlyEventData {
  event_type: {
    uuid: string;
    kind: string;
    slug: string;
    name: string;
  };
  invitee: {
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  event: {
    uuid: string;
    start_time: string;
    end_time: string;
    location: {
      type: string;
      location: string;
    };
  };
  scheduling_url: string;
  cancel_url: string;
  reschedule_url: string;
}