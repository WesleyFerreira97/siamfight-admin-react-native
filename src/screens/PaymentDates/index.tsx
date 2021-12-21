import React, { Component, useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function PaymentDates() {
  return (
    <View style={globalStyles.container} >
        <Text style={globalStyles.title}>Payment Date</Text>
   </View>
  );
}