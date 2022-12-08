import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParamList';

export const useHomeNavigation = () =>
  useNavigation<StackNavigationProp<RootStackParamList>>();
