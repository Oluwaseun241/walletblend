export type ItemProps = {
  id: string;
  title: string;
  description: string;
  image: any;
};

export interface OnboardingItemProps {
  item: ItemProps;
}

export interface AnimatedButtonProps {
  percentage: number;
  scrollTo: () => void;
}
