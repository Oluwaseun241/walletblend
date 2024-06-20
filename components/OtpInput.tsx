import { View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

interface PinInputProps {
  pinValue: string;
  setPinValue: (val: string) => void;
}

export default function PinInput({ pinValue, setPinValue }: PinInputProps) {
  return (
    <View>
      <SmoothPinCodeInput />
    </View>
  );
}
