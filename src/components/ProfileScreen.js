import React from 'react'
import { Text } from 'react-native';

export const ProfileScreen = ({navigation, route}) => {
  return (
    <Text>El perfil del usuaruo es: {route.params.name}</Text>
  )
}

export default ProfileScreen;