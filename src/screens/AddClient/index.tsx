import React, { useState, useEffect } from 'react';
import { View, ScrollView } from "react-native";
import { globalStyles } from '../../styles/globalStyles';
import { styles } from './style';
import { AddClientForm } from '../../components/addClientForm/index';

export function AddClient() {

  return (
    <View style={globalStyles.container}>
        <AddClientForm />
    </View>
  )
}
