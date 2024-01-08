import {TouchableOpacity, Text} from 'react-native'
import { SIZES , COLORS} from '../constants/theme';

const Chip = ({ type, handleChipSwitch, active }) => {
    return (
      <TouchableOpacity
        onPress={() => handleChipSwitch(type)}
        style={{
          width: "auto",
          paddingHorizontal: SIZES.small,
          paddingVertical: SIZES.xxSmall,
          backgroundColor: active ? "black" : COLORS.gray,
          borderRadius: SIZES.xxSmall,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: active ? "white" : COLORS.textSecondary,
            fontWeight: "bold",
          }}
        >
          {type}
        </Text>
      </TouchableOpacity>
    );
  };

  export default Chip;