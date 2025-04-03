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