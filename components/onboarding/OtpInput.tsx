import SmoothPinCodeInput from "@dreamwalk-os/react-native-smooth-pincode-input";
import { View } from "react-native";

interface PinInputProps {
  pinValue: string;
  setPinValue: (val: string) => void;
}

export default function PinInput({ pinValue, setPinValue }: PinInputProps) {
  return (
    <View style={{ margin: "auto", marginTop: 10 }}>
      <SmoothPinCodeInput
        containerStyle={{
          width: "80%",
          backgroundColor: "#EDEFF3",
        }}
        cellSize={50}
        cellSpacing={15}
        maskDelay={500}
        cellStyle={{
          padding: 4,
          height: 50,
          borderWidth: 1,
          borderColor: "#696969",
          borderRadius: 10,
        }}
        codeLength={6}
        value={pinValue}
        onTextChange={(code: string) => setPinValue(code)}
      />
    </View>
  );
}
