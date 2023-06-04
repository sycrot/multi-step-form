export type ContextType = {
  activeStepIndex: number;
  setActiveStepIndex: (num: number) => void;
  formData: any,
  setFormData: (data: any) => void
}