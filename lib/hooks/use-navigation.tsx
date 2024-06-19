import { useNavigation } from "@react-navigation/native";

interface navigationProps {
  navigate: (screen?: string, params?: any) => void;
  goBack: () => void;
  // reset: (index: number, routeNames: Routes[]) => void;
}

export default function UseNavigate() {
  const navigation = useNavigation<navigationProps>();
  function navigate(screen: string, params?: any) {
    navigation.navigate(screen, params);
  }
  function goBack() {
    navigation.goBack();
  }
  return { navigate, goBack };
}
