import { FormType } from "./FormType";

export type ContextType = {
  activeStepIndex: number;
  setActiveStepIndex: (num: number) => void;
  formData: FormType,
  setFormData: (data: FormType) => void
}